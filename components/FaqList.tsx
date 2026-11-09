import { content } from "@/content";

export function FaqList() {
  return (
    <div className="border-t border-foreground/20">
      {content.faq.map((item) => (
        <details key={item.q} className="group border-b border-foreground/20">
          <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-4 text-[1.25rem]">
            {item.q}
            <span className="font-mono text-[14px] text-muted group-open:hidden" aria-hidden>
              +
            </span>
            <span className="hidden font-mono text-[14px] text-muted group-open:inline" aria-hidden>
              –
            </span>
          </summary>
          <p className="max-w-[42rem] pb-5">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
