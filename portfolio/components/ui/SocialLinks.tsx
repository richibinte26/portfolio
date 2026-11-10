import type { IconType } from "react-icons";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { personalInfo, type SocialId } from "@/data/personal-info";

const icons: Record<SocialId, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  facebook: FaFacebookF,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`} aria-label="Social links">
      {personalInfo.socials.map((s) => {
        const Icon = icons[s.id];
        const base =
          "flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-colors duration-200";
        return (
          <li key={s.id}>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (opens in a new tab)`}
                title={s.label}
                className={`${base} border-ink/20 bg-surface text-ink hover:border-accent hover:bg-accent hover:text-white`}
              >
                <Icon aria-hidden />
              </a>
            ) : (
              <span
                role="img"
                aria-label={`${s.label}: add your link in data/personal-info.ts`}
                title={`${s.label}: add your link in data/personal-info.ts`}
                className={`${base} cursor-not-allowed border-dashed border-line text-muted/60`}
              >
                <Icon aria-hidden />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
