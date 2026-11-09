import { content } from "@/content";

export function StickyCallBar() {
  const { contact } = content;
  return (
    <div
      data-section="belbalk"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-foreground/20 bg-paper px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden print:hidden"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-2">
        <a className="btn" href={contact.phoneHref} data-cta="bellen" aria-label="Bel Jeroen Roode, 0573 – 451484">
          Bel Jeroen
        </a>
        <a className="btn btn-line" href={contact.mailHref} data-cta="mail">
          Mail
        </a>
      </div>
    </div>
  );
}
