import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { QuoteBand } from "@/components/QuoteBand";
import { RuledRows } from "@/components/RuledRows";
import { SiteFrame } from "@/components/SiteFrame";
import { VerfLegenda } from "@/components/diagrams/VerfLegenda";

export const metadata: Metadata = {
  title: "Binnenschilderwerk",
  description:
    "Muren, plafonds, kozijnen, trappen, vloeren, badkamer en kelder. Roode Schilderwerk gebruikt binnen meestal acrylverf.",
};

export default function BinnenPage() {
  return (
    <SiteFrame>
      <PageHeader
        title={
          <>
            Binnen
            <span className="block">schilderwerk</span>
          </>
        }
        lede="Het binnenschilderwerk zorgt voor een verzorgde, persoonlijke uitstraling. Met een goede voorbereiding en uitvoering houdt u dat resultaat."
      />
      <section data-section="binnen">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Wat eronder valt</h2>
          <p className="mt-4 max-w-[40rem]">
            Bij binnenschilderwerk kunt u denken aan muren, plafonds en kozijnen. Ook trappen, vloeren en ruimtes die een aparte behandeling vragen, zoals de badkamer. Bij een vloer gaat het bijvoorbeeld om de kelder.
          </p>
          <ul className="mt-8 max-w-[46rem] border-t border-foreground/20">
            {[
              ["Muren", "Een nieuwe kleur verandert het interieur en de sfeer."],
              ["Plafonds", "In de badkamer een andere verf dan in de woonkamer."],
              ["Kozijnen en deuren", "Aan de binnenzijde van de gevel: dampwerende verf."],
              ["Trappen", "Veel belopen. Als het hout goed in de verf staat, gaat het langer mee. Onderhoud eerder dan eens per zeven jaar."],
              ["Vloeren", "Bijvoorbeeld de kelder, met vocht- en schimmelwerende verf."],
              ["Badkamer", "Veel waterdamp door douchen. De verf moet vocht en schimmel weren."],
            ].map(([title, text]) => (
              <li key={title} className="grid gap-2 border-b border-foreground/20 py-4 md:grid-cols-12 md:gap-8">
                <p className="font-display text-[1.2rem] font-bold md:col-span-4">{title}</p>
                <p className="text-muted md:col-span-8">{text}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-14 text-[1.8rem] sm:text-[2.2rem]">Wat het doet</h2>
          <p className="mt-4 max-w-[40rem]">
            Een nieuwe kleur op de muren, samen met strak geschilderd houtwerk, maakt het huis sfeervol. Daarnaast beschermt het schilderwerk.
          </p>
          <RuledRows
            items={[
              {
                title: "Slijtage",
                text: "Denk aan een veelbelopen houten trap of vloer. Als het hout goed in de verf staat, gaat het langer mee.",
              },
              {
                title: "Vocht",
                text: "Binnen ontstaat veel waterdamp, onder meer door douchen, koken en de verwarming. Schilderwerk beschermt materiaal tegen het intrekken van die damp. De kwaliteit telt binnen minstens zo zwaar als buiten.",
              },
              {
                title: "Schimmel",
                text: "In vochtgevoelige ruimtes, zoals de badkamer of een kelder, zorgt schilderwerk ervoor dat er geen schimmel ontstaat.",
              },
            ]}
          />
          <h2 className="mt-14 text-[1.8rem] sm:text-[2.2rem]">Verf voor binnen</h2>
          <p className="mt-4 max-w-[42rem]">
            Roode Schilderwerk gebruikt voor binnenschilderwerk meestal acrylverf. Dat is verf op waterbasis, zonder oplosmiddelen. Die heeft nauwelijks geur en droogt snel. Acrylverf is er als dekkende verf, als transparante lak of als beits.
          </p>
          <p className="mt-4 max-w-[42rem]">
            Iedere ruimte en elk materiaal vraagt om een passende verf. De badkamer en de kelder vragen om een sterke vocht- en schimmelwerende verf. Voor de kozijnen en deuren in de buitengevel wordt aan de binnenzijde een dampwerende verf gebruikt, zodat vocht dat binnen ontstaat niet in het hout kan trekken.
          </p>
          <div className="mt-8">
            <VerfLegenda />
          </div>
          <p className="mt-8">
            <Link href="/buitenschilderwerk" className="text-link">
              Buitenschilderwerk
            </Link>
            {" · "}
            <Link href="/wanneer-schilderen" className="text-link">
              Wanneer schilderen
            </Link>
          </p>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
