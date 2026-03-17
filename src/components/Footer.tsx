"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/propaganda" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-350 flex-col gap-8 px-6 py-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="w-full max-w-md">
          <NewsletterForm />
        </div>

        <div className="flex w-full max-w-md flex-col items-start gap-6 lg:ml-auto lg:self-stretch lg:items-end lg:justify-between lg:gap-0">
          <div className="flex w-full flex-col items-start gap-3 lg:items-end">
            <nav
              className="flex w-full items-center gap-6 text-sm tracking-wide text-muted-foreground lg:justify-end"
              aria-label="Footer navigation"
            >
              {footerNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? "text-foreground underline underline-offset-4"
                      : "hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex w-full justify-start lg:justify-end">
              <SocialLinks />
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 text-left text-xs tracking-wide text-muted-foreground lg:items-end lg:text-right">
            <Link
              href="/privacy-policy"
              className="text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <p>
              {"© 2026 Black Vomit. All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
