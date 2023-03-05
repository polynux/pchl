import { Layout } from "./index";

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="container mx-auto p-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Contact</h1>
          <div className="flex flex-col gap-6">
            <p className="text-xl">
              Vous pouvez nous contacter par mail à l&apos;adresse suivante : {" "} 
              <a href="mailto:contact@pchl.fr" className="text-stone-900">contact@pchl.fr</a>
            </p>
            <p className="text-xl">
              Vous pouvez également nous contacter par téléphone au : {" "}
              <a href="tel:+336 12 34 56 78" className="text-stone-900">06 12 34 56 78</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
