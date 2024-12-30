import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import { Project, AboutMe as TAboutMe } from "@/types/Home";
import { GetStaticProps } from "next";
import Head from "next/head";

interface HomeProps {
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { projects, aboutMe } = home;

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
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/bdancost/65920e2bdf98722802159c3a1f86518e/raw/0c565f5de343b96a6b193def266bc37271b9b701/gistfile1.txt"
  );
  const home = await res.json();

  return home;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  };
};

export default Home;
