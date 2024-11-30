import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem] ">
          Prazer, sou&nbsp;
          <strong className="font-bold">Daniel Fernandes</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>
            Desenvolvedor Front-end em crescimento, em constante evolução,
            pronto para novos desafios.
          </h2>
          <Link
            href="/contatos"
            className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            Converse comigo!
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          <li
            style={{ background: "#2F74C0", color: "#FFFFFF" }}
            className="w-fit p-2 rounded-md"
          >
            typescript
          </li>
          <li
            style={{ background: "#6BDDFA", color: "#000000" }}
            className="w-fit p-2 rounded-md"
          >
            react
          </li>
          <li
            style={{ background: "#EFD81D", color: "#000000" }}
            className="w-fit p-2 rounded-md"
          >
            javascript
          </li>
          <li
            style={{ background: "#000000", color: "#FFFFFF" }}
            className="w-fit p-2 rounded-md"
          >
            next.js
          </li>
        </ul>
      </div>
      <div className="relative">
        <Image
          src="https://avatars.githubusercontent.com/u/123584259?v=4"
          alt="Foto de Perfil Daniel"
          unoptimized
          width={500}
          height={500}
          className="rounded-full"
        />
        <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute bottom-[1.5rem] sm:bottom-3">
          <strong className="text-1xl">
            Em busca da primeira <br></br>oportunidade na área dev
          </strong>
        </p>
      </div>
    </main>
  );
};
