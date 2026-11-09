import { CallLinks } from "@/components/CallLinks";
import { Container } from "@/components/Container";

export function QuoteBand() {
  return (
    <section data-section="prijsopgave" className="border-t border-foreground/15">
      <Container className="grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-16">
        <div className="md:col-span-6">
          <h2 className="text-[1.9rem] sm:text-[2.3rem]">Vrijblijvende prijsopgave</h2>
          <p className="mt-3 max-w-[36rem]">
            Neem contact op met ons. Bel of mail, dan ontvangt u een prijsopgave voor het schilderwerk of het glas.
          </p>
        </div>
        <div className="md:col-span-6">
          <CallLinks />
        </div>
      </Container>
    </section>
  );
}
