export function TweeMomenten() {
  return (
    <ol className="max-w-[36rem] border-l border-foreground" aria-label="Twee momenten uit het verhaal van Jeroen Roode">
      <li className="relative pb-8 pl-6">
        <span className="absolute top-2 left-0 h-2 w-2 -translate-x-1/2 bg-foreground" aria-hidden />
        <p className="font-mono text-[12px] text-muted">ervoor</p>
        <p className="mt-1 text-[1.25rem]">Twintig jaar ervaring als schilder, opgedaan vóór het eigen bedrijf.</p>
      </li>
      <li className="relative pl-6">
        <span className="absolute top-2 left-0 h-2 w-2 -translate-x-1/2 bg-accent" aria-hidden />
        <p className="font-mono text-[12px] text-amber-ink">november 2006</p>
        <p className="mt-1 text-[1.25rem]">Jeroen begint voor zichzelf. Sindsdien werkt hij voor bedrijven en particulieren in Ruurlo en omgeving.</p>
      </li>
    </ol>
  );
}
