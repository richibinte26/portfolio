
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-pad border-t border-line bg-surface"
    >
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          title="Skills"
          intro="The technologies I use and keep learning, grouped by where they sit in a web application."
        />

        <div className="divide-y divide-line border-y border-line">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="grid gap-5 py-8 lg:grid-cols-[15rem_1fr]"
            >
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cat.skills.map(({ name, Icon, level }) => (
                  <li
                    key={name}
                    className="rounded-xl border border-line bg-bg p-4 transition-colors hover:border-accent"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Icon
                          aria-hidden
                          className="h-6 w-6 shrink-0 text-accent"
                        />
                        <span className="text-sm font-medium">{name}</span>
                      </div>
                      <span className="text-xs text-muted">
                        {level}%
                      </span>
                    </div>

                    <div
                      className="mt-3 h-2 overflow-hidden rounded-full bg-accent-soft"
                      role="progressbar"
                      aria-label={`${name} proficiency`}
                      aria-valuenow={level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-accent transition-all duration-700"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
