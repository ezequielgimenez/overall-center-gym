"use server";

import { Preference } from "mercadopago";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { clientMP } from "../lib/mercadopago";
import { sedes } from "../lib/planes";

export async function createPreference(formData: FormData) {
  const sedeId = Number(formData.get("sedeId"));
  const planesValidos = [
    "mensual",
    "plus",
    "trimestral",
    "semestral",
    "anual",
  ] as const;

  const planRecibido = formData.get("planId");

  if (
    typeof planRecibido !== "string" ||
    !planesValidos.includes(planRecibido as (typeof planesValidos)[number])
  ) {
    throw new Error("Plan no válido");
  }

  const planId = planRecibido as (typeof planesValidos)[number];
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const nacimiento = formData.get("nacimiento") as string;
  const telefono = formData.get("telefono") as string;
  const dni = formData.get("dni") as string;

  const sede = sedes.find((s) => s.id === sedeId);

  if (!sede) {
    throw new Error("Sede no encontrada");
  }

  const precio = sede.precios[planId];

  // Validar que el plan exista y tenga un precio válido
  if (typeof precio !== "number" || !Number.isFinite(precio) || precio <= 0) {
    throw new Error("Este plan no está disponible en la sede seleccionada");
  }

  const inscripcion = await prisma.inscripcion.create({
    data: {
      nombre,
      email,
      nacimiento,
      dni,
      telefono,
      sede: sede.nombre,
      plan: planId,
      monto: precio,
      estado: "pendiente",
    },
  });
  // guardar inscripción en DB
  // estado = "pendiente"

  // crear preferencia

  const preference = new Preference(clientMP);

  const response = await preference.create({
    body: {
      items: [
        {
          id: `${sede.id}-${planId}`,
          title: `${sede.nombre} - ${planId.toUpperCase()}`,
          quantity: 1,
          unit_price: precio,
          currency_id: "ARS",
        },
      ],
      payer: {
        email,
        phone: {
          area_code: "+54",
          number: telefono,
        },
        identification: {
          type: "DNI",
          number: dni.replaceAll(".", ""),
        },
      },

      metadata: {
        sedeId: sede.id,
        sedeNombre: sede.nombre,
        planId,
        nombre,
        email,
        nacimiento,
        telefono,
        dni,
      },

      external_reference: inscripcion.id.toString(),

      back_urls: {
        success: "https://www.overallcentergym.com/gracias",
        failure: "https://www.overallcentergym.com/error-pago",
        pending: "https://www.overallcentergym.com/pendiente",
      },

      auto_return: "approved",
      notification_url: `${process.env.APP_URL}/api/webhook`,
    },
  });

  redirect(response.init_point!);
}
