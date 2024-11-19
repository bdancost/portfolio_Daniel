import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
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
      {children}
    </>
  );
};
