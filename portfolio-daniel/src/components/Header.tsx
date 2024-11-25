import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const Header = () => {
  return (
    <header className={roboto.className}>
      <Link href="/">
        <Image
          src="/next-env.d.png"
          width={55}
          height={55}
          alt="Logo de Daniel"
        />
      </Link>
      <nav>
        <Link href="/">Sobre mim</Link>
        {/*<Link href="/portfolio">Portfolio</Link>*/}
        <Link href="/contatos">Entre em contato</Link>
      </nav>
    </header>
  );
};
