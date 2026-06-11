import { profile, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Restrained background: faint grid + a single soft navy glow. */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-navy-700/20 blur-[120px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" aria-hidden />

      <div className="relative mx-auto max-w-content px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to backend developer roles &amp; freelance projects
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-white sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-1.5 font-mono text-sm text-navy-200">
            {profile.subtitle}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
            {profile.tagline}
          </p>

          {/* Core stack — the five things a recruiter scans for. */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-sm text-slate-200"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-slate-200"
            >
              View projects
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-md border border-navy-500 bg-navy-600/20 px-5 py-2.5 text-sm font-medium text-navy-100 transition-colors hover:bg-navy-600/40"
            >
              Download résumé
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-ink-900 px-4 py-3.5">
                <dt className="text-lg font-semibold text-white">{stat.value}</dt>
                <dd className="mt-0.5 text-xs leading-snug text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
