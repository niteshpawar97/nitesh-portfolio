import { timeline, education, experienceRole, certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Experience"
          title="Independent, full lifecycle"
        />

        {/* ATS-friendly role header — clear title + dates up top. */}
        <Reveal>
          <div className="mt-8 flex flex-col gap-2 rounded-xl border border-white/5 bg-ink-900/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-base font-semibold text-white">
                {experienceRole.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {experienceRole.summary}
              </p>
            </div>
            <span className="shrink-0 rounded-md border border-navy-700/50 bg-navy-900/40 px-3 py-1.5 font-mono text-xs text-navy-100">
              {experienceRole.period}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="relative">
            {/* spine */}
            <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-navy-600 via-navy-700/50 to-transparent" />
            <ol className="space-y-9">
              {timeline.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <li className="relative pl-9">
                    <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-navy-500 bg-ink-950">
                      <span className="h-[5px] w-[5px] rounded-full bg-navy-300" />
                    </span>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-navy-300">
                      {item.period}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={120}>
            <aside className="rounded-xl border border-white/5 bg-ink-900/50 p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
                Education
              </p>
              <h3 className="mt-3 text-base font-semibold text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {education.institution}
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-navy-200">
                <span>{education.year}</span>
                {education.cgpa && (
                  <>
                    <span className="text-navy-700">·</span>
                    <span>CGPA {education.cgpa}</span>
                  </>
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {education.note}
              </p>

              <div className="my-6 h-px bg-white/5" />

              <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
                Certifications
              </p>
              <ul className="mt-3 space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                  >
                    <span className="mt-[0.45rem] h-1 w-1 flex-none rounded-full bg-navy-400" />
                    {cert}
                  </li>
                ))}
              </ul>

              <div className="my-6 h-px bg-white/5" />

              <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
                What I'm looking for
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Backend roles where the hard problems are real — reliability, data
                correctness, real-time systems, and devices talking to servers.
                Happy to own a service end to end and support it in production.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
