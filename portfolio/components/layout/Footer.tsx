
"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { personalInfo } from "@/data/personal-info";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  const toTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <p className="font-display text-xl font-semibold">
            {personalInfo.name}
          </p>

          <p className="mt-1 text-muted">
            {personalInfo.designation}
          </p>

          <SocialLinks className="mt-5" />
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/#${l.id}`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <button
            type="button"
            onClick={toTop}
            className="btn btn-outline"
          >
            <ArrowUp aria-hidden className="h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-sm text-muted">
        <span suppressHydrationWarning>
          © {year}
        </span>{" "}
        {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
