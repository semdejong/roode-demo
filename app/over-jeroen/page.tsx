import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JeroenPhoto } from "@/components/Photos";
import { QuoteBand } from "@/components/QuoteBand";
import { SiteFrame } from "@/components/SiteFrame";
import { TweeMomenten } from "@/components/diagrams/TweeMomenten";
import { WerkgebiedRoos } from "@/components/diagrams/WerkgebiedRoos";

export const metadata: Metadata = {
  title: "Over Jeroen",
  description:
    "Jeroen Roode begon zijn eigen schildersbedrijf na twintig jaar ervaring. Sinds november 2006 werkzaam in Ruurlo en omgeving.",
};

export default function OverPage() {
  const { about, company } = content;

  return (
    <SiteFrame>
      <PageHeader
        title="Over Jeroen"
        lede="Roode Schilderwerk is het eenmansbedrijf van Jeroen Roode, in Ruurlo."
      />
      <section data-section="over">
        <Container className="grid items-start gap-10 py-14 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <JeroenPhoto />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-foreground/20">
              {about.map((sentence) => (
                <p key={sentence} className="border-b border-foreground/20 py-4">
                  {sentence}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <TweeMomenten />
            </div>
            <p className="mt-10 text-[1.45rem]">U heeft één aanspreekpunt.</p>
            <p className="mt-4 max-w-[40rem]">
              Mocht u vragen hebben of een prijsopgave willen ontvangen, neem dan contact op met ons.
            </p>
            <p className="mt-6">
              Vriendelijke groet,
              <br />
              Jeroen Roode
              <br />
              {company.name}
              <br />
              {company.city}
            </p>
          </div>
        </Container>
      </section>
      <section data-section="werk" className="border-t border-foreground/15">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Waar u hem voor belt</h2>
          <p className="mt-4 max-w-[40rem]">
            Voor bedrijven en voor particulieren. Het werk is binnenschilderwerk, buitenschilderwerk en glaszetten.
          </p>
          <div className="mt-8 grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2">
            <div className="bg-background p-5">
              <p className="font-mono text-[12px] text-muted">opdrachtgevers</p>
              <p className="mt-2 text-[1.35rem]">Bedrijven en particulieren</p>
            </div>
            <div className="bg-background p-5">
              <p className="font-mono text-[12px] text-amber-ink">aanspreekpunt</p>
              <p className="mt-2 text-[1.35rem]">Jeroen Roode zelf</p>
            </div>
          </div>
          <ul className="mt-8 border-t border-foreground/20">
            {[
              ["/binnenschilderwerk", "Binnenschilderwerk", "Muren, plafonds, kozijnen, trappen, vloeren, badkamer en kelder."],
              ["/buitenschilderwerk", "Buitenschilderwerk", "Kozijnen, deuren, gevelbetimmering, buitenmuren, schutting."],
              ["/glaszetten", "Glaszetten", "Dubbelglas, enkelglas, glas in lood, ook met ventilatieroosters."],
            ].map(([href, title, text]) => (
              <li key={href} className="border-b border-foreground/20">
                <Link href={href} className="grid gap-1 py-4 hover:bg-paper md:grid-cols-12 md:gap-8">
                  <span className="font-display text-[1.25rem] font-bold md:col-span-4">{title}</span>
                  <span className="text-muted md:col-span-8">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section data-section="werkgebied" className="border-t border-foreground/15">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Werkgebied</h2>
          <p className="mt-4 max-w-[36rem]">Wij werken vooral in de regio rond Ruurlo.</p>
          <div className="mt-8">
            <WerkgebiedRoos />
          </div>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
