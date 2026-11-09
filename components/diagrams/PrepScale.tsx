const STEPS = ["schuren", "ontvetten", "plamuren", "grondverven"] as const;

export function PrepScale() {
  return (
    <div>
      <div
        role="img"
        aria-label="De basis van schilderwerk: schuren, ontvetten, plamuren en grondverven. Daarnaast de ondergrond voorbehandelen of repareren."
      >
        <ol className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step} className="flex flex-col items-center border-t border-foreground pt-2 text-center">
              <span className="h-3 w-px bg-foreground" aria-hidden />
              <span className="mt-2 font-mono text-[13px] text-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-4 max-w-[40rem] text-muted">
        Goed schuren, ontvetten, plamuren en grondverven is de basis. Daarnaast hoort het voorbehandelen of repareren van de ondergrond erbij.
      </p>
    </div>
  );
}
