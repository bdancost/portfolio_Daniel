import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Daniel</title>
      </Head>
      <div>
        <h1>404</h1>
        <div>
          <p>Page Not Found</p>
          <span>Clique no botão abaixo para voltar para a Página Inicial</span>
        </div>
        <Link href="/">Ir para Página Inicial</Link>
      </div>
    </>
  );
};

export default NotFound;
