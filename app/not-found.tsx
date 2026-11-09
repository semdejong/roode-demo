import Link from "next/link";
import { Container } from "@/components/Container";
import { CallLinks } from "@/components/CallLinks";
import { SiteFrame } from "@/components/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame>
      <section data-section="niet-gevonden">
        <Container className="py-16 md:py-24">
          <h1 className="max-w-[14ch] text-[2.5rem] sm:text-[3.4rem]">Deze pagina bestaat niet.</h1>
          <p className="mt-5 max-w-[36rem]">
            Het adres klopt niet, of de pagina is er niet. Ga terug naar het begin, of bel of mail Jeroen Roode.
          </p>
          <p className="mt-6">
            <Link href="/" className="text-link">
              Naar de beginpagina
            </Link>
          </p>
          <div className="mt-8">
            <CallLinks />
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
