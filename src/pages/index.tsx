import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-gray-800 p-8 text-white">
      <Link href="/">
        <Image src="/logo.png" alt="My Site Logo" width={128} height={77} />
      </Link>
      <nav>
        <ul className="flex items-center gap-2 space-x-4">
          <li>
            <Link href="/le-club" className="font-poppins text-xl">
              Le club
            </Link>
          </li>
          <li>
            <Link href="/galeries" className="font-poppins text-xl">
              Galeries
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-poppins text-xl">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/espace-membres"
              className="bg-white px-6 py-2 font-poppins text-xl text-stone-900"
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
    <footer className="w-full bg-neutral-800">
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-around md:flex-row">
          <Link className="flex items-center" href="/">
            <Image
              src="/logo.png"
              alt="Logo photo club haute lozère"
              width={128}
              height={77}
            />
          </Link>
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
      <main>{children}</main>
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
      />
      <div className="container mx-auto p-8">
        <div className="mb-4 flex gap-10">
          <div className="w-1/2">
            <h1 className="font-poppins text-5xl">Notre club photo</h1>
            <div className="line h-1 w-full bg-black"></div>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="flex gap-10">
          <div className="flex w-1/2 flex-col gap-8">
            <p className="text-xl">
              Le Photo Club de Haute Lozère est une association loi 1901 créée
              en 2018.
            </p>
            <p className="text-xl">
              Le club propose à ses adhérents de partager en groupe la pratique
              de la photographie, de l&apos;initiation à des techniques plus
              avancées et en découvrir les multiples facettes.
            </p>
            <p className="text-xl">
              L’échange de connaissances et de savoir-faire autour des
              techniques et de l’art photographiques ainsi que l’organisation
              d’événements (rencontres, sorties, reportages, concours liés à la
              pratique photographique) travaux informatiques de post traitement
              font parties de nos activités.
            </p>
            <Image
              src={"/forum-eaee.png"}
              alt="Forum photo club haute lozère"
              width={740}
              height={320}
            />
          </div>
          <div className="flex w-1/2 flex-col gap-6">
            <Image
              src={"/132108978_o.png"}
              alt="Forum photo club haute lozère"
              width={740}
              height={320}
            />
            <p className="text-xl">
              Ainsi, des sorties à thème sont programmées avec des séances
              d’analyse des photos réalisées.
            </p>
            <p className="text-xl">
              Nous proposons également des séances de formations aux différentes
              techniques de la photographie (l’appareil photo, la prise de vue,
              gestion de la lumière…).
            </p>
            <p className="text-xl">
              En fin de saison, pour finaliser et mettre en valeur nos travaux,
              une exposition de nos photographies sera proposée au public. Nous
              invitons tous les amateurs de photos à nous rejoindre et partager
              cette passion.
            </p>
            <p className="text-xl">
              N’hésitez à contacter le Président : Bernard Sapin au
              <a href="tel:0681818181" className="font-bold">
                {" "}
                06 81 81 81 81
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

export { Layout };
