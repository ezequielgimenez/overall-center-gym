import FormComp from "../components/Formulario";

export default async function FormularioPage({
  searchParams,
}: {
  searchParams: Promise<{
    sedeId?: string;
    planId?: string;
  }>;
}) {
  const { sedeId, planId } = await searchParams;

  return <FormComp sedeId={Number(sedeId)} planId={planId} />;
}
