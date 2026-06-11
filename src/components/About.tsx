import { about } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title="Background" />

        <Reveal>
          <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-slate-300">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
