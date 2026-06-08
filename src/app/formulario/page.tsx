import FormComp from "../components/Formulario";
import { redirect } from "next/navigation";

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
  return <FormComp sedeId={Number(sedeId)} planId={planId} />;
}
