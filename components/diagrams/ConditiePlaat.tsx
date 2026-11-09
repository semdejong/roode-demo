const readings = [
  { label: "temperatuur", value: "10–25 °C", note: "Dan droogt de verf goed op." },
  { label: "luchtvochtigheid", value: "max. 75%", note: "Hoger: kans op condens tussen de lagen." },
  { label: "zon", value: "achter de zon aan", note: "Beginnen waar de zon die dag al geweest is." },
] as const;

export function ConditiePlaat() {
  return (
    <div className="border border-foreground/25 bg-paper" role="group" aria-label="Omstandigheden voor buitenschilderwerk">
      {readings.map((reading) => (
        <div key={reading.label} className="grid gap-1 border-b border-foreground/15 px-5 py-4 last:border-b-0 sm:grid-cols-12 sm:items-baseline sm:gap-4">
          <p className="font-mono text-[12px] text-muted sm:col-span-3">{reading.label}</p>
          <p className="font-display text-[1.35rem] font-bold sm:col-span-4">{reading.value}</p>
          <p className="text-muted sm:col-span-5">{reading.note}</p>
        </div>
      ))}
    </div>
  );
}
