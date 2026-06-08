"use server";

import { Preference } from "mercadopago";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { clientMP } from "../lib/mercadopago";
import { sedes } from "../lib/planes";

export async function createPreference(formData: FormData) {
  const sedeId = Number(formData.get("sedeId"));
  const planId = formData.get("planId") as
    | "mensual"
    | "plus"
    | "trimestral"
    | "semestral"
    | "anual";
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const nacimiento = formData.get("nacimiento") as string;
  const telefono = formData.get("telefono") as string;
  const dni = formData.get("dni") as string;

  const sede = sedes.find((s) => s.id === sedeId);

  if (!sede) {
    throw new Error("Sede con ese plan no encontrado");
  }
  const precio = sede.precios[planId];

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
        success: `${process.env.APP_URL}/gracias`,
        failure: `${process.env.APP_URL}/error-pago`,
        pending: `${process.env.APP_URL}/pendiente`,
      },

      auto_return: "approved",
      notification_url: `${process.env.APP_URL}/api/webhook`,
    },
  });

  redirect(response.init_point!);
}
