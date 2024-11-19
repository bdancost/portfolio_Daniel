import Link from "next/link";

export const AboutMe = () => {
  return (
    <main>
      <div>
        <h1>
          Prazer, sou &nbsp;<span>Daniel Fernandes</span>
        </h1>
        <div>
          <h2>Sou um desenvolvedor Front-end em busca por novos desafios</h2>
          <Link href="/contatos">Converse comigo!</Link>
        </div>
        <ul>
          <li style={{ background: "#2F74C0", color: "#FFFFFF" }}>
            typescript
          </li>
          <li style={{ background: "#6BDDFA", color: "#000000" }}>react</li>
          <li style={{ background: "#EFD81D", color: "#000000" }}>
            javascript
          </li>
          <li style={{ background: "#000000", color: "#FFFFFF" }}>next.js</li>
        </ul>
      </div>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/123584259?v=4"
          alt="Foto de Perfil Daniel"
        />
        <p>
          <span>Em busca da primeira oportunidade na área dev</span>
        </p>
      </div>
    </main>
  );
};
