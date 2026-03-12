import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-6 px-6 py-8 lg:px-10">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
          <NewsletterForm />
          <div className="flex flex-col justify-between gap-6 lg:gap-12">
            <SocialLinks />
            <Link
              href="/privacy-policy"
              className="text-xs tracking-wide text-muted-foreground transition-colors self-center hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">
          {"© 2026 Black Vomit. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
