import { Layout } from "./index";

export default function Galeries() {
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
                </div>
            </div>
        </Layout>
    );
}
