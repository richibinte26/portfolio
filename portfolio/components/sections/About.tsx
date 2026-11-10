
import { GraduationCap, Code2, Heart } from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import SectionHeading from "@/components/ui/SectionHeading";
import EditableText from "@/components/ui/EditableText";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-pad border-t border-line"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.8fr]">
        <div>
          <SectionHeading id="about-title" title="About me" />

          <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
            <GraduationCap
              aria-hidden
              className="mt-0.5 h-6 w-6 shrink-0 text-accent"
            />
            <p className="text-sm leading-relaxed text-muted">
              <span className="block font-semibold text-ink">
                {personalInfo.department}
              </span>
              {personalInfo.university}
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-5 text-lg leading-relaxed">
            {personalInfo.about.map((p, i) => (
              <p key={i} className="max-w-prose">
                <EditableText text={p} />
              </p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Code2 aria-hidden className="h-5 w-5 text-accent" />
              What I enjoy
            </h3>
            <p className="mt-3 max-w-prose leading-relaxed text-muted">
              I enjoy exploring new technologies, developing practical web
              applications, solving problems and improving my development
              skills through hands-on projects.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Heart aria-hidden className="h-5 w-5 text-accent" />
              Beyond the code
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {personalInfo.hobbies.map((h, i) => (
                <li
                  key={i}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm"
                >
                  <EditableText text={h} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
