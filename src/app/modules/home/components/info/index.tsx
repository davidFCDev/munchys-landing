import Image from "next/image";

const Section = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  children,
  reverse,
  backgroundImage,
  backgroundImage2,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  reverse?: boolean;
  backgroundImage?: string;
  backgroundImage2?: string;
}) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        reverse ? "small:flex-row-reverse" : "small:flex-row"
      } justify-evenly items-center small:items-start gap-10 small:gap-0 w-full`}
    >
      <div className="w-full small:w-[450px] h-[550px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="transform transition-transform duration-4000 ease-in-out hover:scale-125"
        />
      </div>

      <div className="flex flex-col gap-4 max-w-lg leading-loose">
        <h1 className="text-7xl uppercase text-secondary opacity-40 font-kabouter font-extrabold tracking-widest">
          {title}
        </h1>
        <h2 className="text-lg font-extrabold uppercase">{subtitle}</h2>
        <div className="text-justify flex flex-col gap-4">{children}</div>
        {backgroundImage && (
          <div
            className="flex flex-col gap-4 mt-10 p-5 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <h2 className="text-lg font-extrabold uppercase">Plato del día</h2>
            <p className="text-justify">
              Además, para los más golosos, disponemos de un plato más
              contundente que varía todos los días.
            </p>
          </div>
        )}
        {backgroundImage2 && (
          <div
            className="flex flex-col gap-4 mt-10 p-5 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage2})` }}
          >
            <h2 className="text-lg font-extrabold uppercase">
              Vinos naturales
            </h2>
            <p className="text-justify">
              Si, en cambio, eres más de fruta; también disponemos de vinos
              naturales de la región.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="w-full flex flex-col gap-10 small:gap-32 items-center px-8 small:px-0 text-neutral-800">
      <Section
        imageSrc="/images/sandwich-cerca.jpg"
        imageAlt="imagen resumen"
        title="MENÚ"
        subtitle="Fresco y divertido"
      >
        <p>
          En nuestra carta podrás encontrar desayunos variados con un toque
          <span className="underline pl-2">informal</span>.
        </p>
        <p>
          Bebidas <strong>frías</strong> y <strong>calientes</strong>. ¿Eres más
          de zumo y smoothie o de café?
        </p>
        <p>
          Bollería horneada a <strong>diario</strong>. Croissants, muffins y más
          dulces que te harán sonreír con cada bocado.
        </p>
        <p>
          Y si quieres algo más sustancioso, nuestros <strong>platos</strong> y{" "}
          <strong>bowls</strong> saludables te darán la energía que necesitas
          para conquistar el día.
        </p>
      </Section>

      <Section
        imageSrc="/images/poke.jpg"
        imageAlt="imagen resumen"
        title="BRUNCH"
        subtitle="Elige tu combinación favorita"
        reverse
        backgroundImage="/images/fondo-plato.png"
      >
        <p>
          Si eres más indeciso y prefieres que nosotros hagamos el trabajo,
          déjate guiar por nuestras sugerencias y elige uno de nuestros menú de{" "}
          <strong>Brunch</strong> disponibles todos los días.
        </p>
      </Section>

      <Section
        imageSrc="/images/lata-cafe.jpg"
        imageAlt="imagen resumen"
        title="CAFÉ"
        subtitle="Especialidades Illy"
        backgroundImage2="/images/fondo-vino.png"
      >
        <p>
          Si eres un <strong>sibarita</strong> del buen café, éste es tu lugar.
          Como amantes que somos del café, sólo podemos servir lo mejor.
        </p>
        <p>
          Disfruta de nuestras especialidades en un ambiente{" "}
          <span className="underline">relajado</span>.
        </p>
      </Section>
    </div>
  );
};

export default Info;
