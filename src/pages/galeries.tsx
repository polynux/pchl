import { Layout } from "./index";
import Image from "next/image";

export default function Galeries({ pictures }: { pictures: string[] }) {
    return (
        <Layout title="Galeries">
            <div className="container mx-auto p-8">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold">Galeries</h1>
                    <div className="flex flex-col gap-6">
                        <p className="text-xl">
                            Voici les photos des galeries du club.
                        </p>
                    </div>
                    <div>
                        {pictures?.map((picture) => (
                            <div key={picture}>
                              <Image src={picture} alt="" width={500} height={500} key={picture} />
                          </div>
                        ))}
                        </div>
                </div>
            </div>
        </Layout>
    );
}

export function getServerSideProps() {
    return {
        props: {
            pictures: ["https://picsum.photos/seed/1/500","https://picsum.photos/seed/2/500","https://picsum.photos/seed/3/500"],
        },
    };
}
