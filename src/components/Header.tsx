import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
