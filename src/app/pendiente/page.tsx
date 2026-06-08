import Link from "next/link";

export default function PendientePage() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        py-30
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
        {/* ICONO */}
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
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3"
            />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>

        <p className="font-description text-white text-sm md:text-base mb-4">
          ESTAMOS PROCESANDO TU PAGO
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
            text-[#F1EC16]
            text-[38px]
            md:text-[60px]
            leading-tight
          "
        >
          PENDIENTE
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
          Estamos esperando la confirmación de Mercado Pago para finalizar el
          proceso.
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
            Algunos medios de pago pueden tardar unos minutos o incluso algunas
            horas en acreditarse.
          </p>

          <p className="font-description text-[#F1EC16] font-semibold mt-3">
            No es necesario volver a realizar el pago.
            <br /> Una vez aceptado el pago acercate a tu sede que seleccionaste
            con el comprobante de mercado pago.
          </p>
        </div>

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
