import type { Metadata } from "next";
import { content } from "@/content";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JeroenPhoto } from "@/components/Photos";
import { QuoteBand } from "@/components/QuoteBand";
import { SiteFrame } from "@/components/SiteFrame";
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
            <p className="mt-6 text-[1.45rem]">U heeft één aanspreekpunt.</p>
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
