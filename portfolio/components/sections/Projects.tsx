import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad border-t border-line">
      <div className="container-page">
       <SectionHeading
          id="projects-title"
          title="Featured Projects"
          intro="A selection of projects where I apply my skills, explore new technologies, and solve practical problems."
        />
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <ProjectCard project={p} priority={i === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
