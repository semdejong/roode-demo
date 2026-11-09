import Link from "next/link";
import { content } from "@/content";
import { CallLinks } from "@/components/CallLinks";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { GlasPhoto, JeroenPhoto } from "@/components/Photos";
import { SiteFrame } from "@/components/SiteFrame";
import { Gevelwijzer } from "@/components/diagrams/Gevelwijzer";
import { SeasonRuler } from "@/components/diagrams/SeasonRuler";
import { SunArc } from "@/components/diagrams/SunArc";
import { WerkgebiedRoos } from "@/components/diagrams/WerkgebiedRoos";
import { Zelftest } from "@/components/diagrams/Zelftest";

const facts = ["sinds nov. 2006", "eenmanszaak", "binnen, buiten en glas", "Ruurlo e.o."];

const glassTypes = ["Isolatieglas / dubbelglas", "Enkelglas", "Glas in lood", "Glas in lood in dubbel glas"];

export default function Home() {
  const { contact, company, about, areas, services } = content;

  return (
    <SiteFrame>
      <section data-section="hero">
        <Container className="pb-14 pt-8 md:pb-20 md:pt-12">
          <SunArc />
          <h1 className="mt-6 max-w-[14ch] text-[2.55rem] sm:text-[3.6rem] lg:text-[4.35rem]">
            Schilderwerk in en rond Ruurlo, door Jeroen Roode zelf.
          </h1>
          <p className="mt-5 max-w-[36rem] text-muted">
            Eenmans schildersbedrijf sinds november 2006, na twintig jaar vakervaring.
          </p>
          <p className="mt-5 max-w-[40rem] font-mono text-[12px] leading-relaxed text-foreground sm:text-[13px]">
            {areas.join(" · ")}
          </p>
          <div className="mt-8">
            <CallLinks />
          </div>
        </Container>
      </section>

      <section data-section="feiten" className="border-y border-foreground/20">
        <Container>
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {facts.map((fact) => (
              <li key={fact} className="border-l border-foreground/20 px-4 py-4 font-mono text-[12px] leading-snug sm:text-[13px]">
                <span className="mb-3 block h-2 w-px bg-foreground" aria-hidden />
                {fact}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section data-section="diensten">
        <Container className="py-16 md:py-20">
          <h2 className="max-w-[16ch] text-[1.9rem] sm:text-[2.5rem]">Wat Jeroen schildert</h2>
          <div className="mt-8 border-t border-foreground/20">
            {services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group grid gap-3 border-b border-foreground/20 py-7 hover:bg-paper md:grid-cols-12 md:items-baseline md:gap-8 md:py-8"
              >
                <h3 className="text-[1.7rem] motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-1 md:col-span-5 md:text-[2rem]">
                  {item.title}
                </h3>
                <p className="text-muted md:col-span-6">{item.text}</p>
                <span className="font-mono text-[12px] text-amber-ink md:col-span-1 md:text-right">Lees</span>
              </Link>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/uw-huis-schilderen" className="text-link">
              Uw huis schilderen: bescherming, woonplezier en waarde
            </Link>
          </p>
        </Container>
      </section>

      <section data-section="seizoen" className="border-t border-foreground/15">
        <Container className="py-16 md:py-20">
          <h2 className="text-[1.9rem] sm:text-[2.5rem]">Wanneer schilderen?</h2>
          <div className="mt-8">
            <SeasonRuler />
          </div>
          <div className="mt-8 grid gap-6 border-t border-foreground/20 md:grid-cols-2">
            <p className="border-b border-foreground/20 py-4 md:border-b-0 md:border-r md:pr-8">
              <span className="font-mono text-[12px] text-amber-ink">Buiten</span>
              <span className="mt-2 block">Ongeveer eens per vijf jaar. Zuid en west eerder, door zon en regen.</span>
            </p>
            <p className="py-4 md:pl-8">
              <span className="font-mono text-[12px] text-muted">Binnen</span>
              <span className="mt-2 block">Ongeveer eens per zeven jaar. Trappen eerder.</span>
            </p>
          </div>
          <p className="mt-6">
            <Link href="/wanneer-schilderen" className="text-link">
              Signalen, proeven en het seizoen
            </Link>
          </p>
        </Container>
      </section>

      <section data-section="gevel" className="border-t border-foreground/15">
        <Container className="py-16 md:py-20">
          <h2 className="text-[1.9rem] sm:text-[2.5rem]">Welke gevel eerst?</h2>
          <p className="mt-4 max-w-[38rem]">
            Het schilderwerk op het zuiden en westen is eerder aan onderhoud toe. Noord en oost hebben minder vaak aandacht nodig.
          </p>
          <div className="mt-10">
            <Gevelwijzer />
          </div>
        </Container>
      </section>

      <section data-section="zelftest" className="border-t border-foreground/15">
        <Container className="py-16 md:py-20">
          <h2 className="text-[1.9rem] sm:text-[2.5rem]">Zelf controleren</h2>
          <p className="mt-4 max-w-[38rem]">
            Poederproef en hechtproef. Ze wijzen aan of het tijd is om te bellen. Ze stellen geen diagnose.
          </p>
          <div className="mt-8">
            <Zelftest />
          </div>
        </Container>
      </section>

      <section data-section="glas" className="border-t border-foreground/15">
        <Container className="grid items-start gap-10 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <GlasPhoto className="max-w-[340px]" />
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <h2 className="text-[1.9rem] sm:text-[2.5rem]">Glaszetten</h2>
            <p className="mt-4 max-w-[38rem]">
              Naast schilderwerk kunt u ook voor glaszetten bij ons terecht. Dubbel glas kan ook in combinatie met ventilatieroosters.
            </p>
            <ul className="mt-6 border-t border-foreground/20">
              {glassTypes.map((type) => (
                <li key={type} className="border-b border-foreground/20 py-3">
                  {type}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/glaszetten" className="text-link">
                Meer over glaszetten
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section data-section="over" className="border-t border-foreground/15">
        <Container className="grid items-start gap-10 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <JeroenPhoto />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-[1.9rem] sm:text-[2.5rem]">Over Jeroen</h2>
            <div className="mt-6 border-t border-foreground/20">
              {about.map((sentence) => (
                <p key={sentence} className="border-b border-foreground/20 py-4">
                  {sentence}
                </p>
              ))}
            </div>
            <p className="mt-6 text-[1.45rem]">U heeft één aanspreekpunt.</p>
            <p className="mt-4">
              Vriendelijke groet,
              <br />
              Jeroen Roode
              <br />
              {company.name}, {company.city}
            </p>
            <p className="mt-6">
              <Link href="/over-jeroen" className="text-link">
                Meer over Jeroen
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section data-section="werkgebied" className="border-t border-foreground/15">
        <Container className="py-16 md:py-20">
          <h2 className="text-[1.9rem] sm:text-[2.5rem]">Werkgebied</h2>
          <p className="mt-4 max-w-[36rem]">Wij werken vooral in de regio rond Ruurlo.</p>
          <div className="mt-8">
            <WerkgebiedRoos />
          </div>
        </Container>
      </section>

      <section data-section="winter" className="border-t border-foreground/15">
        <Container className="grid gap-4 py-14 md:grid-cols-12 md:py-16">
          <p className="font-mono text-[12px] text-amber-ink md:col-span-3">nov–mrt</p>
          <div className="md:col-span-8">
            <h2 className="max-w-[18ch] text-[1.9rem] sm:text-[2.4rem]">In de winter vaak voordeliger. Vraag ernaar.</h2>
            <p className="mt-4 max-w-[40rem]">
              In de winter is er vaak minder werk. Daarom is een winterschilder in die periode voordeliger. Vraag Jeroen ernaar.
              Hij treft extra voorzieningen, zodat het schilderwerk ook bij koude weersomstandigheden goed uitgevoerd kan worden.
            </p>
          </div>
        </Container>
      </section>

      <section data-section="faq" className="border-t border-foreground/15">
        <Container className="py-16 md:py-20">
          <h2 className="text-[1.9rem] sm:text-[2.5rem]">Korte antwoorden</h2>
          <div className="mt-8">
            <FaqList />
          </div>
        </Container>
      </section>

      <section data-section="contact" className="bg-brand text-paper">
        <Container className="grid gap-8 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <h2 className="text-[1.9rem] text-paper sm:text-[2.5rem]">Neem contact op</h2>
            <p className="mt-4 max-w-[36rem]">
              Mocht u vragen hebben of een prijsopgave willen ontvangen, neem dan contact op met ons.
            </p>
            <address className="mt-6">
              {company.name}
              <br />
              {contact.street}
              <br />
              {contact.postalCode} {contact.city}
            </address>
          </div>
          <div className="md:col-span-6">
            <CallLinks tone="dark" />
            <p className="mt-5">
              <a className="text-link text-paper decoration-paper" href={contact.mapsHref} target="_blank" rel="noopener noreferrer">
                Adres op Google Maps
                <span className="sr-only"> (opent in een nieuw venster)</span>
              </a>
            </p>
            <p className="mt-4">
              <Link href="/contact" className="text-link text-paper decoration-paper" data-cta="offerte">
                Naar het contactformulier
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
