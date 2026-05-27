import Image from "next/image";

export default function RedesComp() {
  return (
    <div id="redes" className="pt-[80px] lg:pt-[120px] text-center px-4">
      <p className="font-description text-[14px] lg:text-[16px] text-white tracking-[1.6px]">
        CONTÁCTATE CON NOSOTROS
      </p>

      <h3
        className="
          text-[38px]
          sm:text-[45px]
          lg:text-[60px]
          font-hero
          font-normal
          text-white
          text-center
          leading-[44px]
          sm:leading-[55px]
          lg:leading-[70px]
          pt-6
          lg:pt-8
          pb-[70px]
          lg:pb-[100px]
        "
      >
        NUESTRAS <span className="text-[#F1EC16]">REDES</span>
      </h3>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-[32px] sm:gap-[60px] lg:gap-[100px] pb-[120px] lg:pb-[200px]">
        {/* INSTAGRAM */}
        <div className="group flex items-center justify-start gap-[16px] w-[170px] cursor-pointer">
          <Image
            src="/icons/instagram2.png"
            width={32}
            height={32}
            alt="Instagram"
            unoptimized
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(241,236,22,0.8)] shrink-0"
          />

          <p className="text-white font-extralight text-[16px] transition-colors duration-300 group-hover:text-[#F1EC16]">
            Instagram
          </p>
        </div>

        {/* FACEBOOK */}
        <div className="group flex items-center justify-start gap-[16px] w-[170px] cursor-pointer">
          <Image
            src="/icons/facebook2.png"
            width={32}
            height={32}
            alt="Facebook"
            unoptimized
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(241,236,22,0.8)] shrink-0"
          />

          <p className="text-white font-extralight text-[16px] transition-colors duration-300 group-hover:text-[#F1EC16]">
            Facebook
          </p>
        </div>

        {/* TIKTOK */}
        <div className="group flex items-center justify-start gap-[16px] w-[170px] cursor-pointer">
          <Image
            src="/icons/tiktok2.png"
            width={32}
            height={32}
            alt="Tiktok"
            unoptimized
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(241,236,22,0.8)] shrink-0"
          />

          <p className="text-white font-extralight text-[16px] transition-colors duration-300 group-hover:text-[#F1EC16]">
            Tiktok
          </p>
        </div>
      </div>
    </div>
  );
}
