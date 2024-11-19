import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <img src="/next-env.d.png" alt="Logo de Daniel" />
      </Link>
      <nav>
        <Link href="/">Sobre mim</Link>
        {/*<Link href="/portfolio">Portfolio</Link>*/}
        <Link href="/contatos">Entre em contato</Link>
      </nav>
    </header>
  );
};
