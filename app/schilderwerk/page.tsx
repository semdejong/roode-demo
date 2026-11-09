import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { QuoteBand } from "@/components/QuoteBand";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Binnenschilderwerk, buitenschilderwerk en het schilderen van uw huis, door Jeroen Roode in Ruurlo en omgeving.",
};

const rows = [
  {
    href: "/binnenschilderwerk",
    title: "Binnenschilderwerk",
    text: "Muren, plafonds, kozijnen, trappen, vloeren en ruimtes zoals de badkamer of de kelder. Meestal acrylverf op waterbasis.",
  },
  {
    href: "/buitenschilderwerk",
    title: "Buitenschilderwerk",
    text: "Kozijnen, deuren, gevelbetimmering, buitenmuren en schutting of erfafscheiding. Ongeveer eens per vijf jaar, zuid en west eerder.",
  },
  {
    href: "/uw-huis-schilderen",
    title: "Uw huis schilderen",
    text: "Schilderwerk beschermt, geeft woonplezier en houdt de waarde van de woning in stand. Onderhoud begint met een vochtige doek.",
  },
];

export default function SchilderwerkPage() {
  return (
    <SiteFrame>
      <PageHeader
        title="Schilderwerk"
        lede="Jeroen Roode schildert binnen en buiten voor bedrijven en particulieren in Ruurlo en omgeving. U heeft één aanspreekpunt."
      />
      <section data-section="overzicht">
        <Container className="py-14 md:py-16">
          <div className="border-t border-foreground/20">
            {rows.map((row) => (
              <Link
                key={row.href}
                href={row.href}
                className="group grid gap-3 border-b border-foreground/20 py-7 hover:bg-paper md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <h2 className="text-[1.7rem] motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-1 md:col-span-5">
                  {row.title}
                </h2>
                <p className="md:col-span-6">{row.text}</p>
                <span className="font-mono text-[12px] text-amber-ink md:col-span-1 md:text-right">Lees</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-[40rem]">
            Wanneer een gevel of een binnenruimte aan de beurt is, leest u op{" "}
            <Link href="/wanneer-schilderen" className="text-link">
              Wanneer schilderen
            </Link>
            . Voor ruiten is er{" "}
            <Link href="/glaszetten" className="text-link">
              glaszetten
            </Link>
            .
          </p>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
