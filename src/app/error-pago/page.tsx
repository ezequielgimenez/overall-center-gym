import Link from "next/link";

export default function ErrorPagoPage() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        py-40
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
          shadow-[0px_4px_40px_rgba(255,80,80,0.20)]
        "
      >
        {/* ICONO */}
        <div
          className="
            w-24
            h-24
            mx-auto
            mb-8
            rounded-full
            bg-red-500
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </div>

        <p className="font-description text-white text-sm md:text-base mb-4">
          NO PUDIMOS CONFIRMAR EL PAGO
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
          PAGO
        </h1>

        <h1
          className="
            font-hero
            text-red-500
            text-[38px]
            md:text-[60px]
            leading-tight
          "
        >
          RECHAZADO
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
          No pudimos completar el pago de tu inscripción.
          <br />
          Esto puede ocurrir por un problema con la tarjeta, fondos
          insuficientes o una validación del banco.
        </p>

        <div
          className="
            mt-8
            rounded-2xl
            bg-[#555555]
            p-5
          "
        >
          <p className="font-description text-white/90 leading-7">
            Si el problema persiste, intentá nuevamente con otro medio de pago o
            comunicate con nosotros para recibir ayuda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            href="/#planes"
            className="
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
            Volver a intentar
          </Link>

          <Link
            href="/"
            className="
              border-2
              border-white
              text-white
              font-description
              font-bold
              px-8
              py-4
              rounded-full
              hover:bg-white
              hover:text-[#444444]
              transition-colors
              duration-300
            "
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
