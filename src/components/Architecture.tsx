import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Node = {
  label: string;
  sub: string;
  tags?: string[];
};

function Node({ node, accent = false }: { node: Node; accent?: boolean }) {
  return (
    <div
      className={`rounded-lg border p-3.5 text-center ${
        accent
          ? "border-navy-500/60 bg-navy-800/40"
          : "border-white/10 bg-ink-900/80"
      }`}
    >
      <p className="text-sm font-medium text-white">{node.label}</p>
      <p className="mt-0.5 text-xs text-slate-400">{node.sub}</p>
      {node.tags && (
        <div className="mt-2 flex flex-wrap justify-center gap-1">
          {node.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-white/5 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[0.65rem] text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/** A labelled connector between layers — horizontal on desktop, vertical on mobile. */
function Link({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center" aria-hidden>
      {/* vertical (mobile) */}
      <div className="flex flex-col items-center py-1 lg:hidden">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-navy-300">
          {label}
        </span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <path d="M7 0v16" stroke="#3050a3" strokeWidth="1.5" />
          <path d="M2 12l5 6 5-6" stroke="#3050a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* horizontal (desktop) */}
      <div className="hidden flex-col items-center px-1 lg:flex">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-navy-300">
          {label}
        </span>
        <svg width="44" height="14" viewBox="0 0 44 14" fill="none" className="mt-1">
          <path d="M0 7h36" stroke="#3050a3" strokeWidth="1.5" />
          <path d="M32 2l6 5-6 5" stroke="#3050a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="border-t border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Architecture"
          title="How the systems fit together"
          description="The shape of two systems I've built. Diagrams, not screenshots — this is the part of the work that doesn't show up in a UI."
        />

        {/* PumpSathi end-to-end */}
        <Reveal>
          <figure className="mt-14 rounded-xl border border-white/5 bg-ink-900/40 p-6 sm:p-8">
            <figcaption className="mb-7">
              <h3 className="font-mono text-sm text-navy-200">
                PumpSathi — device to dashboard
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Commands flow down to the motor and are acknowledged back up;
                telemetry flows up continuously. The device is authoritative for
                safety, the server for visibility and control.
              </p>
            </figcaption>

            <div className="grid items-stretch gap-1.5 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
              <Node
                accent
                node={{
                  label: "Field device",
                  sub: "ESP8266 + SIM800L",
                  tags: ["Embedded C", "Dry-run", "Over-current", "OTA"],
                }}
              />
              <Link label="MQTT / GSM" />
              <Node
                node={{
                  label: "MQTT broker",
                  sub: "pub / sub transport",
                  tags: ["QoS", "Topics", "ACKs"],
                }}
              />
              <Link label="subscribe" />
              <Node
                accent
                node={{
                  label: "Backend",
                  sub: "Node.js services",
                  tags: ["Idempotency", "State", "Energy log"],
                }}
              />
              <Link label="WebSocket" />
              <Node
                node={{
                  label: "Dashboard",
                  sub: "React client",
                  tags: ["Live status", "Control"],
                }}
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Caption title="Down: commands">
                start / stop published to the device, retried safely and
                acknowledged so the UI shows the real motor state.
              </Caption>
              <Caption title="Up: telemetry">
                current, runtime, and energy readings streamed continuously and
                persisted for monitoring.
              </Caption>
              <Caption title="Local safety">
                dry-run and over-current cut-offs run on the device itself,
                independent of the network.
              </Caption>
            </div>
          </figure>
        </Reveal>

        {/* Backend systems pattern */}
        <Reveal delay={80}>
          <figure className="mt-6 rounded-xl border border-white/5 bg-ink-900/40 p-6 sm:p-8">
            <figcaption className="mb-7">
              <h3 className="font-mono text-sm text-navy-200">
                Business apps — backend shape
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">
                The pattern behind the ERP billing system and other business
                apps: a thin client, a service layer that owns the rules, and
                transactional writes so money and stock never drift.
              </p>
            </figcaption>

            <div className="grid items-stretch gap-1.5 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
              <Node
                node={{
                  label: "React client",
                  sub: "staff-facing UI",
                  tags: ["Forms", "Reports"],
                }}
              />
              <Link label="REST" />
              <Node
                accent
                node={{
                  label: "Express API",
                  sub: "auth + validation",
                  tags: ["AuthN", "Validation"],
                }}
              />
              <Link label="calls" />
              <Node
                accent
                node={{
                  label: "Service layer",
                  sub: "business rules",
                  tags: ["Invoicing", "Ledger", "Transactions"],
                }}
              />
              <Link label="SQL" />
              <Node
                node={{
                  label: "MySQL",
                  sub: "source of truth",
                  tags: ["Schemas", "ACID"],
                }}
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Caption title="One source of truth">
                totals and balances are derived from the database, never stored
                as hand-entered numbers.
              </Caption>
              <Caption title="Transactional writes">
                a sale deducts stock and records the invoice atomically — both
                happen or neither does.
              </Caption>
              <Caption title="Deploy &amp; run">
                containerized with Docker and run on AWS, behind Nginx, so the
                same build ships everywhere.
              </Caption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Caption({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-ink-950/40 p-4">
      <p className="text-xs font-medium text-navy-200">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-400">{children}</p>
    </div>
  );
}
