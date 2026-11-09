import { content } from "@/content";

export function CallLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const c = content.contact;
  const onDark = tone === "dark";

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <a className={`${onDark ? "btn btn-paper" : "btn"} w-full sm:w-auto`} href={c.phoneHref} data-cta="bellen">
        Bel {c.phoneDisplay}
      </a>
      <a
        className={`${onDark ? "btn btn-line-light" : "btn btn-line"} w-full sm:w-auto`}
        href={c.mailHref}
        data-cta="mail"
      >
        Mail voor een prijsopgave
      </a>
      <a
        className={`text-link inline-flex min-h-11 items-center max-md:self-end ${onDark ? "text-paper decoration-paper" : ""}`}
        href={c.mobileHref}
        data-cta="bellen"
      >
        {c.mobileDisplay}
      </a>
    </div>
  );
}
