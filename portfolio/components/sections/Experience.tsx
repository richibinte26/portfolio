
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import SectionHeading from "@/components/ui/SectionHeading";

const building = [
  {
    title: "Academic Learning",
    text: "Studying Computer Science and Engineering at BUBT and developing a foundation in programming, databases and software development.",
    Icon: GraduationCap,
  },
  {
    title: "Self-directed Learning",
    text: "Learning modern frontend and backend technologies through documentation, tutorials and hands-on practice.",
    Icon: BookOpen,
  },
  {
    title: "Personal Projects",
    text: "Building and deploying projects such as FitLog, BazarDor and DevStack to apply my knowledge and gain practical development experience.",
    Icon: Code2,
  },
];

export default function Experience() {
  const entries = personalInfo.experience;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-pad border-t border-line bg-surface"
    >
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          title="Experience"
          intro="My learning journey, hands-on development experience and professional growth."        />

        {entries.length > 0 ? (
          <ol className="space-y-6">
            {entries.map((e, i) => (
              <li
                key={i}
                className="rounded-2xl border border-line bg-bg p-6 sm:p-8"
              >
                <h3 className="font-display text-xl font-semibold">
                  {e.role}
                </h3>
                <p className="mt-1 text-accent">
                  {e.company} · {e.period}
                </p>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">
                  {e.description}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <div className="rounded-2xl border border-line bg-bg p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Briefcase
                aria-hidden
                className="mt-1 h-6 w-6 shrink-0 text-accent"
              />

              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold">
                  Building My Practical Experience
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  I am currently at the beginning of my professional journey
                  and have not yet held a formal employment position. I am
                  gaining practical experience through academic learning,
                  independent study and hands-on development projects. I am
                  interested in internship opportunities and junior
                  development roles where I can continue learning and
                  contribute to real-world projects.
                </p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {building.map(({ title, text, Icon }) => (
                    <article
                      key={title}
                      className="rounded-xl border border-line bg-surface p-5"
                    >
                      <Icon
                        aria-hidden
                        className="h-6 w-6 text-accent"
                      />
                      <h4 className="mt-3 font-semibold">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {text}
                      </p>
                    </article>
                  ))}
                </div>

                <Link href="/#projects" className="btn btn-outline mt-7">
                  Explore My Projects
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
