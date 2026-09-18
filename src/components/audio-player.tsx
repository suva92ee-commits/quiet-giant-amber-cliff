import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Waveform } from "@/components/waveform";
import { usePlayerStore } from "@/lib/player-store";
import { cn, formatTime } from "@/lib/utils";

const peaksCache: Record<string, number[]> = {};

async function loadPeaks(): Promise<Record<string, number[]>> {
  if (Object.keys(peaksCache).length) return peaksCache;
  try {
    const res = await fetch("/audio/peaks.json");
    const data = (await res.json()) as Record<string, number[]>;
    Object.assign(peaksCache, data);
  } catch {
    /* waveform still renders a rest state */
  }
  return peaksCache;
}

export function AudioPlayer({
  id,
  src,
  title,
  compact = false,
  className,
}: {
  id: string;
  src: string;
  title: string;
  compact?: boolean;
  className?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [peaks, setPeaks] = useState<number[]>([]);
  const { activeId, playing, play, pause } = usePlayerStore();
  const isActive = activeId === id && playing;

  useEffect(() => {
    const file = src.split("/").pop() ?? "";
    void loadPeaks().then((all) => {
      if (all[file]) setPeaks(all[file]);
    });
  }, [src]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (isActive) {
      void el.play().catch(() => pause());
    } else {
      el.pause();
    }
  }, [isActive, pause]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => {
      if (el.duration) setProgress(el.currentTime / el.duration);
      setDuration(el.duration || 0);
    };
    const onEnd = () => {
      pause();
      setProgress(0);
    };
    const onMeta = () => setDuration(el.duration || 0);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnd);
    el.addEventListener("loadedmetadata", onMeta);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("loadedmetadata", onMeta);
    };
  }, [pause]);

  const seek = (ratio: number) => {
    const el = audioRef.current;
    if (!el || !el.duration) return;
    el.currentTime = ratio * el.duration;
    setProgress(ratio);
    play(id);
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <audio ref={audioRef} src={src} preload="metadata" playsInline />
      <button
        type="button"
        aria-label={isActive ? `Pause ${title}` : `Play ${title}`}
        onClick={() => (isActive ? pause() : play(id))}
        className="bg-fg text-accent-fg hover:opacity-90 flex size-11 shrink-0 items-center justify-center rounded-full transition-opacity duration-150"
      >
        {isActive ? (
          <Pause className="size-4 fill-current" />
        ) : (
          <Play className="size-4 fill-current ml-0.5" />
        )}
      </button>
      <div className="min-w-0 flex-1">
        {!compact && (
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <p className="truncate text-sm text-fg">{title}</p>
            <p className="font-mono text-[11px] tabular-nums text-subtle">
              {formatTime((audioRef.current?.currentTime ?? 0) || progress * duration)} / {formatTime(duration)}
            </p>
          </div>
        )}
        <Waveform peaks={peaks} progress={progress} onSeek={seek} className={compact ? "h-8" : "h-12"} />
        {compact && (
          <p className="mt-1 font-mono text-[11px] tabular-nums text-subtle">{formatTime(duration)}</p>
        )}
      </div>
    </div>
  );
}
