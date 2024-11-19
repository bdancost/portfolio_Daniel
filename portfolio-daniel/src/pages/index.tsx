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
      <main>
        <div>
          <AboutMe />
        </div>
      </main>
    </>
  );
};

export default Home;
