import Image from "next/image";

const Info = () => {
  return (
    <div className="w-full flex flex-col gap-32 items-center">
      <div className="flex justify-evenly w-full">
        <div className="w-[450px] h-[550px] overflow-hidden">
          <Image
            src="/images/sandwich-cerca.jpg"
            alt="imagen resumen"
            width={800}
            height={600}
            className="transform transition-transform duration-4000 ease-in-out hover:scale-125"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-lg leading-loose">
          <h1 className="text-7xl uppercase text-secondary opacity-40 font-kabouter font-extrabold tracking-widest">
            MENÚ
          </h1>
          <h2 className="text-lg font-bold font-roboto uppercase">
            Fresco y divertido
          </h2>
          <p>
            En nuestra carta podrás encontrar desayunos variados con un toque
            <span className="underline pl-2">informal</span>.
          </p>
          <p>
            Bebidas <strong>frías</strong> y <strong>calientes</strong>. ¿Eres
            más de zumo y smoothie o de café?
          </p>
          <p>
            Bollería horneada a <strong>diario</strong>. Croissants, muffins y
            más dulces que te harán sonreír con cada bocado.
          </p>
          <p>
            Y si quieres algo más sustancioso, nuestros <strong>platos</strong>{" "}
            y <strong>bowls</strong> saludables te darán la energía que
            necesitas para conquistar el día.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-evenly w-full">
        <div className="w-[450px] h-[550px] overflow-hidden">
          <Image
            src="/poke.jpg"
            alt="imagen resumen"
            width={800}
            height={600}
            className="transform transition-transform duration-4000 ease-in-out hover:scale-125"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-lg leading-loose">
          <h1 className="text-7xl uppercase text-secondary opacity-40 font-kabouter font-extrabold tracking-widest">
            BRUNCH
          </h1>
          <h2 className="text-lg font-bold font-roboto uppercase">
            Elige tu combinación favorita
          </h2>
          <p className="text-justify">
            Si eres más indeciso y prefieres que nosotros hagamos el trabajo,
            déjate guiar por nuestras sugerencias y elige uno de nuestros menú
            de <strong>Brunch</strong> disponibles todos los días.
          </p>
          <div
            className="flex flex-col gap-4 mt-10 p-5 rounded-md bg-cover bg-center"
            style={{ backgroundImage: "url('/images/fondo-plato.png')" }}
          >
            <h2 className="text-lg font-bold font-roboto uppercase">
              Plato del día
            </h2>
            <p>
              Además, para los más golosos, disponemos de un plato más
              contundente que varía todos los días.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly w-full">
        <div className="w-[450px] h-[550px] overflow-hidden">
          <Image
            src="/cafe.jpg"
            alt="imagen resumen"
            width={800}
            height={600}
            className="transform transition-transform duration-4000 ease-in-out hover:scale-125"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-lg leading-loose text-justify">
          <h1 className="text-7xl uppercase text-secondary opacity-40 font-kabouter font-extrabold tracking-widest">
            CAFÉ
          </h1>
          <h2 className="text-lg font-bold font-roboto uppercase">
            Especialidades Illy
          </h2>
          <p>
            Si eres un <strong>sibarita</strong> del buen café, éste es tu
            lugar. Como amantes que somos del café, sólo podemos servir lo
            mejor.
          </p>
          <p>
            Disfruta de nuestras especialidades en un ambiente{" "}
            <span className="underline">relajado</span>.
          </p>
          <div
            className="flex flex-col gap-4 mt-10 p-5 rounded-md bg-cover bg-center"
            style={{ backgroundImage: "url('/images/fondo-vino.png')" }}
          >
            <h2 className="text-lg font-bold font-roboto uppercase">
              Vinos naturales
            </h2>
            <p>
              Si, en cambio, eres más de fruta; también disponemos de vinos naturales de la región.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
