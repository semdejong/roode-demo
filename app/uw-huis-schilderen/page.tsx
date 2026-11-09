import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { QuoteBand } from "@/components/QuoteBand";
import { RuledRows } from "@/components/RuledRows";
import { SiteFrame } from "@/components/SiteFrame";
import { PrepScale } from "@/components/diagrams/PrepScale";

export const metadata: Metadata = {
  title: "Uw huis schilderen",
  description:
    "Schilderwerk beschermt materiaal, geeft woonplezier en houdt de waarde van de woning in stand. Onderhoud met een vochtige doek.",
};

export default function HuisPage() {
  return (
    <SiteFrame>
      <PageHeader
        title="Uw huis schilderen"
        lede="Schilderen hoort bij het onderhoud van uw woning. Een mooi geschilderd huis is een goed vooruitzicht, en het is een investering."
      />
      <section data-section="huis">
        <Container className="py-14 md:py-16">
          <p className="max-w-[42rem]">
            Schilderwerk beschermt materialen zoals hout en stucwerk tegen slijtage, weer en wind. Buiten gaat het om houten kozijnen of de betimmering van de dakgoot. Binnen om vloeren, muren en trappen. Goed geschilderde onderdelen gaan veel langer mee, en het huis oogt verzorgd.
          </p>
          <RuledRows
            items={[
              {
                title: "Bescherming",
                text: "De buitenzijde staat bloot aan regen en zon, de binnenzijde aan gebruik en slijtage. Staan de houten kozijnen goed in de verf, dan hoeft u zich voorlopig minder zorgen te maken over het onderhoud.",
              },
              {
                title: "Woonplezier",
                text: "Als de woning strak in de lak staat, oogt ze fris. Bij de kleuren speelt uw smaak. Een nieuwe kleur op de muur verandert het interieur en de sfeer. Als het huis naar uw wens geschilderd is, woont u er met plezier.",
              },
              {
                title: "Waarde",
                text: "Het uiterlijk van de woning is van invloed op de prijs. Regelmatig onderhoud van het schilderwerk helpt de waarde te behouden.",
              },
            ]}
          />
          <h2 className="mt-16 text-[1.8rem] sm:text-[2.2rem]">Onderhoud tussendoor</h2>
          <p className="mt-4 max-w-[42rem]">
            Goed onderhouden schilderwerk gaat langer mee. Maak het schoon met een vochtige doek. De verflaag houdt het dan langer uit en u hoeft minder vaak te schilderen.
          </p>
          <h2 className="mt-16 text-[1.8rem] sm:text-[2.2rem]">Zelf, of uitbesteden</h2>
          <p className="mt-4 max-w-[42rem]">
            Zelf doen kost behoorlijk wat tijd. Daarom schakelen ook ervaren doe-het-zelvers vaak een schilder in. De schilder kent bovendien het verschil tussen de verf op het badkamerplafond en die in de woonkamer.
          </p>
          <div className="mt-8">
            <PrepScale />
          </div>
          <p className="mt-8">
            <Link href="/binnenschilderwerk" className="text-link">
              Binnen
            </Link>
            {" · "}
            <Link href="/buitenschilderwerk" className="text-link">
              Buiten
            </Link>
            {" · "}
            <Link href="/wanneer-schilderen" className="text-link">
              Wanneer
            </Link>
          </p>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
