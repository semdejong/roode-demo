import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCallBar } from "@/components/StickyCallBar";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-3 focus:py-2"
      >
        Naar inhoud
      </a>
      <SiteHeader />
      <main id="inhoud" className="flex-1 scroll-mt-6 lg:scroll-mt-28">
        {children}
      </main>
      <SiteFooter />
      <StickyCallBar />
    </>
  );
}
