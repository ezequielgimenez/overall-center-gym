import Link from "next/link";

export default function GraciasPage() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        pt-20
        px-6
        bg-[linear-gradient(180deg,#232526_0%,#414345_100%)]
      "
    >
      <div
        className="
          max-w-2xl
          w-full
          bg-[#626262]
          rounded-3xl
          p-8
          md:p-12
          text-center
          shadow-[0px_4px_40px_rgba(241,236,22,0.25)]
        "
      >
        <div
          className="
            w-24
            h-24
            mx-auto
            mb-8
            rounded-full
            bg-[#F1EC16]
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-[#444444]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <p className="font-description text-white text-sm md:text-base mb-4">
          INSCRIPCIÓN CONFIRMADA
        </p>

        <h1
          className="
            font-hero
            text-white
            text-[38px]
            md:text-[60px]
            leading-tight
          "
        >
          ¡PAGO REALIZADO
        </h1>

        <h1
          className="
            font-hero
            text-[#F1EC16]
            text-[38px]
            md:text-[60px]
            leading-tight
          "
        >
          CON ÉXITO!
        </h1>

        <p
          className="
            font-description
            text-white
            text-[16px]
            md:text-[18px]
            mt-8
            leading-8
          "
        >
          Tu inscripción fue registrada correctamente.
          <br />
          En breve podrás acercarte a tu sede seleccionada para comenzar a
          entrenar.
        </p>

        <p
          className="
            font-description
            text-white/80
            text-sm
            mt-6
          "
        >
          Conservá el comprobante de pago por cualquier consulta.
        </p>

        <Link
          href="/"
          className="
            inline-flex
            justify-center
            items-center
            mt-10
            bg-[#F1EC16]
            text-[#444444]
            font-description
            font-bold
            px-8
            py-4
            rounded-full
            hover:bg-[#f8f55c]
            transition-colors
            duration-300
          "
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
