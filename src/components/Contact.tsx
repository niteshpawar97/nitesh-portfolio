import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            index="07"
            eyebrow="Contact"
            title="Let's talk"
            description="If you're hiring for backend or full-stack work, or have a project that involves hardware talking to software, send a note. I read everything and reply."
          />

          <Reveal delay={80}>
            <div className="rounded-xl border border-white/5 bg-ink-900/60 p-6 sm:p-8">
              <ContactRow
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                label="LinkedIn"
                value={profile.linkedin.replace("https://www.", "")}
                href={profile.linkedin}
                external
              />
              <ContactRow
                label="GitHub"
                value={profile.github.replace("https://", "")}
                href={profile.github}
                external
              />
              <ContactRow
                label="Website"
                value={profile.website.replace("https://", "")}
                href={profile.website}
                external
              />
              <ContactRow
                label="Location"
                value={profile.location}
              />

              <a
                href={`mailto:${profile.email}`}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-slate-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M3 6l9 6 9-6M3 6h18v12H3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Send an email
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center justify-between border-b border-white/5 py-3.5 last:border-0">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
        {label}
      </span>
      <span className="text-sm text-slate-200">{value}</span>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block transition-colors hover:[&_span:last-child]:text-navy-200"
    >
      {content}
    </a>
  );
}
