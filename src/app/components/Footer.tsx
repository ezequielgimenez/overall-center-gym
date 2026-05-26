import Image from "next/image";
import Link from "next/link";

export default function FooterComp() {
  return (
    <footer
      className="
        flex
        flex-col
        lg:flex-row
        justify-center
        lg:justify-around
        items-center
        gap-[50px]
        lg:gap-0
        py-[60px]
        lg:h-[385px]
        bg-[linear-gradient(180deg,#4F5658_0%,#232526_100%)]
        px-6
      "
    >
      {/* LOGO */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo/logo-footer.png"
          width={150}
          height={150}
          unoptimized
          alt="Logo footer"
          className="w-[120px] lg:w-[150px] h-auto"
        />

        <p className="font-description text-[14px] lg:text-[16px] text-white max-w-[300px]">
          La cadena más grande de Tucumán.
        </p>
      </div>

      {/* LINKS */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-[50px]
          sm:gap-[80px]
          text-center
          sm:text-left
        "
      >
        {/* SECCIONES */}
        <div className="flex flex-col">
          <p className="font-bold font-description text-[16px] text-white pb-[24px]">
            Secciones
          </p>

          <div className="flex flex-col gap-[16px]">
            <Link
              href="/"
              className="font-description font-extralight text-[15px] lg:text-[16px] text-white hover:text-[#F1EC16] transition-colors duration-300"
            >
              Inicio
            </Link>

            <Link
              href="/#planes"
              className="font-description font-extralight text-[15px] lg:text-[16px] text-white hover:text-[#F1EC16] transition-colors duration-300"
            >
              Precios
            </Link>

            <Link
              href="/#sedes"
              className="font-description font-extralight text-[15px] lg:text-[16px] text-white hover:text-[#F1EC16] transition-colors duration-300"
            >
              Sedes
            </Link>
          </div>
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col">
          <p className="font-bold font-description text-[16px] text-white pb-[24px]">
            Contacto
          </p>

          <div className="flex flex-col gap-[16px]">
            <a
              href="mailto:overallgymtuc@gmail.com"
              className="font-description font-extralight text-[15px] lg:text-[16px] text-white "
            >
              overallgymtuc@gmail.com
            </a>

            <a
              href="https://wa.me/543814726106"
              target="_blank"
              rel="noopener noreferrer"
              className="font-description font-extralight text-[15px] lg:text-[16px] text-white "
            >
              +54 381 472-6106
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
