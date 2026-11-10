import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const showGithub = Boolean(project.github);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent">
      <Link href={`/projects/${project.slug}`} aria-label={`${project.name}: view details`}>
        <div className="relative aspect-[16/10] bg-accent-soft">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{project.name}</h3>
        <p className="mt-1 text-sm text-accent">{project.category}</p>
        <p className="mt-3 flex-1 text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link href={`/projects/${project.slug}`} className="btn btn-primary">
            View Details
          </Link>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Live Demo <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
          )}
          {showGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label={`${project.name} on GitHub (opens in a new tab)`}
            >
              <FaGithub aria-hidden /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
