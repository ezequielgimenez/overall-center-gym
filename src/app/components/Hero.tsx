import Image from "next/image";

export default function HeroComp() {
  return (
    <section className="relative h-screen">
      <div className="sm:hidden">
        <Image
          src="/images/hero360.webp"
          fill
          alt="Hero"
          priority
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="hidden sm:block lg:hidden">
        <Image
          src="/images/hero640.webp"
          fill
          alt="Hero"
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="hidden lg:block">
        <Image
          src="/images/hero.webp"
          fill
          alt="Hero"
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="w-full  mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
          <div className="text-center">
            <p className="font-description font-medium xs:text-[16px] md:text-[18px] md:text-xl text-[#F1EC16] mt-6 tracking-[1.6px] leading-5">
              ENTRENÁ SIN LIMITES 24/7
            </p>
            <h1 className="text-[55px] sm:text-[60px] md:text-[96px] font-hero font-normal text-white leading-[60px] sm:leading-[70px] mt-[28px] md:leading-[110px] sm:mt-[32px]">
              LA CADENA MÁS GRANDE DE{" "}
              <span className="text-[55px] sm:text-[60px] md:text-[96px] font-hero font-normal text-[#F1EC16]">
                TUCUMÁN
              </span>
            </h1>

            <p className="font-description font-medium text-[24px] sm:text-[28px] md:text-[35px] tracking-[0.08em] mt-[24px] sm:mt-[16px]">
              El gimnasio que nunca{" "}
              <span className="text-[#F1EC16]">duerme.</span>
            </p>

            <button className="mt-[48px] sm:mt-8 bg-[#F1EC16] px-12 py-3 rounded-full font-description text-[#110F0F] text-[20px] font-semibold cursor-pointer hover:bg-gray-200 transition-colors duration-500 ease-in-out">
              Ver todas las sedes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
