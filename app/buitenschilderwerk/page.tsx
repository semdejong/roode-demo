import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { QuoteBand } from "@/components/QuoteBand";
import { RuledRows } from "@/components/RuledRows";
import { SiteFrame } from "@/components/SiteFrame";
import { Gevelwijzer } from "@/components/diagrams/Gevelwijzer";

export const metadata: Metadata = {
  title: "Buitenschilderwerk",
  description:
    "Kozijnen, deuren, gevelbetimmering, buitenmuren en schutting. Ongeveer eens per vijf jaar, zuid en west eerder. April tot oktober.",
};

export default function BuitenPage() {
  return (
    <SiteFrame>
      <PageHeader
        title="Buitenschilderwerk"
        lede="Het buitenschilderwerk van uw woning is regelmatig aan een nieuwe laag toe. Goed schilderwerk beschermt het huis."
      />
      <section data-section="buiten">
        <Container className="py-14 md:py-16">
          <p className="max-w-[42rem]">
            Het gaat om kozijnen en deuren, de gevelbetimmering en de buitenmuren. Ook de schutting of erfafscheiding valt onder buitenschilderwerk.
          </p>
          <p className="mt-4 max-w-[42rem]">
            Reken op ongeveer eens per vijf jaar. Het werk op het zuiden en westen is eerder aan de beurt, door zon en regen. Noord en oost hebben minder vaak aandacht nodig. Zodra er blaasjes of scheurtjes komen, is het tijd om er iets aan te doen.
          </p>
          <p className="mt-10 max-w-[22ch] font-display text-[2rem] font-extrabold leading-tight sm:text-[2.6rem]">
            Op tijd schilderen voorkomt hoge kosten.
          </p>
          <div className="mt-12">
            <h2 className="text-[1.8rem] sm:text-[2.2rem]">Welke gevel eerst?</h2>
            <div className="mt-8">
              <Gevelwijzer />
            </div>
          </div>
          <h2 className="mt-16 text-[1.8rem] sm:text-[2.2rem]">Waarom het ertoe doet</h2>
          <p className="mt-4 max-w-[42rem]">
            Buitenschilderwerk beschermt onderdelen, zoals houten kozijnen, tegen het weer. Het voorkomt dat hout gaat rotten, zodat het houtwerk langer meegaat.
          </p>
          <RuledRows
            items={[
              {
                title: "Houtrot",
                text: "Als de woning regelmatig geschilderd wordt, hoeft u zich voorlopig minder zorgen te maken over houtrot.",
              },
              {
                title: "Waarde",
                text: "De waarde van uw woning wordt er hoger van.",
              },
              {
                title: "Uiterlijk",
                text: "Schilderwerk geeft het huis een ander uiterlijk. Als de woning goed in de verf staat, ziet dat er fris en mooi uit.",
              },
            ]}
          />
          <h2 className="mt-16 text-[1.8rem] sm:text-[2.2rem]">Waar Jeroen op let</h2>
          <RuledRows
            items={[
              {
                title: "Weer",
                text: "Buitenschilderwerk het liefst tussen april en oktober. De temperatuur tussen 10 en 25 °C, de luchtvochtigheid op maximaal 75%.",
              },
              {
                title: "Verf",
                text: "Een sterke hoogglanslak, ook wel alkydverf genoemd.",
              },
              {
                title: "Kleur",
                text: "Voor een straat of een deel van de wijk kunnen kleurafspraken gelden. In een monumentaal huis kunt u verplicht zijn bepaalde kleuren te gebruiken. Vraag dat vooraf bij de gemeente.",
              },
              {
                title: "Uitvoering",
                text: "Lastige details en kwetsbare plekken, zoals de onderkant en de bovenkant van deuren en kozijnen. Ook voldoende laagdikte.",
              },
            ]}
          />
          <p className="mt-8">
            <Link href="/wanneer-schilderen" className="text-link">
              Het seizoen, de signalen en de zelftest
            </Link>
          </p>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
