import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-350 flex-col gap-8 px-6 py-10 lg:px-10">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <NewsletterForm />
          <SocialLinks />
        </div>
        <p className="text-xs tracking-wide text-muted-foreground">
          {"© 2026 Black Vomit. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
