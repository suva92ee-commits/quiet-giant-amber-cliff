import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileDown } from "lucide-react";
import type { ReactNode } from "react";
import { AudioPlayer } from "@/components/audio-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  certs,
  education,
  experience,
  method,
  profile,
  recordingCraft,
  restoration,
  samples,
  toolkit,
} from "@/lib/portfolio";

export const Route = createFileRoute("/book")({ component: Book });

function Page({
  n,
  total,
  children,
}: {
  n: number;
  total: number;
  children: ReactNode;
}) {
  return (
    <article className="bg-paper text-ink mx-auto mb-8 w-full max-w-3xl rounded-2xl px-6 py-10 shadow-[var(--shadow-border)] sm:px-12 sm:py-14">
      <div className="mb-10 flex items-center justify-between font-mono text-xs tracking-wide text-ink/55 uppercase">
        <span>Suvadeep Mallik · Audio portfolio</span>
        <span>
          {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      {children}
    </article>
  );
}

function Book() {
  const total = 8;
  return (
    <div className="min-h-dvh bg-bg">
      <div className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur-md sm:px-6">
        <Link to="/" className="text-muted hover:text-fg inline-flex items-center gap-2 text-sm">
          <ArrowLeft className="size-4" />
          Studio
        </Link>
        <p className="hidden text-sm text-muted sm:block">Playable book · audio on the page</p>
        <Button variant="accent" size="sm" asChild>
          <a href="/Suvadeep_Mallik_Audio_Portfolio.zip" download>
            <FileDown className="size-3.5" />
            Save PDF pack
          </a>
        </Button>
      </div>

      <div className="px-3 py-10 sm:px-6 sm:py-14">
        <Page n={1} total={total}>
          <p className="font-mono text-xs tracking-wide text-ink/50 uppercase">{profile.location}</p>
          <h1 className="font-display mt-4 text-5xl leading-tight tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-ink/70">
            {profile.role}
            <br />
            {profile.subrole}
          </p>
          <p className="font-deva mt-8 text-2xl leading-snug">साफ़ आवाज़ और काम की आवाज़ एक चीज़ नहीं हैं।</p>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink/70">
            Ten years of live sound and post. Native Hindi with Eastern and Bangla-timed colour. This book is the
            listening portfolio: speech samples, annotated transcripts, restoration judgement, and the production
            chain (Ableton, iZotope RX, Waves neural voice tools) that sits next to AI speech work rather than beside it.
          </p>
          <div className="mt-10 rounded-2xl bg-ink/5 p-4">
            <p className="mb-3 text-xs tracking-wide text-ink/45 uppercase">01 · Broadcast Hindi</p>
            <AudioPlayer id="book-hi-broadcast" src="/audio/hi-broadcast.mp3" title="Broadcast Hindi" />
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs text-ink/45">Years</dt>
              <dd className="font-display text-2xl">{profile.years}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink/45">Events</dt>
              <dd className="font-display text-2xl">{profile.events}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink/45">Hindi</dt>
              <dd className="font-display text-2xl">Native</dd>
            </div>
            <div>
              <dt className="text-xs text-ink/45">English</dt>
              <dd className="font-display text-2xl">B2+</dd>
            </div>
          </dl>
        </Page>

        <Page n={2} total={total}>
          <h2 className="font-display text-3xl tracking-tight">Speech samples</h2>
          <p className="mt-2 text-sm text-ink/60">Play each take. Transcripts sit under the player.</p>
          <div className="mt-8 space-y-8">
            {samples.slice(0, 4).map((s) => (
              <div key={s.id} className="border-t border-ink/10 pt-6">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <span className="text-xs text-ink/45">{s.register}</span>
                </div>
                <AudioPlayer id={`book-${s.id}`} src={s.src} title={s.title} compact />
                {s.scriptHi && <p className="font-deva mt-3 text-lg leading-relaxed">{s.scriptHi}</p>}
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.decision}</p>
              </div>
            ))}
          </div>
        </Page>

        <Page n={3} total={total}>
          <h2 className="font-display text-3xl tracking-tight">Samples, continued</h2>
          <div className="mt-8 space-y-8">
            {samples.slice(4).map((s) => (
              <div key={s.id} className="border-t border-ink/10 pt-6">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <span className="text-xs text-ink/45">{s.register}</span>
                </div>
                <AudioPlayer id={`book-${s.id}`} src={s.src} title={s.title} compact />
                {s.scriptHi && <p className="font-deva mt-3 text-lg leading-relaxed">{s.scriptHi}</p>}
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink/65">{s.transcript}</p>
              </div>
            ))}
          </div>
        </Page>

        <Page n={4} total={total}>
          <h2 className="font-display text-3xl tracking-tight">Field take · restore or not</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Generator rumble under a live-Hindi talk track, then a modest denoise. I would not call the restored file
            gold — I would call it usable, with a note that isolation was applied.
          </p>
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl bg-ink/5 p-4">
              <p className="mb-2 text-sm">Untreated</p>
              <AudioPlayer id="book-raw" src={restoration.raw.src} title={restoration.raw.title} compact />
            </div>
            <div className="rounded-2xl bg-ink/5 p-4">
              <p className="mb-2 text-sm">After a conservative pass</p>
              <AudioPlayer id="book-rest" src={restoration.restored.src} title={restoration.restored.title} compact />
            </div>
          </div>
          <h3 className="font-display mt-10 text-2xl">{method.title}</h3>
          <ol className="mt-4 space-y-3">
            {method.steps.map((s) => (
              <li key={s.n} className="text-sm leading-relaxed">
                <span className="font-mono text-xs text-ink/45">{s.n} </span>
                <span className="text-ink">{s.title}. </span>
                <span className="text-ink/65">{s.text}</span>
              </li>
            ))}
          </ol>
        </Page>

        <Page n={5} total={total}>
          <h2 className="font-display text-3xl tracking-tight">iZotope · Waves · the AI in the rack</h2>
          {toolkit.slice(0, 2).map((t) => (
            <section key={t.maker} className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-xs tracking-wide text-ink/45 uppercase">{t.maker}</p>
              <h3 className="font-display mt-1 text-2xl">{t.title}</h3>
              <p className="mt-2 text-sm italic text-ink/60">{t.kicker}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.modules.map((m) => (
                  <Badge key={m} className="text-ink/55 shadow-none outline outline-ink/10">
                    {m}
                  </Badge>
                ))}
              </div>
              {t.body.slice(0, 2).map((p) => (
                <p key={p.slice(0, 20)} className="mt-3 text-sm leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </Page>

        <Page n={6} total={total}>
          <h2 className="font-display text-3xl tracking-tight">Ableton Live as a speech desk</h2>
          <p className="mt-2 text-sm italic text-ink/60">{toolkit[2].kicker}</p>
          {toolkit[2].body.map((p) => (
            <p key={p.slice(0, 20)} className="mt-3 text-sm leading-relaxed text-ink/70">
              {p}
            </p>
          ))}
          <h3 className="font-display mt-10 text-2xl">{recordingCraft.lead}</h3>
          {recordingCraft.paragraphs.slice(0, 2).map((p) => (
            <p key={p.slice(0, 20)} className="mt-3 text-sm leading-relaxed text-ink/70">
              {p}
            </p>
          ))}
        </Page>

        <Page n={7} total={total}>
          <h2 className="font-display text-3xl tracking-tight">Recording craft</h2>
          {recordingCraft.paragraphs.slice(2).map((p) => (
            <p key={p.slice(0, 20)} className="mt-3 text-sm leading-relaxed text-ink/70">
              {p}
            </p>
          ))}
          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {recordingCraft.specs.map((s) => (
              <div key={s.k} className="flex justify-between gap-4 py-2 text-sm">
                <dt className="text-ink/50">{s.k}</dt>
                <dd className="font-mono">{s.v}</dd>
              </div>
            ))}
          </dl>
        </Page>

        <Page n={8} total={total}>
          <h2 className="font-display text-3xl tracking-tight">{experience.role}</h2>
          <p className="mt-1 text-sm text-ink/50">{experience.dates}</p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-ink/70">
            {experience.bullets.map((b) => (
              <li key={b.slice(0, 24)}>{b}</li>
            ))}
          </ul>
          <h3 className="font-display mt-10 text-2xl">Credentials</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {certs.map((c) => (
              <li key={c.title}>
                <span className="text-ink">{c.title}</span>
                <span className="text-ink/50">
                  {" "}
                  · {c.org}, {c.when}
                </span>
              </li>
            ))}
            <li>
              {education.title} · {education.org}, {education.when}
            </li>
          </ul>
          <p className="mt-10 text-sm text-ink/70">
            {profile.email}
            <br />
            {profile.phone}
            <br />
            {profile.location}
          </p>
          <p className="mt-8 text-xs leading-relaxed text-ink/45">
            Audio in this book is also attached inside the downloadable PDF (Adobe Acrobat → paperclip). Browser PDF
            viewers rarely play embedded sound; this studio book is the playable original.
          </p>
        </Page>
      </div>
    </div>
  );
}
