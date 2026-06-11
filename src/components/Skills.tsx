import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Tools I work with"
          description="Grouped by where they sit in the stack. The list is what I actually use to ship and run software, not a wishlist."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="flex h-full flex-col rounded-lg border border-white/5 bg-ink-900/60 p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-navy-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-slate-500">{group.note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
