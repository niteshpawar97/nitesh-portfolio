import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-slate-500">
          © {profile.name} — built with React, Vite &amp; TypeScript.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 transition-colors hover:text-slate-300"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 transition-colors hover:text-slate-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-slate-500 transition-colors hover:text-slate-300"
          >
            Email
          </a>
          <a
            href="#top"
            className="text-xs text-slate-500 transition-colors hover:text-slate-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
