import FormComp from "../components/Formulario";
import { redirect } from "next/navigation";
import { sedes } from "@/src/lib/planes";

export default async function FormularioPage({
  searchParams,
}: {
  searchParams: Promise<{
    sedeId?: string;
    planId?: string;
  }>;
}) {
  const { sedeId, planId } = await searchParams;

  if (!sedeId) {
    redirect("/");
  }

  // Buscar la sede seleccionada
  const sede = sedes.find((s) => s.id === Number(sedeId));

  if (!sede) {
    redirect("/");
  }

  // Obtener únicamente los planes disponibles
  const nombresPlanes: Record<string, string> = {
    mensual: "Mensual",
    plus: "Plus",
    trimestral: "Trimestral",
    semestral: "Semestral",
    anual: "Anual",
  };

  const planesDisponibles = Object.entries(sede.precios)
    .filter(
      ([_, precio]) => precio !== null && precio !== undefined && precio !== "",
    )
    .map(([id]) => ({
      id,
      nombre: nombresPlanes[id] ?? id,
    }));

  return (
    <FormComp
      sedeId={sede.id}
      planId={planId}
      planesDisponibles={planesDisponibles}
    />
  );
}
