import { Layout } from "./index";
import Image from "next/image";

export default function LeClub() {
  return (
    <Layout title="Le club">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Le club</h1>
        <div className="flex flex-col gap-6">
          <p className="text-xl">
            Le club photo de la Haute Lozère a été créé en 1982 par un groupe
            d’amateurs de photographie. Il a été reconnu d’utilité publique en
            1987 et a obtenu le statut de club de la Fédération Française de
            Photographie en 1992. Il compte aujourd’hui une centaine d’adhérents
            et est affilié à la Fédération Française de Photographie.
          </p>
          <p className="text-xl">
            Le club propose à ses adhérents de partager en groupe la pratique de
            la photographie, de l&apos;initiation à des techniques plus
            avancées et en découvrir les multiples facettes.
          </p>
          <p className="text-xl">
            L’échange de connaissances et de savoir-faire autour des techniques
            et de l’art photographiques ainsi que l’organisation d’événements
            (rencontres, sorties, reportages, concours liés à la pratique
            photographique) travaux informatiques de post traitement font parties
            de nos activités.
          </p>
          <Image
            src={"/forum-eaee.png"}
            alt="Forum photo club haute lozère"
            width={740}
            height={320}
          />
        </div>
        <div className="flex flex-col gap-6">
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
            Le club organise également des expositions et des concours
            photographiques.
          </p>
          <p className="text-xl">
            Le club est affilié à la Fédération Française de Photographie et
            participe à ses concours nationaux.
          </p>
        </div>
      </div>
    </Layout>
  );
}