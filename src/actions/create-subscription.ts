import { Preference } from "mercadopago";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { clientMP } from "../lib/mercadopago";
import { sedes } from "../lib/planes";

export async function createSubscription(formData: FormData) {
  // leer formulario

  // buscar sede

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

  // calcular monto

  const precio = sede.precios[planId];

  // guardar inscripción
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

  // crear PreApproval

  // redirect(init_point)
}
