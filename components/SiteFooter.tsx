import Link from "next/link";
import { content } from "@/content";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  const { company, contact, areas, services } = content;

  return (
    <footer data-section="footer" className="border-t border-foreground/15">
      <Container className="grid gap-10 py-12 pb-32 md:grid-cols-12 md:pb-20">
        <div className="md:col-span-5">
          <Logo className="h-8 w-auto" />
          <p className="mt-4 font-display text-[1.35rem] font-bold">{company.name}</p>
          <address className="mt-3 not-italic">
            {contact.street}
            <br />
            {contact.postalCode} {contact.city}
          </address>
          <p className="mt-3 flex flex-col items-start">
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
        </div>
        <nav aria-label="Diensten" className="md:col-span-3">
          <p className="font-mono text-[12px] text-muted">Schilderwerk</p>
          <ul className="mt-3">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-link inline-flex min-h-11 items-center">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/uw-huis-schilderen" className="text-link inline-flex min-h-11 items-center">
                Uw huis schilderen
              </Link>
            </li>
            <li>
              <Link href="/wanneer-schilderen" className="text-link inline-flex min-h-11 items-center">
                Wanneer schilderen
              </Link>
            </li>
            <li>
              <Link href="/over-jeroen" className="text-link inline-flex min-h-11 items-center">
                Over Jeroen
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-link inline-flex min-h-11 items-center">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-link inline-flex min-h-11 items-center">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="font-mono text-[12px] text-muted">Werkgebied</p>
          <p className="mt-3">{areas.join(", ")}</p>
          <p className="mt-6 text-[16px]">
            <a className="text-link" href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
              Concept door Sleads
            </a>
          </p>
          <p className="mt-2 font-mono text-[12px] text-muted">Conceptsite, niet bestemd voor indexatie.</p>
          <p className="mt-6 text-[14px] text-muted">© {company.name}</p>
        </div>
      </Container>
    </footer>
  );
}
