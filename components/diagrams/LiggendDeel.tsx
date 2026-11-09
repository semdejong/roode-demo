export function LiggendDeel() {
  return (
    <figure className="max-w-[420px]">
      <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-label="Kozijn met een liggende vensterbank. Beschadiging begint daar vaak.">
        <rect x="78" y="24" width="164" height="96" fill="none" stroke="#2F3033" strokeWidth="1" />
        <line x1="78" y1="72" x2="242" y2="72" stroke="#5A5B5E" strokeWidth="1" />
        <line x1="160" y1="24" x2="160" y2="120" stroke="#5A5B5E" strokeWidth="1" />
        <rect x="54" y="120" width="212" height="10" fill="#C17A12" />
        <text x="160" y="162" textAnchor="middle" fill="#8A5208" fontSize="12" fontFamily="var(--font-azeret), ui-monospace, monospace">
          vensterbank
        </text>
      </svg>
      <figcaption className="mt-2 max-w-[36rem] text-muted">
        Beschadiging begint vaak bij liggende delen, zoals de vensterbank. Let daar eerder op dan op de staande stijlen.
      </figcaption>
    </figure>
  );
}
