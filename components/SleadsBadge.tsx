/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="sleads-badge fixed bottom-[4.75rem] left-3 z-40 inline-flex items-center gap-1.5 border border-foreground/15 bg-paper px-3 py-1.5 text-[11px] font-medium text-foreground md:bottom-4 md:left-4 md:text-xs print:hidden"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
