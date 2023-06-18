import Image from "next/image";
import Layout from "@/layouts/Home";
import { PagesRecord } from "@/@types/pocketbase-types";
import { Content, EditorRender } from "@/components/EditorRender";
import { css } from "../../styled-system/css";
import Paragraph from "@/components/Paragraph";

function Home({ data }: { data: PagesRecord<Content> }) {
  return (
    <Layout title="Accueil">
      <Image
        src="/IMG_2439-CLUB-3 2.png"
        alt=""
        width={1920}
        height={500}
      />
      <div className={css({
        mx: "auto",
        p: 8,
        maxWidth: 1200,
      })}>
        <div className={css({
          display: "flex",
          gap: 10,
          mb: 4,
        })}>
          <div className={css({
            w: "1/2",
          })}>
            <h1 className={css({
              fontSize: "2rem",
              fontFamily: "poppins",
            })}>Notre club photo</h1>
            <div className="line h-1 w-full bg-black"></div>
          </div>
          <div className={css({ w: "1/2" })}></div>
        </div>
        <div className={css({
          display: "flex",
          gap: 10,
        })}>
          <div className={css({
            w: "1/2",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          })}>
            <Paragraph>
              Le Photo Club de Haute Lozère est une association loi 1901 créée
              en 2018.
            </Paragraph>
            <Paragraph>
              Le club propose à ses adhérents de partager en groupe la pratique
              de la photographie, de l&apos;initiation à des techniques plus
              avancées et en découvrir les multiples facettes.
            </Paragraph>
            <Paragraph>
              L’échange de connaissances et de savoir-faire autour des
              techniques et de l’art photographiques ainsi que l’organisation
              d’événements (rencontres, sorties, reportages, concours liés à la
              pratique photographique) travaux informatiques de post traitement
              font parties de nos activités.
            </Paragraph>
            <Image
              src={"/forum-eaee.png"}
              alt="Forum photo club haute lozère"
              width={740}
              height={320}
            />
          </div>
          <div className={css({
            w: "1/2",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          })}>
            <Image
              src={"/132108978_o.png"}
              alt="Forum photo club haute lozère"
              width={740}
              height={320}
            />
            <Paragraph>
              Ainsi, des sorties à thème sont programmées avec des séances
              d’analyse des photos réalisées.
            </Paragraph>
            <Paragraph>
              Nous proposons également des séances de formations aux différentes
              techniques de la photographie (l’appareil photo, la prise de vue,
              gestion de la lumière…).
            </Paragraph>
            <Paragraph>
              En fin de saison, pour finaliser et mettre en valeur nos travaux,
              une exposition de nos photographies sera proposée au public. Nous
              invitons tous les amateurs de photos à nous rejoindre et partager
              cette passion.
            </Paragraph>
            <Paragraph>
              N’hésitez à contacter le Président : Bernard Sapin au
              <a href="tel:0681818181" className="font-bold">
                {" "}
                06 81 81 81 81
              </a>
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <EditorRender data={data} />
      </div>
    </Layout>
  );
}

export default Home;

export async function getServerSideProps() {
  const { getPageBySlug } = await import("@/utils/pb");
  const { data, error } = await getPageBySlug("home");
  if (error || !data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: JSON.parse(JSON.stringify(data.content)),
    },
  }
}
