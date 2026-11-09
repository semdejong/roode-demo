import type { Metadata } from "next";
import { content } from "@/content";
import { CallLinks } from "@/components/CallLinks";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Conceptsite voor Roode Schilderwerk. Geen opgeslagen contactformulier. Niet bestemd voor indexatie.",
};

export default function PrivacyPage() {
  const { company, contact } = content;

  return (
    <SiteFrame>
      <PageHeader
        title="Privacy"
        lede="Deze conceptsite hoort bij Roode Schilderwerk in Ruurlo. Zoekmachines worden gevraagd haar niet op te nemen."
      />
      <section data-section="privacy">
        <Container className="max-w-[760px] py-14 md:py-16">
          <div className="grid max-w-[42rem] gap-4">
            <p>
              {company.name}, {contact.street}, {contact.postalCode} {contact.city}. U bereikt Jeroen Roode via{" "}
              <a className="text-link" href={contact.phoneHref} data-cta="bellen">
                {contact.phoneDisplay}
              </a>
              ,{" "}
              <a className="text-link" href={contact.mobileHref} data-cta="bellen">
                {contact.mobileDisplay}
              </a>{" "}
              of{" "}
              <a className="text-link" href={contact.mailHref} data-cta="mail">
                {contact.email}
              </a>
              .
            </p>
            <p>
              Het formulier op de contactpagina opent uw eigen mailprogramma met een ingevuld bericht. Vanaf deze site wordt niets opgeslagen of verzonden.
            </p>
            <p>
              Voor dit concept wordt een cookieloze telling gebruikt: alleen dat een pagina is bekeken, zonder marketingcookies en zonder profiel.
            </p>
          </div>
          <div className="mt-10">
            <CallLinks />
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
