import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
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

