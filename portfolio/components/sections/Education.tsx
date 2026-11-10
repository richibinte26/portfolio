
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import SectionHeading from "@/components/ui/SectionHeading";
import EditableText from "@/components/ui/EditableText";

export default function Education() {
  const { education } = personalInfo;

  const rows = [
    { label: "Department", value: personalInfo.department },
    { label: "Started", value: education.startYear },
    { label: "Expected graduation", value: education.graduationYear },
    { label: "Academic details", value: education.details },
  ];

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section-pad border-t border-line"
    >
      <div className="container-page">
        <SectionHeading
          id="education-title"
          title="Education"
          intro="My academic background and educational journey."
        />

        <ol className="relative ml-3 border-l-2 border-accent/30 pl-8">
          <li className="relative">
            <span
              aria-hidden
              className="absolute -left-[2.6rem] top-2 h-4 w-4 rounded-full border-4 border-bg bg-accent"
            />

            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <GraduationCap aria-hidden className="h-6 w-6" />
                    <span className="text-sm font-semibold">
                      Undergraduate Education
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {personalInfo.degree}
                  </h3>

                  <p className="mt-1 text-lg text-accent">
                    {personalInfo.university}
                  </p>
                </div>

                <span className="rounded-full border border-accent/30 bg-accent-soft px-4 py-2 text-sm font-medium">
                  Currently Studying
                </span>
              </div>

              <dl className="mt-7 grid gap-6 sm:grid-cols-2">
                {rows.map((r) => (
                  <div
                    key={r.label}
                    className={r.label === "Academic details" ? "sm:col-span-2" : ""}
                  >
                    <dt className="text-sm font-semibold text-muted">
                      {r.label}
                    </dt>
                    <dd className="mt-1 leading-relaxed">
                      <EditableText text={r.value} />
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-5 border-t border-line pt-5 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <CalendarDays aria-hidden className="h-4 w-4 text-accent" />
                  {education.startYear} – {education.graduationYear}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin aria-hidden className="h-4 w-4 text-accent" />
                  Mirpur-2 , Dhaka, Bangladesh
                </span>
              </div>
            </article>
          </li>
        </ol>
      </div>
    </section>
  );
}
