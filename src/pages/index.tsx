import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-slate-800 p-8 text-white">
      <Link href="/">
        <Image src="/logo.png" alt="My Site Logo" width={128} height={77} />
      </Link>
      <nav>
        <ul className="flex items-center gap-2 space-x-4">
          <li>
            <Link href="/le-club">Le club</Link>
          </li>
          <li>
            <Link href="/galeries">Galeries</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link
              href="/espace-membres"
              className="bg-white px-6 py-2 text-stone-900"
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
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center md:flex-row">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="My Site Logo"
                width={128}
                height={77}
              />
            </div>
            <div className="ml-4 flex flex-col">
              <span className="text-neutral-300">
                © 2023 Photo Club de Haute Lozère
              </span>
              <span className="text-neutral-300">Tous droits réservés</span>
            </div>
            <div className="ml-4 flex">
              <span className="text-neutral-300">Développé par </span>
              <span className="text-neutral-300">
                <a
                  href="https://github.com/polynux"
                  target="_blank"
                  rel="noreferrer"
                >
                  polynux <FaGithub />
                </a>
              </span>
            </div>
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
      <h1>My Site</h1>
    </Layout>
  );
}

export default Home;

export { Layout };
