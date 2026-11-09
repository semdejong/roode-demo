"use client";

import { useState } from "react";
import { content, type FacadeId } from "@/content";

export function Gevelwijzer() {
  const [active, setActive] = useState<FacadeId>("Z");
  const current = content.facades.find((facade) => facade.id === active) ?? content.facades[2];

  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <div
          role="group"
          aria-label="Gevelwijzer, bovenaanzicht van een huis"
          className="mx-auto grid aspect-square w-full max-w-[400px] grid-cols-[72px_minmax(0,1fr)_72px] grid-rows-[72px_minmax(0,1fr)_72px]"
        >
          <div />
          <EdgeButton id="N" active={active} onSelect={setActive} className="items-end justify-center pb-2" />
          <div />
          <EdgeButton id="W" active={active} onSelect={setActive} className="items-center justify-end pr-2" />
          <div className="relative" aria-hidden>
            <div className="absolute inset-0 border border-foreground" />
            <div className="absolute inset-y-0 left-0 w-1 bg-accent" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
            <span className="absolute inset-0 grid place-items-center font-mono text-[12px] text-muted">huis</span>
          </div>
          <EdgeButton id="O" active={active} onSelect={setActive} className="items-center justify-start pl-2" />
          <div />
          <EdgeButton id="Z" active={active} onSelect={setActive} className="items-start justify-center pt-2" />
          <div />
        </div>
        <p className="mt-3 text-center font-mono text-[12px] text-muted">Bovenaanzicht. Amber: eerder aan de beurt.</p>
      </div>
      <div>
        <p className={`font-mono text-[12px] ${current.sooner ? "text-amber-ink" : "text-muted"}`}>{current.label}</p>
        <p id="gevel-tekst" aria-live="polite" className="mt-3 max-w-[36rem] text-[1.35rem] leading-snug">
          {current.text}
        </p>
        <p className="mt-4 max-w-[36rem] text-muted">
          Let vooral op liggende delen, zoals de vensterbank. Daar begint beschadiging van het schilderwerk vaak.
        </p>
      </div>
    </div>
  );
}

function EdgeButton({
  id,
  active,
  onSelect,
  className,
}: {
  id: FacadeId;
  active: FacadeId;
  onSelect: (id: FacadeId) => void;
  className: string;
}) {
  const facade = content.facades.find((item) => item.id === id);
  if (!facade) return null;
  const selected = active === id;

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-controls="gevel-tekst"
      aria-label={`${facade.label}gevel. ${facade.sooner ? "Eerder aan onderhoud toe." : "Minder vaak aandacht nodig."}`}
      onClick={() => onSelect(id)}
      className={`flex min-h-11 min-w-11 font-mono text-[13px] ${facade.sooner ? "text-amber-ink" : "text-foreground"} ${className}`}
    >
      <span className={selected ? "border-b-2 border-current" : ""}>{id}</span>
    </button>
  );
}
