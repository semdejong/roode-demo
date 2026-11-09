import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { GlasPhoto } from "@/components/Photos";
import { QuoteBand } from "@/components/QuoteBand";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Glaszetten",
  description:
    "Isolatieglas en dubbelglas, enkelglas, glas in lood en glas in lood in dubbel glas. Ook dubbel glas met ventilatieroosters.",
};

const types = [
  "Isolatieglas / dubbelglas",
  "Enkelglas",
  "Glas in lood",
  "Glas in lood in dubbel glas",
];

export default function GlasPage() {
  return (
    <SiteFrame>
      <PageHeader
        title="Glaszetten"
        lede="Naast schilderwerk kunt u ook voor glaszetten bij ons terecht."
        mark="lood"
      />
      <section data-section="glas">
        <Container className="grid items-start gap-10 py-14 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <GlasPhoto className="max-w-[440px]" />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-[1.8rem] sm:text-[2.2rem]">Soorten glas</h2>
            <ul className="mt-6 border-t border-foreground/20">
              {types.map((type) => (
                <li key={type} className="border-b border-foreground/20 py-4 font-display text-[1.25rem] font-bold">
                  {type}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[40rem]">
              Het plaatsen van dubbel glas kan ook in combinatie met ventilatieroosters.
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
