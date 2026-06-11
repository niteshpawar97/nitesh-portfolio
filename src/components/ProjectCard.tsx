import { useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/50 p-6 transition-colors hover:border-navy-600/40 sm:p-7">
      <p className="font-mono text-xs text-navy-300">{project.context}</p>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {project.tagline}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-navy-700/50 bg-navy-900/40 px-2.5 py-1 font-mono text-xs text-navy-100"
          >
            {tech}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-navy-200 transition-colors hover:text-white"
      >
        {open ? "Hide case study" : "Read case study"}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="mt-5 space-y-5 border-t border-white/5 pt-5 animate-fade-up">
          <Block label="Problem">{project.problem}</Block>
          <Block label="Architecture">{project.architecture}</Block>

          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
              Technical challenges
            </p>
            <div className="mt-3 space-y-3">
              {project.challenges.map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg border border-white/5 bg-ink-950/40 p-4"
                >
                  <p className="text-sm font-medium text-white">{c.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
              Key results
            </p>
            <ul className="mt-3 space-y-2">
              {project.achievements.map((a) => (
                <li
                  key={a}
                  className="flex gap-2.5 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-[0.45rem] h-1 w-1 flex-none rounded-full bg-navy-400" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{children}</p>
    </div>
  );
}
