import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children, title }: { children: React.ReactNode, title?: string }) {
  const newTitle = title ? title + " | " : "";
  return (
    <div>
      <Head>
        <title>{newTitle + "Photo Club Haute Lozère"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Site du photo club de Haute Lozère" />
        <meta name="keywords" content="photo, club, haute, lozère" />
        <meta name="author" content="polynux" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="fr" />
        <meta property="og:title" content="Photo Club de Haute Lozère" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photoclubhautelozere.fr" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:description" content="Site du photo club de Haute Lozère" />
        <meta property="og:site_name" content="Photo Club de Haute Lozère" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@polynux" />
        <meta name="twitter:creator" content="@polynux" />
        <meta name="twitter:title" content="Photo Club de Haute Lozère" />
        <meta name="twitter:description" content="Site du photo club de Haute Lozère" />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

