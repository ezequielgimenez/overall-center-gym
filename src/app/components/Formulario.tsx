export default function FormComp() {
  return (
    <div className="flex flex-col justify-center items-center px-[20px]">
      {/* TITULOS */}
      <div className="text-center pt-[100px] lg:pt-[172px] pb-[60px] lg:pb-[110px]">
        <p className="text-white font-description text-[14px] lg:text-[16px] pb-[16px] lg:pb-[20px]">
          COMPLETÁ TU INSCRIPCIÓN
        </p>

        <h2 className="font-hero text-[34px] text-white sm:text-[42px] lg:text-[60px] leading-[42px] lg:leading-normal">
          COMPLETÁ EL FORMULARIO
        </h2>

        <h2 className="font-hero text-[34px] sm:text-[42px] lg:text-[60px] text-[#F1EC16] leading-[42px] lg:leading-[40px] mt-2">
          PARA CONTINUAR CON EL PAGO DE TU PLAN.
        </h2>
      </div>

      {/* FORM */}
      <form
        className="
          bg-[#626262]
          rounded-2xl
          p-5 lg:p-6
          w-full
          max-w-md
          lg:h-[741px]
          shadow-[0px_4px_30.4px_rgba(241,236,22,0.34)]
          mb-[120px] lg:mb-[234px]
        "
      >
        <div className="flex flex-col gap-4">
          <label className="font-sans text-white text-[14px]">
            Tu nombre y apellido
          </label>

          <input
            name="nombre"
            required
            placeholder="Tu nombre"
            className="
              bg-white
              border
              font-sans
              placeholder-[#444444]
              text-[#444444]
              border-gray-300
              rounded-md
              p-3
              text-[16px]
              outline-none
              focus:ring-2
              focus:ring-[#c9c0c0]
            "
          />

          <label className="font-sans text-white text-[14px]">Tu DNI</label>

          <input
            name="dni"
            required
            placeholder="DNI"
            className="
              bg-white
              border
              font-sans
              placeholder-[#444444]
              text-[#444444]
              border-gray-300
              rounded-md
              p-3
              text-[16px]
              outline-none
              focus:ring-2
              focus:ring-[#c9c0c0]
            "
          />

          <label className="font-sans text-white text-[14px]">
            Tu fecha de nacimiento
          </label>

          <input
            name="nacimiento"
            type="date"
            required
            className="
              bg-white
              border
              font-sans
              text-[#444444]
              border-gray-300
              rounded-md
              p-3
              text-[16px]
              outline-none
              focus:ring-2
              focus:ring-[#c9c0c0]
            "
          />

          <label className="font-sans text-white text-[14px]">Tu email</label>

          <input
            name="email"
            type="email"
            required
            placeholder="ejemplo@correo.com"
            className="
              bg-white
              border
              font-sans
              placeholder-[#444444]
              text-[#444444]
              border-gray-300
              rounded-md
              p-3
              text-[16px]
              outline-none
              focus:ring-2
              focus:ring-[#c9c0c0]
            "
          />

          <label className="font-sans text-white text-[14px]">
            Tu número de teléfono
          </label>

          <input
            name="telefono"
            required
            placeholder="Número de teléfono"
            className="
              bg-white
              border
              font-sans
              placeholder-[#444444]
              text-[#444444]
              border-gray-300
              rounded-md
              p-3
              text-[16px]
              outline-none
              focus:ring-2
              focus:ring-[#c9c0c0]
            "
          />

          <p className="text-center text-white text-[13px] lg:text-[14px] pt-2 pb-[20px] lg:pb-[30px] leading-[22px]">
            Luego podrás realizar el pago de forma segura a través de Mercado
            Pago.
          </p>

          <button
            type="submit"
            className="
              bg-[#F1EC16]
              w-full
              py-[12px]
              rounded-[12px]
              border-2
              border-white
              text-[#444444]
              cursor-pointer
              font-description
              font-bold
              text-[16px]
              hover:bg-[#f8f55c]
              transition-colors
              duration-300
            "
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}
