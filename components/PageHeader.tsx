import { Container } from "@/components/Container";
import { SeasonRuler } from "@/components/diagrams/SeasonRuler";

export function PageHeader({
  title,
  lede,
  mark,
}: {
  title: string;
  lede: string;
  mark?: "lood";
}) {
  return (
    <header data-section="paginakop" className="border-b border-foreground/15">
      <Container className="py-12 md:py-16">
        <SeasonRuler variant="mini" />
        {mark === "lood" ? <span className="mt-6 block h-[3px] w-12 bg-lood" aria-hidden /> : null}
        <h1 className="mt-6 max-w-[16ch] text-[2.45rem] sm:text-[3.5rem]">{title}</h1>
        <p className="mt-5 max-w-[40rem]">{lede}</p>
      </Container>
    </header>
  );
}
