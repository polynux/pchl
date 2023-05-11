import Image from "next/image";
import Layout from "@/layouts/Home";

function Home() {
  return (
    <Layout title="Accueil">
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
