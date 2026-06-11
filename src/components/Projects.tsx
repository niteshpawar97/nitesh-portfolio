import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Things I've built and shipped"
          description="Production projects, end to end. Open a case study for the problem, architecture, and the parts that took real engineering."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
