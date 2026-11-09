"use client";

import { useState } from "react";
import { content } from "@/content";

export function MailForm() {
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);
  const email = content.contact.email;

  return (
    <form
      id="formulier"
      className="grid gap-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const naam = String(data.get("naam") ?? "").trim();
        const telefoon = String(data.get("telefoon") ?? "").trim();
        const adres = String(data.get("adres") ?? "").trim();
        const werk = String(data.get("werk") ?? "").trim();
        if (!naam || !telefoon || !adres || !werk) {
          setOpened(false);
          setError("Vul uw naam, telefoon, adres en een korte omschrijving in.");
          return;
        }
        const body = [`Naam: ${naam}`, `Telefoon: ${telefoon}`, `Adres/plaats: ${adres}`, `Wat moet er geschilderd worden: ${werk}`].join("\n");
        const href = `mailto:${email}?subject=${encodeURIComponent("Vrijblijvende prijsopgave")}&body=${encodeURIComponent(body)}`;
        setError("");
        setOpened(true);
        window.location.href = href;
      }}
    >
      <div>
        <label className="mb-1 block text-[16px]" htmlFor="naam">
          Naam
        </label>
        <input className="field" id="naam" name="naam" type="text" autoComplete="name" required />
      </div>
      <div>
        <label className="mb-1 block text-[16px]" htmlFor="telefoon">
          Telefoon
        </label>
        <input className="field" id="telefoon" name="telefoon" type="tel" autoComplete="tel" required />
      </div>
      <div>
        <label className="mb-1 block text-[16px]" htmlFor="adres">
          Adres en plaats
        </label>
        <input className="field" id="adres" name="adres" type="text" autoComplete="street-address" required />
      </div>
      <div>
        <label className="mb-1 block text-[16px]" htmlFor="werk">
          Wat moet er geschilderd worden?
        </label>
        <textarea className="field" id="werk" name="werk" required />
      </div>
      <p className="text-[16px] text-muted">
        Er wordt niets vanaf deze site verzonden. De knop opent uw eigen mailprogramma met dit bericht. U verstuurt het zelf.
      </p>
      {error ? (
        <p role="alert" className="text-amber-ink">
          {error}
        </p>
      ) : null}
      <div>
        <button type="submit" className="btn" data-cta="mail">
          Open dit bericht in uw mailprogramma
        </button>
      </div>
      {opened ? (
        <p aria-live="polite">
          Uw mailprogramma opent met dit bericht. Er is nog niets verzonden.
        </p>
      ) : null}
      <p className="text-[16px]">
        Liever direct mailen?{" "}
        <a className="text-link" href={content.contact.mailHref} data-cta="mail">
          {email}
        </a>
      </p>
    </form>
  );
}
