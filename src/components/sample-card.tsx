import { useState } from "react";
import { AudioPlayer } from "@/components/audio-player";
import { Badge } from "@/components/ui/badge";
import type { Sample } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SampleCard({ sample }: { sample: Sample }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-medium tracking-tight text-fg">{sample.title}</h3>
          <p className="text-sm text-muted">{sample.register}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {sample.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>

      <AudioPlayer id={sample.id} src={sample.src} title={sample.title} />

      {sample.scriptHi && (
        <p className="font-deva mt-4 text-[1.05rem] leading-relaxed text-fg">{sample.scriptHi}</p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted">{sample.scriptEn}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 text-sm text-accent hover:text-fg"
      >
        {open ? "Hide annotation" : "Annotated transcript"}
      </button>

      <div className={cn("grid transition-[grid-template-rows] duration-200", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="mt-4 rounded-xl bg-elevated p-4">
            <p className="mb-1 text-[11px] tracking-wide text-subtle uppercase">Verbatim</p>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-fg">{sample.transcript}</p>
            <ul className="mt-4 space-y-2">
              {sample.annotations.map((a) => (
                <li key={a.label} className="text-sm">
                  <span className="text-accent">{a.label}.</span>{" "}
                  <span className="text-muted">{a.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-fg">
              <span className="text-subtle">Decision. </span>
              {sample.decision}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
