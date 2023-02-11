import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header
      className="flex w-full items-center justify-between p-8 text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(30, 29, 29, 0.8) 0%, rgba(38, 38, 38, 0.61) 37%, rgba(40, 40, 40, 0.49) 59%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <Link href="/">
        <Image src="/logo.png" alt="My Site Logo" width={128} height={77} />
      </Link>
      <nav>
        <ul className="flex items-center gap-2 space-x-4">
          <li>
            <Link href="/le-club" className="text-xl">Le club</Link>
          </li>
          <li>
            <Link href="/galeries" className="text-xl">Galeries</Link>
          </li>
          <li>
            <Link href="/contact" className="text-xl">Contact</Link>
          </li>
          <li>
            <Link
              href="/espace-membres"
              className="bg-white px-6 py-2 text-xl text-stone-900"
            >
              Espace membres
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-neutral-800">
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-around md:flex-row">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo photo club haute lozère"
              width={128}
              height={77}
            />
          </div>
          <div className="ml-4 flex flex-col items-center">
            <span className="text-neutral-300">
              © 2023 Photo Club de Haute Lozère
            </span>
            <span className="text-neutral-300">Tous droits réservés</span>
          </div>
          <div className="ml-4 flex">
            <span className="text-neutral-300">
              Développé par{" "}
              <a
                href="https://github.com/polynux"
                target="_blank"
                rel="noreferrer"
              >
                polynux <FaGithub className="inline" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <Image
        src="/IMG_2439-CLUB-3 2.png"
        alt=""
        width={1920}
        height={500}
        className="absolute top-0 -z-10"
      />
    </Layout>
  );
}

export default Home;

export { Layout };
