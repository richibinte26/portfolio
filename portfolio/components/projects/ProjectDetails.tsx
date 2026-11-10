import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import EditableText from "@/components/ui/EditableText";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <section aria-labelledby={`${id}-h`} className="border-t border-line pt-8">
      <h2 id={`${id}-h`} className="font-display text-2xl font-semibold">{title}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-accent">
        {items.map((item) => (
        <li key={item} className="max-w-prose leading-relaxed">
          <EditableText text={item} />
        </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetails({ project }: { project: Project }) {
  const githubReady = Boolean(project.github);
  return (
    <article className="container-page py-12 sm:py-16">
      <Link href="/#projects" className="btn btn-outline">
        <ArrowLeft aria-hidden className="h-4 w-4" /> Back to Projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-3 text-lg text-accent">{project.category}</p>
      </header>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-accent-soft">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          priority
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-10">
          <section aria-labelledby="overview-h">
            <h2 id="overview-h" className="font-display text-2xl font-semibold">Overview</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed">
              {project.description.map((p, i) => (
                <p key={i} className="max-w-prose">
                  <EditableText text={p} />
                </p>
              ))}
            </div>
          </section>
          <ListBlock title="Key features" items={project.features} />
          <ListBlock title="Challenges faced" items={project.challenges} />
          <ListBlock title="Solutions and lessons learned" items={project.lessons} />
          <ListBlock title="Potential improvements" items={project.improvements} />
          <ListBlock title="Future development plans" items={project.future} />
        </div>

        <aside className="h-fit space-y-8 rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24">
          <div>
            <h2 className="font-display text-lg font-semibold">Main technology stack</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Links</h2>
            <div className="mt-3 flex flex-col gap-2">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live project <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
              ) : (
                <span className="btn btn-disabled">Live link not available yet</span>
              )}
              {githubReady ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FaGithub aria-hidden /> GitHub repository
                </a>
              ) : (
                <span className="btn btn-disabled">Repository link coming soon</span>
              )}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-14 border-t border-line pt-8">
        <Link href="/#projects" className="btn btn-primary">
          <ArrowLeft aria-hidden className="h-4 w-4" /> Back to Projects
        </Link>
      </div>
    </article>
  );
}
