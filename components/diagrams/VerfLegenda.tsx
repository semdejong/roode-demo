const plates = [
  {
    kicker: "binnen · meestal",
    title: "Acrylverf",
    lines: ["waterbasis", "zonder oplosmiddelen", "nauwelijks geur", "droogt snel"],
    foot: "Dekkend, transparante lak of beits.",
  },
  {
    kicker: "buiten",
    title: "Hoogglanslak",
    lines: ["alkydverf", "sterk", "buitenschilderwerk", "bestand tegen het weer"],
    foot: "Een sterke hoogglanslak is buiten verstandig.",
  },
  {
    kicker: "vochtige ruimtes",
    title: "Aparte verf",
    lines: ["badkamer", "kelder", "vochtwerend", "schimmelwerend"],
    foot: "Het badkamerplafond krijgt een andere verf dan het plafond in de woonkamer.",
  },
  {
    kicker: "binnenzijde gevel",
    title: "Dampwerend",
    lines: ["kozijnen", "deuren", "in de buitengevel", "vocht blijft uit het hout"],
    foot: "Zodat waterdamp van binnen niet in het hout trekt.",
  },
] as const;

export function VerfLegenda() {
  return (
    <div className="grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2">
      {plates.map((plate) => (
        <article key={plate.title} className="bg-paper p-5 sm:p-6">
          <p className="font-mono text-[12px] text-amber-ink">{plate.kicker}</p>
          <h3 className="mt-2 text-[1.45rem]">{plate.title}</h3>
          <ul className="mt-4 border-t border-foreground/15">
            {plate.lines.map((line) => (
              <li key={line} className="border-b border-foreground/15 py-2 font-mono text-[12px]">
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-4">{plate.foot}</p>
        </article>
      ))}
    </div>
  );
}
