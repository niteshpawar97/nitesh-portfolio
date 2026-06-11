import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Résumé & code"
          title="Read the code, or read the one-pager"
          description="The work is the best reference. Browse the repositories, or download a résumé sized for a recruiter's inbox."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-xl border border-white/5 bg-ink-900/60 p-7 transition-colors hover:border-navy-600/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink-950 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
                    </svg>
                  </span>
                  <Arrow />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">GitHub</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Source for the projects above and the smaller experiments in
                  between. Where the engineering actually lives.
                </p>
              </div>
              <p className="mt-5 font-mono text-xs text-navy-300">
                {profile.github.replace("https://", "")}
              </p>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={profile.resumeUrl}
              className="group flex h-full flex-col justify-between rounded-xl border border-white/5 bg-ink-900/60 p-7 transition-colors hover:border-navy-600/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink-950 text-navy-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M7 3h7l5 5v13a0 0 0 0 1 0 0H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
                      <path d="M14 3v5h5M9 13h6M9 17h6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <Arrow />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">Résumé (PDF)</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  A one-page summary of experience, the project stack, and
                  contact details — formatted to skim in under a minute.
                </p>
              </div>
              <p className="mt-5 font-mono text-xs text-navy-300">
                Download Nitesh-Kadve-Resume.pdf
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy-200"
      aria-hidden
    >
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
