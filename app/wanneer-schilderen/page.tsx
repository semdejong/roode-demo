import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { QuoteBand } from "@/components/QuoteBand";
import { SiteFrame } from "@/components/SiteFrame";
import { ConditiePlaat } from "@/components/diagrams/ConditiePlaat";
import { Gevelwijzer } from "@/components/diagrams/Gevelwijzer";
import { LiggendDeel } from "@/components/diagrams/LiggendDeel";
import { SeasonRuler } from "@/components/diagrams/SeasonRuler";
import { Zelftest } from "@/components/diagrams/Zelftest";

export const metadata: Metadata = {
  title: "Wanneer schilderen",
  description:
    "Buiten ongeveer eens per vijf jaar, binnen eens per zeven. April tot oktober, 10 tot 25 graden, luchtvochtigheid maximaal 75 procent.",
};

const signals = [
  "Blaasjes en scheurtjes. Beschadiging begint vaak bij liggende delen, zoals een vensterbank.",
  "Verf die zichtbaar beschadigd, versleten of verkleurd is. Ook binnen: versleten vloeren of verkleurde muren.",
  "Verf die verpoedert of niet meer goed hecht. Dat controleert u met de poederproef of de hechtproef.",
];

export default function WanneerPage() {
  return (
    <SiteFrame>
      <PageHeader
        title="Wanneer schilderen"
        lede="Het helpt om te weten wanneer schilderwerk nodig is, en in welke periode het buiten het best lukt. Regelmatig onderhoud zorgt dat het langer meegaat."
      />
      <section data-section="ritme">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Hoe vaak</h2>
          <div className="mt-6 grid gap-6 border-t border-foreground/20 md:grid-cols-2">
            <p className="border-b border-foreground/20 py-5 md:border-b-0 md:border-r md:pr-8">
              <span className="font-mono text-[12px] text-amber-ink">Buiten</span>
              <span className="mt-2 block">
                Ongeveer eens per vijf jaar. Zuid en west eerder, door zon en regen. Bij lak of beits kan onderhoud vaker nodig zijn.
              </span>
            </p>
            <p className="py-5 md:pl-8">
              <span className="font-mono text-[12px] text-muted">Binnen</span>
              <span className="mt-2 block">
                Ongeveer eens per zeven jaar, bijvoorbeeld kozijnen en deuren. Delen die harder slijten, zoals trappen, eerder.
              </span>
            </p>
          </div>
          <h2 className="mt-14 text-[1.8rem] sm:text-[2.2rem]">De signalen</h2>
          <ul className="mt-6 max-w-[42rem] border-t border-foreground/20">
            {signals.map((signal) => (
              <li key={signal} className="border-b border-foreground/20 py-4">
                {signal}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LiggendDeel />
          </div>
        </Container>
      </section>
      <section data-section="seizoen" className="border-t border-foreground/15">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Seizoensliniaal</h2>
          <p className="mt-4 max-w-[42rem]">
            De beste periode ligt tussen april en oktober. Tussen 10 en 25 °C droogt de verf goed op. Luchtvochtigheid en zon tellen mee.
          </p>
          <div className="mt-8">
            <SeasonRuler />
          </div>
          <div className="mt-8">
            <ConditiePlaat />
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[1.35rem]">Achter de zon aan</h3>
              <p className="mt-3">
                De schilder werkt „achter de zon aan”: beginnen waar de zon die dag al geweest is. Schilderen in de volle zon warmt de verf op, zodat het oplosmiddel te snel verdampt.
              </p>
            </div>
            <div>
              <h3 className="text-[1.35rem]">Luchtvochtigheid</h3>
              <p className="mt-3">
                Houd de luchtvochtigheid op maximaal 75%. Is die te hoog, dan kan er condens, waterdamp, tussen de verflagen ontstaan.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section data-section="gevel" className="border-t border-foreground/15">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Welke gevel eerst?</h2>
          <div className="mt-8">
            <Gevelwijzer />
          </div>
        </Container>
      </section>
      <section data-section="zelftest" className="border-t border-foreground/15">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Poederproef en hechtproef</h2>
          <p className="mt-4 max-w-[40rem]">
            Twee controles die u zelf kunt doen. Ze zeggen iets over de plek die u test, niet over het hele huis.
          </p>
          <div className="mt-8">
            <Zelftest />
          </div>
        </Container>
      </section>
      <section data-section="winter" className="border-t border-foreground/15">
        <Container className="grid gap-4 py-14 md:grid-cols-12 md:py-16">
          <p className="font-mono text-[12px] text-amber-ink md:col-span-3">nov–mrt</p>
          <div className="md:col-span-8">
            <h2 className="text-[1.8rem] sm:text-[2.2rem]">Winterschilder</h2>
            <p className="mt-4 max-w-[42rem]">
              Liever niet wachten tot april? In de winter is er vaak minder werk, en is het daarom voordeliger. Vraag ernaar. Een winterschilder treft extra voorzieningen om het schilderwerk ook bij koude weersomstandigheden goed te kunnen uitvoeren.
            </p>
          </div>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
