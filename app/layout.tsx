import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: "normal",
  variable: "--font-schibsted",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: "normal",
  variable: "--font-hanken",
  display: "swap",
});

const mono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  variable: "--font-azeret",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: `%s · ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = { themeColor: content.colors.background };

// Sleads demo-analytics (cookieloos). Events tellen alleen voor slugs die via POST /api/demos geregistreerd zijn.
const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
  "--paper": c.paper,
  "--amber-ink": c.amberInk,
  "--lood": c.lood,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <SleadsBadge />
      </body>
    </html>
  );
}
