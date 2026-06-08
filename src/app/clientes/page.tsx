import ClientesComp from "../components/Clientes";

type PageProps = {
  searchParams: Promise<{
    search?: string;
    sede?: string;
  }>;
};

export default async function ClientesPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return <ClientesComp searchParams={params} />;
}
