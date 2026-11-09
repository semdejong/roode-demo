const MONTHS = [
  { key: "jan", label: "jan", buiten: false },
  { key: "feb", label: "feb", buiten: false },
  { key: "mrt", label: "mrt", buiten: false },
  { key: "apr", label: "apr", buiten: true },
  { key: "mei", label: "mei", buiten: true },
  { key: "jun", label: "jun", buiten: true },
  { key: "jul", label: "jul", buiten: true },
  { key: "aug", label: "aug", buiten: true },
  { key: "sep", label: "sep", buiten: true },
  { key: "okt", label: "okt", buiten: true },
  { key: "nov", label: "nov", buiten: false },
  { key: "dec", label: "dec", buiten: false },
] as const;

const LABEL =
  "Seizoensliniaal van januari tot december. April tot en met oktober is het buitenseizoen: 10 tot 25 graden en maximaal 75 procent luchtvochtigheid. November tot en met maart: winterschilder, binnen.";

export function SeasonRuler({ variant = "full" }: { variant?: "full" | "mini" }) {
  const mini = variant === "mini";

  return (
    <div className={mini ? "" : "mt-2"}>
      <div
        role={mini ? undefined : "img"}
        aria-hidden={mini ? true : undefined}
        aria-label={mini ? undefined : LABEL}
      >
        <ol className="grid grid-cols-12">
          {MONTHS.map((month) => (
            <li
              key={month.key}
              className={`flex flex-col items-center border-t-2 ${month.buiten ? "border-accent" : "border-foreground"}`}
            >
              <span
                className={month.buiten ? "mt-1 h-4 w-px bg-accent" : "mt-1 h-2 w-px bg-foreground"}
                aria-hidden
              />
              <span className={`mt-1 font-mono text-muted ${mini ? "text-[9px] sm:text-[11px]" : "text-[10px] sm:text-[12px]"}`}>
                {month.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
      {mini ? null : (
        <div className="mt-4 grid gap-1 font-mono text-[12px] leading-relaxed text-amber-ink sm:text-[13px]">
          <p>apr–okt · buitenseizoen · 10–25 °C · ≤ 75% luchtvochtigheid</p>
          <p className="text-muted">nov–mrt · winterschilder · binnen</p>
        </div>
      )}
    </div>
  );
}
