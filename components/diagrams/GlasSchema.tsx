import type { ReactNode } from "react";

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <figure className="border border-foreground/20 bg-paper p-4">
      <svg viewBox="0 0 120 150" className="mx-auto h-36 w-auto" aria-hidden>
        {children}
      </svg>
      <figcaption className="mt-3 font-display text-[1.05rem] font-bold leading-snug">{label}</figcaption>
    </figure>
  );
}

export function GlasSchema() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Frame label="Isolatieglas / dubbelglas">
        <rect x="28" y="16" width="64" height="110" fill="none" stroke="#2F3033" strokeWidth="1" />
        <rect x="36" y="24" width="22" height="94" fill="none" stroke="#5A5B5E" strokeWidth="1" />
        <rect x="62" y="24" width="22" height="94" fill="none" stroke="#5A5B5E" strokeWidth="1" />
        <rect x="46" y="118" width="28" height="6" fill="#2F3033" />
      </Frame>
      <Frame label="Enkelglas">
        <rect x="34" y="16" width="52" height="110" fill="none" stroke="#2F3033" strokeWidth="1" />
        <rect x="42" y="24" width="36" height="94" fill="none" stroke="#5A5B5E" strokeWidth="1" />
      </Frame>
      <Frame label="Glas in lood">
        <rect x="30" y="16" width="60" height="110" fill="none" stroke="#C17A12" strokeWidth="3" />
        <line x1="30" y1="52" x2="90" y2="52" stroke="#5A5B5E" strokeWidth="1" />
        <line x1="30" y1="88" x2="90" y2="88" stroke="#5A5B5E" strokeWidth="1" />
        <line x1="60" y1="16" x2="60" y2="126" stroke="#5A5B5E" strokeWidth="1" />
        <rect x="48" y="64" width="12" height="16" fill="#4A2340" />
        <rect x="62" y="64" width="12" height="16" fill="#2F6B3A" />
      </Frame>
      <Frame label="Glas in lood in dubbel glas">
        <rect x="22" y="16" width="76" height="110" fill="none" stroke="#2F3033" strokeWidth="1" />
        <rect x="34" y="28" width="52" height="86" fill="none" stroke="#C17A12" strokeWidth="2" />
        <line x1="34" y1="56" x2="86" y2="56" stroke="#5A5B5E" strokeWidth="1" />
        <line x1="34" y1="84" x2="86" y2="84" stroke="#5A5B5E" strokeWidth="1" />
        <line x1="60" y1="28" x2="60" y2="114" stroke="#5A5B5E" strokeWidth="1" />
      </Frame>
    </div>
  );
}
