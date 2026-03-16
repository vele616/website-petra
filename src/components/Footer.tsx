import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-9 px-6 py-8 lg:px-10">
        <div className="flex w-full max-w-md flex-col items-center gap-6">
          <div className="flex w-full justify-center pb-3">
            <SocialLinks />
          </div>
          <NewsletterForm />
        </div>
        <div className="relative w-full text-xs tracking-wide text-muted-foreground">
          <p className="text-center">{"© 2026 Black Vomit. All rights reserved."}</p>
          <Link
            href="/privacy-policy"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
