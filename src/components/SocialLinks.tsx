import Link from "next/link";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Mail } from "lucide-react";

const socialLinks = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
];

export function SocialLinks() {
  return (
    <div className="mt-4 flex items-center justify-center gap-4 border-t border-border pt-4 md:border-t-0">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="text-foreground transition-colors"
          aria-label={social.label}
        >
          <social.icon className="h-6 w-6" strokeWidth={1.5} />
        </Link>
      ))}
    </div>
  );
}
