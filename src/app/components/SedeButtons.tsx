type Sede = {
  id: number;
  nombre: string;
  preventa?: string;
  precios: {
    mensual: string;
    trimestral: string;
    anual: string;
  };
  descripcion: string;
  descripcion2?: string;
  ubicacion?: string;
  whatsapp?: string;
  visible?: boolean;
  imagenes: string[];
};

type Props = {
  sedes: Sede[];
  selectedSede: number | null;
  onSelect: (id: number) => void;
  title?: string;
};

import { useState } from "react";
import Image from "next/image";

export default function SedeButtons({
  sedes,
  selectedSede,
  onSelect,
  title = "Ver precios por sede",
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sedeActual = sedes.find((sede) => sede.id === selectedSede);

  return (
    <>
      {/* MOBILE */}
      <div className="block lg:hidden mt-[40px] relative">
        {/* BOTON ACTUAL */}
        <div className="flex justify-center items-center w-full">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              w-[343px]
              border-4
              border-[#F1EC16]
              py-[8px]
              px-[24px]
              rounded-[20px]
              font-mono
              font-semibold
              text-white
              text-[20px]
              flex
              items-center
              justify-between
              shrink-0
          "
          >
            {sedeActual?.nombre ?? title}
            <div>
              <Image
                src="/logo/menu2.png"
                width={25}
                height={25}
                alt="menu-2"
                unoptimized
              />
            </div>
          </button>
        </div>
        {/* LISTA */}
        {mobileOpen && (
          <div
            className="
            bg-[#626262]/95
              absolute
              top-[110%]
              left-1/2
              -translate-x-1/2
              w-[331px]
              h-[780px]
              sm: w-[375px]
              sm:h-[860px]
              flex
              flex-col
              justify-center
              items-center
              gap-6
              z-30
              rounded-[35px]
              
            "
          >
            <h3 className="font-card text-center font-bold text-white text-[28px] ">
              Elegí tu sede
            </h3>
            {sedes.map((sede) => (
              <button
                key={sede.id}
                onClick={() => {
                  onSelect(sede.id);
                  setMobileOpen(false);
                }}
                className="
                bg-[#626262]/70
                 border-3 border-[#F1EC16] shadow-[3px_6px_10.5px_rgba(241,236,22,0.92)]
                  w-[167px]
                  sm:w-[250px]
                  text-[16px]
                  rounded-[20px]
                  py-[5px]
                  sm:py-[10px]
                  font-mono
                  font-semibold
                  text-white
                  flex
                  flex-col
                "
              >
                {sede.nombre}
                {sede.preventa && (
                  <span className="bg-white text-sm text-[#454242] rounded-[16px] mx-2">
                    {sede.preventa}
                  </span>
                )}
              </button>
            ))}
            <h3
              onClick={() => {
                setMobileOpen(false);
              }}
              className="font-card text-center font-bold text-white text-[20px] "
            >
              Cerrar
            </h3>
          </div>
        )}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex justify-center items-center gap-[44px] flex-wrap mt-[70px]">
        {sedes.map((sede) => (
          <button
            key={sede.id}
            onClick={() => onSelect(sede.id)}
            className={`
              transition
              ${
                selectedSede === sede.id
                  ? "bg-[#626262]/70 border-4 border-[#F1EC16] shadow-[3px_6px_15.5px_rgba(241,236,22,0.92)] cursor-pointer px-[60px] py-[15px] rounded-[20px] font-mono font-semibold text-white text-[24px]"
                  : "bg-transparent border-3 border-[#F1EC16] shadow-[3px_6px_15.5px_rgba(241,236,22,0.92)] cursor-pointer px-[50px] py-[10px] rounded-[20px] font-mono font-semibold text-white text-[20px] hover:bg-[#F1EC16]/5 transition-all duration-300"
              }
            `}
          >
            <div className="flex flex-col items-center">
              <span>{sede.nombre}</span>

              {sede.preventa && (
                <span className="bg-white text-sm text-[#454242]">
                  {sede.preventa}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
