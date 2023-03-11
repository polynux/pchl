import { Layout } from "./index";
import Image from "next/image";

import styles from "../styles/Galerie.module.css";

export default function Galeries({ pictures }: { pictures: string[] }) {
  return (
    <Layout title="Galeries">
      <div className="container mx-auto p-8">
        <div className="flex flex-col gap-6">
          <div className="heading flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">Retrouvez toutes nos photos</h1>
            <div className="separator w-1/2 border-b-2 border-slate-800"></div>
          </div>
          <div className={styles["grid-wrapper"]}>
            {pictures?.map((picture) => (
              <div key={picture.src} className={picture.className}>
                <Image
                  src={picture.src}
                  alt={picture.alt}
                  width={500}
                  height={500}
                  key={picture.src}
                  className={styles["img"]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps() {
  let pictures = [];
  const classes = ["wide", "tall", "big", ""];
  for (let i = 0; i < 10; i++) {
    pictures.push({
      src: `https://picsum.photos/500/500?random=${i}`,
      alt: "random image",
      className: classes[Math.floor(Math.random() * classes.length)],
    });
  }
  return {
    props: {
      pictures,
    },
  };
}
