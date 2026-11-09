export function LiggendDeel() {
  return (
    <figure className="max-w-[420px]">
      <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-label="Kozijn met een liggende vensterbank. Beschadiging begint daar vaak.">
        <rect x="70" y="28" width="180" height="100" fill="none" stroke="#2F3033" strokeWidth="1" />
        <line x1="70" y1="78" x2="250" y2="78" stroke="#5A5B5E" strokeWidth="1" />
        <line x1="160" y1="28" x2="160" y2="128" stroke="#5A5B5E" strokeWidth="1" />
        <rect x="46" y="128" width="228" height="8" fill="#C17A12" />
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
