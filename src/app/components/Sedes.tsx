"use client";

const sedes = [
  {
    id: 1,
    nombre: "ALEN",
    preventa: "PRÓXIMA SEDE - PREVENTA $30.000",
    precios: {
      mensual: "$30.000",
      plus: "$54.000",
      trimestral: "$120.000",
      semestral: "$220.000",
      anual: "$408.000",
    },
    ubicacion: "Av. Alen 595",
    whatsapp: "+54 9 381 5943775 ",
    descripcion: "Lunes a viernes: 06:00 - 00:00",
    descripcion2: "Sábados y feriados: 09:00 - 21:00",
    visible: false,
    imagenes: ["/sedes/centro-1.jpeg"],
  },

  {
    id: 2,
    nombre: "SAN MARTÍN",
    precios: {
      mensual: "$45.000",
      plus: "$54.000",
      trimestral: "$120.000",
      semestral: "$220.000",
      anual: "$408.000",
    },
    ubicacion: "San Martín 667",
    whatsapp: "+54 9 381 5158762 ",
    descripcion: "Lunes a viernes: 06:00 - 00:00",
    descripcion2: "Sábados y feriados: 09:00 - 21:00",
    visible: true,
    imagenes: [
      "/sedes/San-Martin/1.jpeg",
      "/sedes/San-Martin/2.jpeg",
      "/sedes/San-Martin/3.jpeg",
      "/sedes/San-Martin/4.jpeg",
      "/sedes/San-Martin/5.jpeg",
      "/sedes/San-Martin/6.jpeg",
    ],
  },

  {
    id: 3,
    nombre: "BELGRANO",
    precios: {
      mensual: "$48.000",
      plus: "$54.000",
      trimestral: "$132.000",
      semestral: "$228.000",
      anual: "$432.000",
    },
    ubicacion: "Av. Belgrano 4300",
    whatsapp: "+54 9 381 5813473",
    descripcion: "Abierto 24hs",
    visible: true,
    imagenes: [
      "/sedes/Belgrano/1.jpeg",
      "/sedes/Belgrano/2.jpeg",
      "/sedes/Belgrano/3.jpeg",
      "/sedes/Belgrano/4.jpeg",
      "/sedes/Belgrano/5.jpeg",
      "/sedes/Belgrano/6.jpeg",
      "/sedes/Belgrano/7.jpeg",
      "/sedes/Belgrano/8.jpeg",
      "/sedes/Belgrano/9.jpeg",
      "/sedes/Belgrano/10.jpeg",
    ],
  },

  {
    id: 4,
    nombre: "CÓRDOBA",
    precios: {
      mensual: "$45.000",
      plus: "$54.000",
      trimestral: "$120.000",
      semestral: "$220.000",
      anual: "$408.000",
    },
    ubicacion: "Córdoba 580",
    whatsapp: "+54 9 381 2127867",
    descripcion: "Lunes a viernes: 06:00 - 00:00",
    descripcion2: "Sábados y feriados: 09:00 - 21:00",
    visible: true,
    imagenes: [
      "/sedes/Cordoba/1.jpeg",
      "/sedes/Cordoba/2.jpeg",
      "/sedes/Cordoba/3.jpeg",
      "/sedes/Cordoba/4.jpeg",
      "/sedes/Cordoba/5.jpeg",
    ],
  },

  {
    id: 5,
    nombre: "LOMAS",
    precios: {
      mensual: "$48.000",
      plus: "$54.000",
      trimestral: "$132.000",
      semestral: "$228.000",
      anual: "$432.000",
    },
    ubicacion: "Av. Raya 830",
    whatsapp: "+54 9 381 2085643",
    descripcion: "Abierto 24hs",
    visible: true,
    imagenes: [
      "/sedes/Lomas/1.jpeg",
      "/sedes/Lomas/2.jpeg",
      "/sedes/Lomas/3.jpeg",
      "/sedes/Lomas/4.jpeg",
      "/sedes/Lomas/5.jpeg",
      "/sedes/Lomas/6.jpeg",
      "/sedes/Lomas/7.jpeg",
    ],
  },
  {
    id: 6,
    nombre: "9 DE JULIO",
    precios: {
      mensual: "$48.000",
      plus: "$54.000",
      trimestral: "$132.000",
      semestral: "$228.000",
      anual: "$432.000",
    },
    ubicacion: "9 de Julio 164",
    whatsapp: "+54 9 381 4726106",
    descripcion: "Abierto 24hs",
    visible: true,
    imagenes: [
      "/sedes/9-de-julio/1.jpeg",
      "/sedes/9-de-julio/2.jpeg",
      "/sedes/9-de-julio/3.jpeg",
      "/sedes/9-de-julio/4.jpeg",
      "/sedes/9-de-julio/5.jpeg",
      "/sedes/9-de-julio/6.jpeg",
      "/sedes/9-de-julio/7.jpeg",
    ],
  },

  {
    id: 7,
    nombre: "LA BANDA",
    precios: {
      mensual: "$48.000",
      plus: "$54.000",
      trimestral: "$132.000",
      semestral: "$228.000",
      anual: "$432.000",
    },
    ubicacion: "Monseñor Diaz 363",
    whatsapp: "+54 9 381 2065860",
    descripcion: "Abierto 24hs",
    visible: true,
    imagenes: [
      "/sedes/La-banda/1.jpeg",
      "/sedes/La-banda/2.jpeg",
      "/sedes/La-banda/3.jpeg",
      "/sedes/La-banda/4.jpeg",
      "/sedes/La-banda/5.jpeg",
      "/sedes/La-banda/6.jpeg",
      "/sedes/La-banda/7.jpeg",
      "/sedes/La-banda/8.jpeg",
      "/sedes/La-banda/9.jpeg",
      "/sedes/La-banda/10.jpeg",
      "/sedes/La-banda/11.jpeg",
      "/sedes/La-banda/12.jpeg",
      "/sedes/La-banda/13.jpeg",
    ],
  },

  {
    id: 8,
    nombre: "ADOLFO",
    precios: {
      mensual: "$45.000",
      plus: "$54.000",
      trimestral: "$120.000",
      semestral: "$220.000",
      anual: "$408.000",
    },
    ubicacion: "Adolfo de la Vega 460",
    whatsapp: "+54 9 381 4679990",
    descripcion: "Lunes a viernes: 06:00 - 00:00",
    descripcion2: "Sábados y feriados: 09:00 - 21:00",
    visible: true,
    imagenes: [
      "/sedes/Adolfo/1.jpeg",
      "/sedes/Adolfo/2.jpeg",
      "/sedes/Adolfo/3.jpeg",
      "/sedes/Adolfo/4.jpeg",
      "/sedes/Adolfo/5.jpeg",
      "/sedes/Adolfo/6.jpeg",
      "/sedes/Adolfo/7.jpeg",
      "/sedes/Adolfo/8.jpeg",
      "/sedes/Adolfo/9.jpeg",
    ],
  },
  {
    id: 9,
    nombre: "CARIOLA",
    precios: {
      mensual: "$45.000",
      plus: "$54.000",
      trimestral: "$120.000",
      semestral: "$220.000",
      anual: "$408.000",
    },
    ubicacion: "Cariola 173",
    whatsapp: "+54 9 381 5943775",
    descripcion: "Lunes a viernes: 06:00 - 00:00",
    descripcion2: "Sábados y feriados: 09:00 - 21:00",
    visible: true,
    imagenes: [
      "/sedes/Cariola/1.jpeg",
      "/sedes/Cariola/2.jpeg",
      "/sedes/Cariola/3.jpeg",
      "/sedes/Cariola/4.jpeg",
      "/sedes/Cariola/5.jpeg",
      "/sedes/Cariola/6.jpeg",
      "/sedes/Cariola/7.jpeg",
      "/sedes/Cariola/8.jpeg",
      "/sedes/Cariola/9.jpeg",
    ],
  },
  {
    id: 10,
    nombre: "YERBA BUENA",
    precios: {
      mensual: "$45.000",
      plus: "$54.000",
      trimestral: "$120.000",
      semestral: "$220.000",
      anual: "$408.000",
    },
    ubicacion: "Av. Aconquija 1677",
    whatsapp: "+54 9 381 4674137",
    descripcion: "Lunes a viernes: 06:00 - 00:00",
    descripcion2: "Sábados y feriados: 09:00 - 21:00",
    visible: true,
    imagenes: [
      "/sedes/Yerba-buena/1.jpeg",
      "/sedes/Yerba-buena/2.jpeg",
      "/sedes/Yerba-buena/3.jpeg",
      "/sedes/Yerba-buena/4.jpeg",
      "/sedes/Yerba-buena/5.jpeg",
      "/sedes/Yerba-buena/6.jpeg",
      "/sedes/Yerba-buena/7.jpeg",
      "/sedes/Yerba-buena/8.jpeg",
      "/sedes/Yerba-buena/9.jpeg",
    ],
  },
];

import Image from "next/image";
import SedeButtons from "./SedeButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { useEffect, useState } from "react";
export default function SedesComp() {
  const [selectedSede, setSelectedSede] = useState(2);
  const sedesVisibles = sedes.filter((sede) => sede.visible);
  const sedeActual = sedesVisibles.find((sede) => sede.id === selectedSede)!;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.scrollTo(0);
  }, [selectedSede, emblaApi]);

  return (
    <section id="sedes">
      {/* TITULOS */}
      <div className="pt-[40px] lg:pt-[80px] flex flex-col items-center px-[20px]">
        <p className="font-description font-normal text-[16px] text-center text-white mt-6 tracking-[1.6px] leading-[24px]">
          ELEGÍ DONDE EMPEZAR
        </p>

        <h3 className="text-[45px] font-hero font-normal lg:text-[60px] text-white text-center leading-[70px] pt-8">
          NUESTRAS <span className="text-[#F1EC16]">SEDES</span>
        </h3>

        <p className="max-w-[490px] font-description font-normal text-[20px] text-center text-white mt-6 leading-[24px]">
          Contamos con distintas sedes para que puedas entrenar donde te quede
          más cómodo.
        </p>
      </div>

      <div className="px-25">
        {/* BOTONES */}
        <SedeButtons
          sedes={sedesVisibles}
          selectedSede={selectedSede}
          onSelect={setSelectedSede}
        />
      </div>

      {/* CONTENIDO */}
      <div className="flex flex-col lg:flex-row justify-center items-center h-auto lg:px-0 lg:h-[552px] border-t border-b border-white/50 gap-[40px] lg:gap-[96px] mt-[70px]">
        {/* CARRUSEL */}
        <div
          ref={emblaRef}
          className="
      order-2 lg:order-1
      relative
      overflow-hidden
      w-full lg:w-[544px]
      h-[300px] lg:h-full
      shrink-0
    "
        >
          <div className="flex h-full">
            {sedeActual.imagenes.map((imagen, index) => (
              <div key={index} className="relative min-w-full h-full">
                <Image
                  src={imagen}
                  fill
                  alt={sedeActual.nombre}
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div
            className="
        absolute
        bottom-[20px]
        left-1/2
        -translate-x-1/2
        flex
        gap-3
        z-20
      "
          >
            {sedeActual.imagenes.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`
            w-3
            h-3
            rounded-full
            transition-all
            ${
              selectedIndex === index ? "bg-[#F1EC16] scale-125" : "bg-white/40"
            }
          `}
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div
          className="
    order-1 lg:order-2
    w-full lg:w-[450px]
    shrink-0
    px-[20px] lg:px-0
    flex
    flex-col
    items-center
    lg:items-start
    lg:text-start
    "
        >
          <h3 className="font-card font-light text-[36px] text-white">
            SEDE <span className="font-bold">{sedeActual.nombre}</span>
          </h3>
          <div className="pt-[32px] flex flex-col gap-[24px]">
            <div className="border-l-4 border-[#F1EC16] pl-4 space-y-4">
              <div className="flex gap-[16px]">
                <Image
                  src="/logo/ubicacion.png"
                  width={24}
                  height={28}
                  alt="ubicacion"
                  unoptimized
                />
                <p className="text-white text-[18px] lg:text-[20px]">
                  {sedeActual.ubicacion}
                </p>
              </div>
              <div className="flex items-start gap-[16px]">
                <Image
                  src="/logo/reloj.png"
                  width={24}
                  height={28}
                  alt="reloj"
                  unoptimized
                />
                <div>
                  <p className="text-white text-[18px] lg:text-[20px] leading-[32px]">
                    {sedeActual.descripcion}
                  </p>
                  <p className="text-white text-[18px] lg:text-[20px] leading-[32px]">
                    {sedeActual.descripcion2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[16px]">
                <Image
                  src="/logo/whatsapp.png"
                  width={24}
                  height={28}
                  alt="whatsapp"
                  unoptimized
                />
                <div>
                  <p className="text-white text-[18px] lg:text-[20px]">
                    {sedeActual.whatsapp}
                  </p>
                  <p className="text-[#8E9192] font-description font-bold text-[14px]">
                    WHATSAPP
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#F1EC16] px-[50px] py-[12px] rounded-[12px] border-2 border-white text-[#444444] cursor-pointer font-description font-bold text-[16px] hover:bg-[#f8f55c] transition-colors duration-300 self-center lg:self-start">
              Inscribirme ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
