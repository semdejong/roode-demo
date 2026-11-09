import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { QuoteBand } from "@/components/QuoteBand";
import { SiteFrame } from "@/components/SiteFrame";
import { PrepScale } from "@/components/diagrams/PrepScale";
import { VerfLegenda } from "@/components/diagrams/VerfLegenda";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Binnenschilderwerk, buitenschilderwerk en het schilderen van uw huis, door Jeroen Roode in Ruurlo en omgeving.",
};

const rows = [
  {
    href: "/binnenschilderwerk",
    kicker: "waterbasis",
    title: "Binnenschilderwerk",
    text: "Muren, plafonds, kozijnen, trappen, vloeren en ruimtes zoals de badkamer of de kelder. Meestal acrylverf op waterbasis, zonder oplosmiddelen.",
  },
  {
    href: "/buitenschilderwerk",
    kicker: "alkyd",
    title: "Buitenschilderwerk",
    text: "Kozijnen, deuren, gevelbetimmering, buitenmuren en schutting of erfafscheiding. Ongeveer eens per vijf jaar. Zuid en west eerder, door zon en regen.",
  },
  {
    href: "/uw-huis-schilderen",
    kicker: "onderhoud",
    title: "Uw huis schilderen",
    text: "Schilderwerk beschermt, geeft woonplezier en houdt de waarde van de woning in stand. Tussendoor volstaat een vochtige doek.",
  },
];

const aside = [
  { href: "/wanneer-schilderen", title: "Wanneer schilderen", text: "Ritme, signalen, seizoen en de twee proeven." },
  { href: "/glaszetten", title: "Glaszetten", text: "Enkelglas, dubbelglas, glas in lood en roosters." },
  { href: "/over-jeroen", title: "Over Jeroen", text: "Eenmanszaak, sinds november 2006, één aanspreekpunt." },
];

export default function SchilderwerkPage() {
  return (
    <SiteFrame>
      <PageHeader
        title="Schilderwerk"
        lede="Jeroen Roode schildert binnen en buiten voor bedrijven en particulieren in Ruurlo en omgeving. U heeft één aanspreekpunt, van de ondergrond tot de laatste laag."
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
                <div className="md:col-span-5">
                  <p className="font-mono text-[12px] text-amber-ink">{row.kicker}</p>
                  <h2 className="mt-1 text-[1.7rem] motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-1">
                    {row.title}
                  </h2>
                </div>
                <p className="md:col-span-6">{row.text}</p>
                <span className="font-mono text-[12px] text-amber-ink md:col-span-1 md:text-right">Lees</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section data-section="basis" className="border-t border-foreground/15">
        <Container className="grid gap-10 py-14 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[1.8rem] sm:text-[2.2rem]">Eerst de ondergrond</h2>
            <p className="mt-4">
              De verf houdt het alleen als de voorbereiding klopt. Dat geldt binnen en buiten, op hout en op stucwerk.
            </p>
          </div>
          <div className="lg:col-span-8">
            <PrepScale />
          </div>
        </Container>
      </section>
      <section data-section="verf" className="border-t border-foreground/15">
        <Container className="py-14 md:py-16">
          <h2 className="max-w-[16ch] text-[1.8rem] sm:text-[2.2rem]">Niet overal dezelfde verf</h2>
          <p className="mt-4 max-w-[40rem]">
            Iedere ruimte en elk materiaal vraagt om een passende verf. Binnen is dat meestal acryl. Buiten een sterke hoogglanslak. Vochtige ruimtes en de binnenzijde van gevelkozijnen krijgen een eigen soort.
          </p>
          <div className="mt-8">
            <VerfLegenda />
          </div>
        </Container>
      </section>
      <section data-section="verder" className="border-t border-foreground/15">
        <Container className="py-14 md:py-16">
          <h2 className="text-[1.8rem] sm:text-[2.2rem]">Verder op deze site</h2>
          <div className="mt-6 border-t border-foreground/20">
            {aside.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="grid gap-2 border-b border-foreground/20 py-5 hover:bg-paper md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <h3 className="text-[1.35rem] md:col-span-4">{item.title}</h3>
                <p className="text-muted md:col-span-8">{item.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <QuoteBand />
    </SiteFrame>
  );
}
