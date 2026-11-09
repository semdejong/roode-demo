"use client";

import { useState } from "react";
import { content } from "@/content";

type Choice = "ja" | "nee" | null;

export function Zelftest() {
  const [poeder, setPoeder] = useState<Choice>(null);
  const [hecht, setHecht] = useState<Choice>(null);
  const { contact } = content;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <h3 className="text-[1.45rem]">Poederproef</h3>
        <p className="mt-3 max-w-[40rem]">
          Maak uw schilderwerk op een plek met een natte doek schoon. Als er verfpoeder op de doek achterblijft, dan is het
          tijd om een schilder in te schakelen.
        </p>
        <h3 className="mt-8 text-[1.45rem]">Hechtproef</h3>
        <p className="mt-3 max-w-[40rem]">
          Maak uw schilderwerk op een hoek of vensterbank schoon. Druk een stuk plakband op deze plek en wrijf dat stevig
          vast. Trek het plakband los. Als u de verf meetrekt, dan hecht de verf niet meer goed.
        </p>
      </div>
      <div className="border border-foreground/25 bg-paper p-5 sm:p-6 lg:col-span-6 lg:self-start">
        <p className="font-mono text-[12px] text-muted">Controle, geen diagnose</p>
        <fieldset className="mt-4">
          <legend className="text-[1.25rem]">Blijft er verfpoeder op de doek?</legend>
          <div className="mt-3 flex gap-2">
            <ChoiceButton pressed={poeder === "ja"} onClick={() => { setPoeder("ja"); setHecht(null); }}>
              Ja
            </ChoiceButton>
            <ChoiceButton pressed={poeder === "nee"} onClick={() => { setPoeder("nee"); setHecht(null); }}>
              Nee
            </ChoiceButton>
          </div>
        </fieldset>
        {poeder ? (
          <p className="mt-4" aria-live="polite">
            {poeder === "ja"
              ? "Blijft er verfpoeder op de doek, dan is het op die plek tijd om een schilder in te schakelen."
              : "Op deze doek bleef geen verfpoeder achter. Dat geldt alleen voor de plek die u hebt schoongewreven."}
          </p>
        ) : null}
        {poeder ? (
          <p className="mt-3">
            <a className="btn" href={contact.phoneHref} data-cta="bellen">
              Bel Jeroen
            </a>
          </p>
        ) : null}
        {poeder ? (
          <fieldset className="mt-6 border-t border-foreground/15 pt-5">
            <legend className="text-[1.25rem]">Trekt u de verf mee met het plakband?</legend>
            <div className="mt-3 flex gap-2">
              <ChoiceButton pressed={hecht === "ja"} onClick={() => setHecht("ja")}>
                Ja
              </ChoiceButton>
              <ChoiceButton pressed={hecht === "nee"} onClick={() => setHecht("nee")}>
                Nee
              </ChoiceButton>
            </div>
          </fieldset>
        ) : null}
        {hecht ? (
          <p className="mt-4" aria-live="polite">
            {hecht === "ja"
              ? "Trekt u de verf mee, dan hecht die op die plek niet meer goed."
              : "Het plakband trok hier geen verf mee. Ziet u toch blaasjes, scheurtjes, slijtage of verkleuring, dan is een afspraak zinvol."}{" "}
            Dit is geen diagnose. De proef zegt iets over die ene plek, niet over het hele huis.
          </p>
        ) : null}
        {poeder ? (
          <button
            type="button"
            className="mt-5 inline-flex min-h-11 items-center font-mono text-[12px] text-muted underline"
            onClick={() => {
              setPoeder(null);
              setHecht(null);
            }}
          >
            Opnieuw
          </button>
        ) : null}
      </div>
    </div>
  );
}

function ChoiceButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 min-w-16 px-4 ${pressed ? "btn" : "btn btn-line"}`}
    >
      {children}
    </button>
  );
}
