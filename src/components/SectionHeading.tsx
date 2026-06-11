import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-navy-300">
          <span className="text-navy-400">{index}</span>
          <span className="h-px w-8 bg-navy-700" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
