"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { content } from "@/content";
import { Logo } from "@/components/Logo";

function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const dropId = useId();
  const { contact, schilderNav, mainNav } = content;
  const schilderActive = schilderNav.some((item) => item.href === pathname);

  useEffect(() => {
    document.body.toggleAttribute("data-menu-open", open);
    return () => document.body.removeAttribute("data-menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = panelRef.current;
    const selector = 'a[href], button:not([disabled])';
    const nodes = () => (root ? Array.from(root.querySelectorAll<HTMLElement>(selector)) : []);
    nodes()[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const list = nodes();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!drop) return;
    const onPointer = (event: PointerEvent) => {
      if (!dropRef.current?.contains(event.target as Node)) setDrop(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrop(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [drop]);

  const closeMenu = () => setOpen(false);

  return (
    <header data-section="masthead" className="border-b border-foreground/15 bg-background lg:sticky lg:top-0 lg:z-30">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="shrink-0" onClick={closeMenu}>
          <Logo priority />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-x-5 lg:flex">
          <div className="relative" ref={dropRef}>
            <button
              type="button"
              className={`inline-flex min-h-11 items-center gap-1 border-b-2 text-[15px] ${
                schilderActive ? "border-accent" : "border-transparent"
              }`}
              aria-expanded={drop}
              aria-controls={dropId}
              aria-haspopup="true"
              onClick={() => setDrop((value) => !value)}
            >
              Schilderwerk
              <span aria-hidden className="font-mono text-[12px]">
                {drop ? "–" : "+"}
              </span>
            </button>
            {drop ? (
              <div id={dropId} className="absolute left-0 top-full z-40 mt-1 min-w-64 border border-foreground/20 bg-paper">
                {schilderNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    className="flex min-h-11 items-center border-b border-foreground/10 px-4 text-[16px] last:border-b-0 hover:bg-background"
                    onClick={() => setDrop(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              className={`inline-flex min-h-11 items-center border-b-2 text-[15px] ${
                isCurrent(pathname, item.href) ? "border-accent" : "border-transparent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a className="text-link text-[15px]" href={contact.mailHref} data-cta="mail">
            Mail
          </a>
          <a className="text-[15px]" href={contact.mobileHref} data-cta="bellen">
            {contact.mobileDisplay}
          </a>
          <a className="btn" href={contact.phoneHref} data-cta="bellen">
            {contact.phoneDisplay}
          </a>
        </div>

        <button
          ref={menuBtnRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-foreground px-3 font-mono text-[13px] lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      <div className="border-t border-foreground/15 lg:hidden">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap gap-x-4 px-5">
          <a className="inline-flex min-h-11 items-center text-[16px]" href={contact.phoneHref} data-cta="bellen">
            {contact.phoneDisplay}
          </a>
          <a className="inline-flex min-h-11 items-center text-[16px]" href={contact.mobileHref} data-cta="bellen">
            {contact.mobileDisplay}
          </a>
          <a className="text-link inline-flex min-h-11 items-center text-[16px]" href={contact.mailHref} data-cta="mail">
            Mail
          </a>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-background px-5 py-3"
        >
          <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between">
            <Link href="/" onClick={closeMenu}>
              <Logo />
            </Link>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-foreground px-3 font-mono text-[13px]"
              onClick={() => {
                setOpen(false);
                menuBtnRef.current?.focus();
              }}
            >
              Sluit
            </button>
          </div>
          <nav aria-label="Mobiel menu" className="mx-auto mt-8 w-full max-w-[1180px] pb-16">
            <p className="font-mono text-[12px] text-muted">Schilderwerk</p>
            <ul className="mt-2 border-t border-foreground/20">
              {schilderNav.map((item) => (
                <li key={item.href} className="border-b border-foreground/20">
                  <Link
                    href={item.href}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    className="flex min-h-12 items-center text-[1.45rem]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-8 border-t border-foreground/20">
              {mainNav.map((item) => (
                <li key={item.href} className="border-b border-foreground/20">
                  <Link
                    href={item.href}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    className="flex min-h-12 items-center text-[1.45rem]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-1">
              <a className="inline-flex min-h-11 items-center" href={contact.phoneHref} data-cta="bellen">
                {contact.phoneDisplay}
              </a>
              <a className="inline-flex min-h-11 items-center" href={contact.mobileHref} data-cta="bellen">
                {contact.mobileDisplay}
              </a>
              <a className="text-link inline-flex min-h-11 items-center" href={contact.mailHref} data-cta="mail">
                {contact.email}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
