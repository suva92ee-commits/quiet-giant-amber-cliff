import { useMemo } from "react";
import { cn } from "@/lib/utils";

export function Waveform({
  peaks,
  progress,
  className,
  onSeek,
}: {
  peaks: number[];
  progress: number;
  className?: string;
  onSeek?: (ratio: number) => void;
}) {
  const bars = useMemo(() => (peaks.length ? peaks : Array.from({ length: 96 }, () => 0.12)), [peaks]);

  return (
    <div
      className={cn("flex h-12 w-full items-center gap-px", className)}
      role={onSeek ? "slider" : undefined}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      tabIndex={onSeek ? 0 : undefined}
      onClick={
        onSeek
          ? (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              onSeek(Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)));
            }
          : undefined
      }
    >
      {bars.map((v, i) => {
        const t = i / bars.length;
        const active = t <= progress;
        const h = 8 + v * 40;
        return (
          <span
            key={i}
            className="flex-1 rounded-full"
            style={{
              height: `${h}px`,
              background: active ? "var(--color-accent)" : "color-mix(in oklab, var(--color-fg) 18%, transparent)",
            }}
          />
        );
      })}
    </div>
  );
}
