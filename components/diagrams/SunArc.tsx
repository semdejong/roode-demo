"use client";

import { useEffect, useRef } from "react";

const P0 = { x: 30, y: 92 };
const P1 = { x: 500, y: -70 };
const P2 = { x: 970, y: 92 };
const VIEW = { x: 0, y: -20, w: 1000, h: 130 };

function point(t: number) {
  const u = 1 - t;
  return {
    x: u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x,
    y: u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y,
  };
}

const TICKS = [
  { t: 0.12, label: "O" },
  { t: 0.3, label: "" },
  { t: 0.5, label: "Z" },
  { t: 0.88, label: "W" },
];

const DISC = point(0.4);

export function SunArc() {
  const discRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const onScroll = () => {
      const shift = Math.min(window.scrollY, 180) / 180 * 8;
      if (discRef.current) discRef.current.style.transform = `translate3d(${shift}px, 0, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const left = ((DISC.x - VIEW.x) / VIEW.w) * 100;
  const top = ((DISC.y - VIEW.y) / VIEW.h) * 100;

  return (
    <div data-section="zonboog">
      <div className="relative h-20 md:h-28">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Zonboog van oost via zuid naar west. De schilder werkt achter de zon aan."
        >
          <path
            d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
            fill="none"
            stroke="#2F3033"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          {TICKS.map((tick) => {
            const p = point(tick.t);
            return (
              <line
                key={tick.t}
                x1={p.x}
                y1={p.y}
                x2={p.x}
                y2={p.y - 16}
                stroke="#2F3033"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>
        <div className="pointer-events-none absolute" style={{ left: `${left}%`, top: `${top}%` }} aria-hidden>
          <div
            ref={discRef}
            className="h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground bg-accent"
          />
        </div>
      </div>
      <div className="relative mt-1 h-5 font-mono text-[12px] text-muted" aria-hidden>
        {TICKS.filter((tick) => tick.label).map((tick) => {
          const p = point(tick.t);
          const x = ((p.x - VIEW.x) / VIEW.w) * 100;
          return (
            <span key={tick.label} className="absolute -translate-x-1/2" style={{ left: `${x}%` }}>
              {tick.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
