import type { Metadata } from "next";
import { content } from "@/content";
import { Container } from "@/components/Container";
import { MailForm } from "@/components/MailForm";
import { PageHeader } from "@/components/PageHeader";
import { SiteFrame } from "@/components/SiteFrame";
import { WerkgebiedRoos } from "@/components/diagrams/WerkgebiedRoos";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Roode Schilderwerk, Wilhelminalaan 35, 7261 BP Ruurlo. Bel 0573 – 451484 of 06-11 44 52 84, of mail roode@schilder-ruurlo.nl.",
};

export default function ContactPage() {
  const { company, contact } = content;

  return (
    <SiteFrame>
      <PageHeader
        title="Contact"
        lede="Bel, of mail voor een vrijblijvende prijsopgave. Het formulier opent uw eigen mailprogramma. Er wordt vanaf deze site niets verzonden."
      />
      <section data-section="contact">
        <Container className="grid gap-12 py-14 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[1.45rem] font-bold">{company.name}</p>
            <p className="mt-1 text-muted">{company.legalLine}</p>
            <address className="mt-4">
              {contact.street}
              <br />
              {contact.postalCode} {contact.city}
            </address>
            <p className="mt-4 flex flex-col items-start">
              <a className="text-link inline-flex min-h-11 items-center" href={contact.phoneHref} data-cta="bellen">
                {contact.phoneDisplay}
              </a>
              <a className="text-link inline-flex min-h-11 items-center" href={contact.mobileHref} data-cta="bellen">
                {contact.mobileDisplay}
              </a>
              <a className="text-link inline-flex min-h-11 items-center" href={contact.mailHref} data-cta="mail">
                {contact.email}
              </a>
            </p>
            <p className="mt-4">
              <a className="text-link" href={contact.mapsHref} target="_blank" rel="noopener noreferrer">
                Adres op Google Maps
                <span className="sr-only"> (opent in een nieuw venster)</span>
              </a>
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-[1.6rem]">Bericht opstellen</h2>
            <div className="mt-5">
              <MailForm />
            </div>
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
    </SiteFrame>
  );
}
