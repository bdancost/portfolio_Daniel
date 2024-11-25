import Head from "next/head";
import { AboutMe } from "../components/Home/AboutMe";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Daniel</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end em busca por novos desafios"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10s md:space-y-28">
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
