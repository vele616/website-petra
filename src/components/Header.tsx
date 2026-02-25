"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-900">
      <div className="">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about">About</a>
            <a href="#porfoleo">Porfoleo</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              className="text-ink-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "closeMenu" : "openMenu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`origin-top overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "pointer-events-auto max-h-80 scale-y-100 opacity-100"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col items-center gap-4 px-6 py-6 text-left">
          <a href="#about" onClick={() => setMobileOpen(false)}>
            <div className="m-auto w-fit">About</div>
          </a>
          <a href="#services" onClick={() => setMobileOpen(false)}>
            <div className="m-auto w-fit">Porfoleo</div>
          </a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            <div>Contact</div>
          </a>
        </nav>
      </div>
    </header>
  );
}
