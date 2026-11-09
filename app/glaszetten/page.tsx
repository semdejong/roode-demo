import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { GlasPhoto } from "@/components/Photos";
import { QuoteBand } from "@/components/QuoteBand";
import { SiteFrame } from "@/components/SiteFrame";
import { GlasSchema } from "@/components/diagrams/GlasSchema";

export const metadata: Metadata = {
  title: "Glaszetten",
  description:
    "Isolatieglas en dubbelglas, enkelglas, glas in lood en glas in lood in dubbel glas. Ook dubbel glas met ventilatieroosters.",
};

export default function GlasPage() {
  return (
    <SiteFrame>
      <PageHeader
        title="Glaszetten"
        lede="Naast schilderwerk kunt u ook voor glaszetten bij ons terecht. Vier soorten, plus dubbel glas met ventilatieroosters."
        mark="lood"
      />
      <section data-section="soorten">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Vier soorten</h2>
          <p className="mt-4 max-w-[40rem]">
            De tekeningen hieronder zijn een schema, geen foto van een opdracht. Het paneel verderop is wel een echt stuk glas in lood.
          </p>
          <div className="mt-8">
            <GlasSchema />
          </div>
          <dl className="mt-10 max-w-[46rem] border-t border-foreground/20">
            <div className="grid gap-2 border-b border-foreground/20 py-4 md:grid-cols-12 md:gap-8">
              <dt className="font-display text-[1.2rem] font-bold md:col-span-5">Isolatieglas / dubbelglas</dt>
              <dd className="text-muted md:col-span-7">
                Dubbel glas zetten. Dat kan ook in combinatie met ventilatieroosters.
              </dd>
            </div>
            <div className="grid gap-2 border-b border-foreground/20 py-4 md:grid-cols-12 md:gap-8">
              <dt className="font-display text-[1.2rem] font-bold md:col-span-5">Enkelglas</dt>
              <dd className="text-muted md:col-span-7">Enkel glas zetten.</dd>
            </div>
            <div className="grid gap-2 border-b border-foreground/20 py-4 md:grid-cols-12 md:gap-8">
              <dt className="font-display text-[1.2rem] font-bold md:col-span-5">Glas in lood</dt>
              <dd className="text-muted md:col-span-7">
                Glas in lood zetten. De rand is amber, het veld helder, met paars en groen in het midden.
              </dd>
            </div>
            <div className="grid gap-2 border-b border-foreground/20 py-4 md:grid-cols-12 md:gap-8">
              <dt className="font-display text-[1.2rem] font-bold md:col-span-5">Glas in lood in dubbel glas</dt>
              <dd className="text-muted md:col-span-7">Glas in lood opgenomen in dubbel glas.</dd>
            </div>
          </dl>
        </Container>
      </section>
      <section data-section="paneel" className="border-t border-foreground/15">
        <Container className="grid items-start gap-10 py-14 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <GlasPhoto className="max-w-[440px]" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-mono text-[12px] text-lood">lood · groen</p>
            <h2 className="mt-2 text-[1.8rem] sm:text-[2.2rem]">Het paneel</h2>
            <p className="mt-4">
              Dit is het enige werkstuk op deze site: een paneel glas in lood, met een amber rand, helder getextureerd glas en paars en groen in het midden.
            </p>
            <p className="mt-4">
              Zeg bij een prijsopgave welk van de vier soorten het is, en of er bij dubbel glas ventilatieroosters in moeten.
            </p>
            <p className="mt-8">
              <Link href="/binnenschilderwerk" className="text-link">
                Binnenschilderwerk
              </Link>
              {" · "}
              <Link href="/buitenschilderwerk" className="text-link">
                Buitenschilderwerk
              </Link>
            </p>
          </div>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
