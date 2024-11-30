import Head from "next/head";
import { Projects } from "../components/Home/Projects";
import { AboutMe } from "../components/Home/AboutMe";

const Home = () => {
  const projects = [
    {
      slug: "Burguer-Dev",
      name: "Burguer Dev",
      image: {
        url: "/pagina_inicial.png",
        alt: "Pagina Inicial do Burguer Dev",
      },
    },

    {
      slug: "Spotify",
      name: "Spotify",
      image: {
        url: "/spotify.png",
        alt: "Pagina Inicial de uma projeto de Spotify",
      },
    },

    {
      slug: "Alura-Quiz",
      name: "Alura Quiz",
      image: {
        url: "/alura_quiz.png",
        alt: "Pagina Inicial do Alura Quiz",
      },
    },

    {
      slug: "Github-API",
      name: "GitHub API",
      image: {
        url: "/github_api.png",
        alt: "Pagina Inicial do GitHub API",
      },
    },
  ];
  return (
    <>
      <Head>
        <title>Sobre mim | Daniel</title>
        <meta
          name="description"
          content="Desenvolvedor Front-end em crescimento, em constante evolução, pronto para novos desafios."
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10s md:space-y-28">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default Home;
