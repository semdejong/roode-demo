const SPOKES = [
  { name: "Borculo", dir: "noordnoordoost", deg: 22 },
  { name: "Neede", dir: "noordoost", deg: 50 },
  { name: "Eibergen", dir: "oostzuidoost", deg: 112 },
  { name: "Groenlo", dir: "zuidoost", deg: 146 },
  { name: "Zelhem", dir: "zuidwest", deg: 224 },
  { name: "Barchem", dir: "westnoordwest", deg: 278 },
  { name: "Lochem", dir: "westnoordwest", deg: 306 },
] as const;

const CX = 260;
const CY = 260;
const LINE = 148;
const LABEL = 188;

function polar(deg: number, radius: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: CX + radius * Math.sin(rad),
    y: CY - radius * Math.cos(rad),
  };
}

export function WerkgebiedRoos() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <svg viewBox="-8 16 536 470" className="mx-auto h-auto w-full max-w-[520px]" aria-hidden>
          <circle cx={CX} cy={CY} r={LINE} fill="none" stroke="#2F3033" strokeWidth="1" />
          <line x1={CX} y1={CY - LINE} x2={CX} y2={CY - 28} stroke="#5A5B5E" strokeWidth="1" />
          <line x1={CX} y1={CY + 28} x2={CX} y2={CY + LINE} stroke="#5A5B5E" strokeWidth="1" />
          <line x1={CX - LINE} y1={CY} x2={CX - 58} y2={CY} stroke="#5A5B5E" strokeWidth="1" />
          <line x1={CX + 58} y1={CY} x2={CX + LINE} y2={CY} stroke="#5A5B5E" strokeWidth="1" />
          {SPOKES.map((spoke) => {
            const start = polar(spoke.deg, 40);
            const end = polar(spoke.deg, LINE);
            const label = polar(spoke.deg, LABEL);
            const anchor = label.x < CX - 24 ? "end" : label.x > CX + 24 ? "start" : "middle";
            return (
              <g key={spoke.name}>
                <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#2F3033" strokeWidth="1" />
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor={anchor}
                  dominantBaseline="middle"
                  fill="#2F3033"
                  fontSize="14"
                  fontFamily="var(--font-azeret), ui-monospace, monospace"
                >
                  {spoke.name}
                </text>
              </g>
            );
          })}
          {(
            [
              ["N", 0],
              ["O", 90],
              ["Z", 180],
              ["W", 270],
            ] as const
          ).map(([letter, deg]) => {
            const p = polar(deg, 158);
            return (
              <text
                key={letter}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#5A5B5E"
                fontSize="12"
                fontFamily="var(--font-azeret), ui-monospace, monospace"
              >
                {letter}
              </text>
            );
          })}
          <circle cx={CX} cy={CY} r="3" fill="#2F3033" />
          <text
            x={CX}
            y={CY + 22}
            textAnchor="middle"
            fill="#2F3033"
            fontSize="16"
            fontFamily="var(--font-schibsted), sans-serif"
            fontWeight="700"
          >
            Ruurlo
          </text>
        </svg>
        <p className="mt-2 text-center font-mono text-[12px] text-muted">Alleen de windrichting, geen afstanden.</p>
      </div>
      <div className="lg:col-span-5">
        <ul className="border-t border-foreground/20">
          <li className="flex items-baseline justify-between gap-4 border-b border-foreground/20 py-2.5">
            <span>Ruurlo</span>
            <span className="font-mono text-[12px] text-muted">midden</span>
          </li>
          {SPOKES.map((spoke) => (
            <li key={spoke.name} className="flex items-baseline justify-between gap-4 border-b border-foreground/20 py-2.5">
              <span>{spoke.name}</span>
              <span className="font-mono text-[12px] text-muted">{spoke.dir}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
