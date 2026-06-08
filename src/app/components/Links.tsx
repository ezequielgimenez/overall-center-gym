import Image from "next/image";
import Link from "next/link";

export function EnlacesComp() {
  return (
    <section className="relative flex flex-col justify-center items-center pb-28 lg:pb-0 min-h-[600px] lg:h-[900px] bg-[linear-gradient(180deg,#2E2E2E_31%,#5D5D5D_100%)] overflow-hidden px-4">
      {/* TEXTO */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[150px] lg:pt-0 px-4">
        <h2 className="font-hero text-[40px] md:text-[50px] lg:text-[64px] text-white">
          OVERALL CENTER GYM
        </h2>

        <p className="font-description text-[20px] md:text-[24px] lg:text-[27px] text-white">
          La cadena más grande de Tucumán.
        </p>
      </div>

      <Image
        src="/images/overlay.png"
        width={899}
        height={900}
        unoptimized
        alt="Logo overlay"
        className="absolute w-[500px] lg:w-[899px] h-auto pointer-events-none"
      />
      <div className="relative flex flex-col z-10 pt-[30px] lg:pt-[40px] gap-[16px] text-center">
        <Link
          href="/precios"
          className="max-w-[320px] rounded-full bg-[#F1EC16] py-[16px] font-description text-[17px] text-[#444444] cursor-pointer hover:bg-[#f8f55c] transition-colors duration-300"
        >
          Ver precios
        </Link>
        <Link
          href="/sedes"
          className="max-w-[320px] rounded-full bg-[#F1EC16] px-8 py-[16px] font-description text-[17px] text-[#444444] cursor-pointer hover:bg-[#f8f55c] transition-colors duration-300"
        >
          Conocé nuestras sedes
        </Link>
      </div>

      <div className="flex gap-[16px] pt-[32px]">
        <a
          href="https://www.instagram.com/overallcentergym"
          className="group"
          target="_blank"
        >
          <Image
            src="/icons/instagram.png"
            width={46}
            height={46}
            unoptimized
            alt="Instragram"
            className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(241,236,22,0.8)]"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100063526722638"
          className="group"
          target="_blank"
        >
          <Image
            src="/icons/facebook.png"
            width={46}
            height={46}
            unoptimized
            alt="Facebook"
            className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(241,236,22,0.8)]"
          />
        </a>
        <a
          href="https://www.tiktok.com/@overallcentergym"
          className="group"
          target="_blank"
        >
          <Image
            src="/icons/tiktok.png"
            width={46}
            height={46}
            unoptimized
            alt="Tiktok"
            className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(241,236,22,0.8)]"
          />
        </a>
      </div>
    </section>
  );
}
