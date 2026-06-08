import { prisma } from "@/src/lib/prisma";

type Props = {
  searchParams: {
    search?: string;
    sede?: string;
  };
};

export default async function ClientesComp({ searchParams }: Props) {
  const params = await searchParams;

  const search = params.search ?? "";
  const sede = params.sede ?? "";

  const inscripciones = await prisma.inscripcion.findMany({
    where: {
      estado: "pagado",

      ...(search && {
        nombre: {
          contains: search,
          mode: "insensitive",
        },
      }),

      ...(sede && {
        sede,
      }),
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="py-28 md:py-40 px-4 md:px-20">
      <h1 className="text-2xl md:text-4xl font-hero text-white mb-8">
        CLIENTES / INSCRIPTOS WEB
      </h1>
      <form className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="search"
          placeholder="Buscar por nombre y apellido del cliente..."
          defaultValue={search}
          className="bg-white rounded-lg px-4 py-3 flex-1"
        />

        <select
          name="sede"
          defaultValue={sede}
          className="bg-white rounded-lg px-4 py-3"
        >
          <option value="">Todas las sedes</option>

          <option value="SEDE AV ALEM">SEDE AV ALEM</option>

          <option value="SEDE SAN MARTÍN">SEDE SAN MARTÍN</option>

          <option value="SEDE BELGRANO">SEDE BELGRANO</option>
          <option value="SEDE CÓRDOBA">SEDE CÓRDOBA</option>
          <option value="SEDE LOMAS">SEDE LOMAS</option>
          <option value="SEDE 9 DE JULIO">SEDE 9 DE JULIO</option>
          <option value="SEDE LA BANDA">SEDE LA BANDA</option>
          <option value="SEDE ADOLFO">SEDE ADOLFO</option>
          <option value="SEDE CARIOLA">SEDE CARIOLA</option>
          <option value="SEDE YERBA BUENA">SEDE YERBA BUENA</option>
        </select>

        <button
          type="submit"
          className="bg-yellow-400 px-6 py-3 rounded-lg font-bold"
        >
          Buscar
        </button>
      </form>

      {/* MOBILE */}
      <div className="flex flex-col gap-4 md:hidden">
        {inscripciones.map((c) => (
          <div key={c.id} className="bg-white rounded-2xl p-5 shadow-lg border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-card text-lg font-bold">{c.nombre}</h2>

              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {c.estado}
              </span>
            </div>

            <div className="space-y-2 text-sm font-description">
              <p>
                <strong>Email:</strong> {c.email}
              </p>
              <p>
                <strong>DNI:</strong> {c.dni}
              </p>

              <p>
                <strong>Sede:</strong> {c.sede}
              </p>

              <p>
                <strong>Plan:</strong> {c.plan}
              </p>

              <p>
                <strong>Fecha:</strong>{" "}
                {c.paidAt
                  ? new Date(c.paidAt).toLocaleDateString("es-AR")
                  : "-"}
              </p>

              <p className="text-lg font-bold pt-2">${c.monto}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="font-card font-bold text-[18px] p-4 text-left">
                Nombre y apellido
              </th>
              <th className="font-card font-bold text-[18px] p-4 text-left">
                Email
              </th>
              <th className="font-card font-bold text-[18px] p-4 text-left">
                DNI
              </th>
              <th className="font-card font-bold text-[18px] p-4 text-left">
                Sede
              </th>
              <th className="font-card font-bold text-[18px] p-4 text-left">
                Plan
              </th>
              <th className="font-card font-bold text-[18px] p-4 text-left">
                Estado
              </th>
              <th className="font-card font-bold text-[18px] p-4 text-left">
                Fecha Pago
              </th>
              <th className="font-card font-bold text-[18px] p-4 text-left">
                Monto
              </th>
            </tr>
          </thead>

          <tbody className="bg-amber-100">
            {inscripciones.map((c) => (
              <tr
                key={c.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="font-description font-medium p-4">{c.nombre}</td>
                <td className="font-description font-medium p-4">{c.email}</td>
                <td className="font-description font-medium p-4">{c.dni}</td>
                <td className="font-description font-medium p-4">{c.sede}</td>
                <td className="font-description font-medium p-4">{c.plan}</td>
                <td className="font-description font-medium p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {c.estado}
                  </span>
                </td>
                <td className="p-4">
                  {c.paidAt
                    ? new Date(c.paidAt).toLocaleDateString("es-AR")
                    : "-"}
                </td>
                <td className="p-4 font-bold">${c.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
