"use client";

const sedes = [
  {
    id: 1,
    nombre: "SEDE TAFI VIEJO",
    preventa: "PREVENTA - $30.000",
    precios: {
      mensual: "$30.000",
    },
    ubicacion: "Ruta 9 y Constitución, Tafi Viejo",
    whatsapp: "+54 9 3815 15-8762",
    descripcion: "Lunes a viernes:\n06:00 - 00:00 hs",
    descripcion2: "Sábados y feriados:\n09:00 - 21:00 hs",
    visible: true,
    imagenes: ["/sedes/Tafi-viejo/1.webp"],
  },
  {
    id: 2,
    nombre: "SEDE AV ALEM",
    preventa: "",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Lunes a viernes",
    imagenes: ["/sedes/centro-1.jpg"],
  },

  {
    id: 3,
    nombre: "SEDE SAN MARTÍN",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Lunes a viernes",
    imagenes: ["/sedes/yb-1.jpg"],
  },

  {
    id: 4,
    nombre: "SEDE BELGRANO",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Abierto 24hs",
    imagenes: ["/sedes/yb-1.jpg"],
  },

  {
    id: 5,
    nombre: "SEDE CÓRDOBA",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Lunes a viernes",
    imagenes: ["/sedes/yb-1.jpg"],
  },

  {
    id: 6,
    nombre: "SEDE LOMAS",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Lunes a viernes",
    imagenes: ["/sedes/yb-1.jpg"],
  },
  {
    id: 7,
    nombre: "SEDE 9 DE JULIO",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Abierto 24hs",
    imagenes: ["/sedes/yb-1.jpg"],
  },

  {
    id: 8,
    nombre: "SEDE LA BANDA",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Abierto 24hs",
    imagenes: ["/sedes/yb-1.jpg"],
  },

  {
    id: 9,
    nombre: "SEDE CARIOLA",
    precios: {
      mensual: "$55.000",
      plus: "$60.000",
      trimestral: "$150.000",
      semestral: "$260.000",
      anual: "$495.000",
    },
    descripcion: "Lunes a viernes",
    imagenes: ["/sedes/yb-1.jpg"],
  },
];

import SedeButtons from "./SedeButtons";
import Link from "next/link";
import { useState } from "react";

export default function PricesSection() {
  const [selectedSede, setSelectedSede] = useState<number | null>(null);
  const sedeActual = sedes.find((sede) => sede.id === selectedSede);

  return (
    <section id="planes" className="lg:px-25">
      <div data-aos="fade-up" className="pt-[40px] lg:pt-[80px] px-[20px]">
        <p
          className="
      font-description
      font-normal
      text-[14px] lg:text-[16px]
      text-center
      text-white
      tracking-[1.6px]
      leading-[22px] lg:leading-[24px]
    "
        >
          DESCUBRÍ NUESTROS PRECIOS
        </p>

        <h3
          className="
      font-hero
      font-normal
      text-[30px] sm:text-[38px] lg:text-[60px]
      text-white
      text-center
      leading-[38px] sm:leading-[46px] lg:leading-[70px]
      pt-6 lg:pt-8
    "
        >
          ELEGÍ LA OPCIÓN IDEAL PARA VOS
          <br className="hidden lg:block" />
          <span className="text-[#F1EC16] block lg:inline mt-2 lg:mt-0">
            SUMATE HOY Y EMPEZÁ EL CAMBIO
          </span>
        </h3>
      </div>
      <SedeButtons
        sedes={sedes}
        selectedSede={selectedSede}
        onSelect={setSelectedSede}
      />

      {selectedSede && (
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center items-center py-24 gap-[24px] max-w-[962px] mx-auto"
        >
          {/* <p>{sedeActual?.precios.mensual}</p>
        <p>{sedeActual?.precios.trimestral}</p> */}

          <div className="flex justify-center w-[302px] h-[448px] bg-[#626262] rounded-[24px] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.05]">
            <div className="w-[290px] h-[430px] border border-white/25 rounded-[19px] m-[8px] text-white">
              <h5 className="font-card font-bold text-[30px] pl-[27px] pt-[27px]">
                Mensual
              </h5>
              <p className="font-description font-bold text-[16px] pl-[27px] pt-[16px] pb-[24px]">
                Cuota mensual
              </p>
              <p className="font-description font-normal text-[16px] pl-[27px] pr-[57px] pb-[32px]">
                Incluye acceso <span className="font-bold">a un mes</span>{" "}
                completo de este gimnasio
              </p>
              <p className="font-description font-bold text-[30px] pl-[27px]">
                {sedeActual?.precios.mensual}
              </p>
              <div className="flex justify-center items-center pt-[75px]  pb-[27px]">
                <Link
                  href={`/formulario?sedeId=${sedeActual?.id}&planId=mensual`}
                  className="bg-[#F1EC16] px-[50px] py-[8px] rounded-[12px] border-2 border-white text-[#444444] cursor-pointer font-description font-bold text-[16px] hover:bg-[#f8f55c] transition-colors duration-300"
                >
                  Inscribirme ahora
                </Link>
              </div>
            </div>
          </div>
          {sedeActual?.precios?.plus && (
            <div className="flex justify-center w-[302px] h-[448px] bg-[#F1EC16] rounded-[24px] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.05]">
              <div className="w-[290px] h-[430px] border border-white rounded-[19px] m-[8px]">
                <h5 className="font-card font-bold text-[#444444] text-[30px] pl-[27px] pt-[27px]">
                  Overall Plus
                </h5>
                <p className="font-description font-bold text-[#444444] text-[16px] pl-[27px] pt-[16px] pb-[24px]">
                  Acceso a todas nuestras sedes
                </p>
                <p className="font-description font-normal text-[#444444] text-[16px] pl-[27px] pr-[57px] pb-[32px]">
                  Incluye acceso a todas nuestras sedes <br /> durante
                  <span className="font-bold"> un mes</span>{" "}
                </p>
                <p className="font-description font-bold text-[#444444] text-[30px] pl-[27px]">
                  {sedeActual?.precios.plus}
                </p>
                <p className="font-description font-normal text-[#444444] text-[12px] pl-[27px] pr-[57px] pb-[32px]">
                  Precio por mes
                </p>
                <div className="flex justify-center items-center  pb-[27px]">
                  <Link
                    href={`/formulario?sedeId=${sedeActual?.id}&planId=plus`}
                    className="bg-[#626262] px-[50px] py-[8px] rounded-[12px] border-2 border-white text-white cursor-pointer font-description font-bold text-[16px] hover:bg-[#969691] transition-colors duration-300"
                  >
                    Inscribirme ahora
                  </Link>
                </div>
              </div>
            </div>
          )}
          {sedeActual?.precios?.trimestral && (
            <div className="flex justify-center w-[302px] h-[448px] bg-[#626262] rounded-[24px] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.05]">
              <div className="w-[290px] h-[430px] border border-white/25 rounded-[19px] m-[8px] text-white">
                <h5 className="font-card font-bold text-[30px] pl-[27px] pt-[27px]">
                  3 meses
                </h5>
                <p className="font-description font-bold text-[16px] pl-[27px] pt-[16px] pb-[24px]">
                  Acceso por 3 meses
                </p>
                <p className="font-description font-normal text-[16px] pl-[27px] pr-[57px] pb-[32px]">
                  Incluye acceso <span className="font-bold">a 3 meses</span>{" "}
                  completos de este gimnasio
                </p>
                <p className="font-description font-bold text-[30px] pl-[27px]">
                  {sedeActual?.precios.trimestral}
                </p>
                <div className="flex justify-center items-center pt-[75px]  pb-[27px]">
                  <Link
                    href={`/formulario?sedeId=${sedeActual?.id}&planId=trimestral`}
                    className="bg-[#F1EC16] px-[50px] py-[8px] rounded-[12px] border-2 border-white text-[#444444] cursor-pointer font-description font-bold text-[16px] hover:bg-[#f8f55c] transition-colors duration-300"
                  >
                    Inscribirme ahora
                  </Link>
                </div>
              </div>
            </div>
          )}
          {sedeActual?.precios?.semestral && (
            <div className="flex justify-center w-[302px] h-[448px] bg-[#626262] rounded-[24px] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.05]">
              <div className="w-[290px] h-[430px] border border-white/25 rounded-[19px] m-[8px] text-white">
                <h5 className="font-card font-bold text-[30px] pl-[27px] pt-[27px]">
                  6 meses
                </h5>
                <p className="font-description font-bold text-[16px] pl-[27px] pt-[16px] pb-[24px]">
                  Acceso por 6 meses
                </p>
                <p className="font-description font-normal text-[16px] pl-[27px] pr-[57px] pb-[32px]">
                  Incluye acceso <span className="font-bold">a 6 meses</span>{" "}
                  completos de este gimnasio
                </p>
                <p className="font-description font-bold text-[30px] pl-[27px]">
                  {sedeActual?.precios.semestral}
                </p>
                <div className="flex justify-center items-center pt-[75px]  pb-[27px]">
                  <Link
                    href={`/formulario?sedeId=${sedeActual?.id}&planId=semestral`}
                    className="bg-[#F1EC16] px-[50px] py-[8px] rounded-[12px] border-2 border-white text-[#444444] cursor-pointer font-description font-bold text-[16px] hover:bg-[#f8f55c] transition-colors duration-300"
                  >
                    Inscribirme ahora
                  </Link>
                </div>
              </div>
            </div>
          )}
          {sedeActual?.precios?.anual && (
            <div className="flex justify-center w-[302px] h-[448px] bg-[#626262] rounded-[24px] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.05]">
              <div className="w-[290px] h-[430px] border border-white/25 rounded-[19px] m-[8px] text-white">
                <h5 className="font-card font-bold text-[30px] pl-[27px] pt-[27px]">
                  Anual
                </h5>
                <p className="font-description font-bold text-[16px] pl-[27px] pt-[16px] pb-[24px]">
                  Acceso por 12 meses
                </p>
                <p className="font-description font-normal text-[16px] pl-[27px] pr-[57px] pb-[32px]">
                  Incluye acceso <span className="font-bold">a 12 meses</span>{" "}
                  completos de este gimnasio
                </p>
                <p className="font-description font-bold text-[30px] pl-[27px]">
                  {sedeActual?.precios.anual}
                </p>
                <div className="flex justify-center items-center pt-[75px]  pb-[27px]">
                  <Link
                    href={`/formulario?sedeId=${sedeActual?.id}&planId=anual`}
                    className="bg-[#F1EC16] px-[50px] py-[8px] rounded-[12px] border-2 border-white text-[#444444] cursor-pointer font-description font-bold text-[16px] hover:bg-[#f8f55c] transition-colors duration-300"
                  >
                    Inscribirme ahora
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
