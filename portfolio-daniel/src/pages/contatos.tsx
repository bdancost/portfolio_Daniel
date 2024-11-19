import Head from "next/head";

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | Daniel</title>
      </Head>
      <div>
        <h1>Contatos</h1>
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href="mailto:pr.danfc88@gmail.com">
                daniel-pr.danfc88@gmail.com
              </a>
            </div>
          </li>
          <li>
            <span>LinkedIn</span>
            <div>
              <a href="https://www.linkedin.com/in/daniel-fernandes1988/">
                https://www.linkedin.com/in/daniel-fernandes1988/
              </a>
            </div>
          </li>
          <li>
            <span>GitHub</span>
            <div>
              <a href="https://github.com/bdancost">
                https://github.com/bdancost
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contatos;
