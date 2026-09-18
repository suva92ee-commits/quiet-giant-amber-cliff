import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { AudioPlayer } from "@/components/audio-player";
import { SampleCard } from "@/components/sample-card";
import { SiteNav } from "@/components/site-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  certs,
  education,
  experience,
  jdFit,
  method,
  profile,
  recordingCraft,
  restoration,
  samples,
  toolkit,
} from "@/lib/portfolio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const intro = samples.find((s) => s.id === "hi-broadcast")!;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteNav />

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
          <p className="mb-6 font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            {profile.location} · 2016–2026
          </p>
          <h1 className="font-display max-w-4xl text-[2.6rem] leading-[1.05] font-medium tracking-[-0.03em] text-fg sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
            {profile.role}. {profile.subrole}. Native Hindi, a decade of live sound, and an ear for whether speech is actually useful — not just clean.
          </p>
          <p className="font-deva mt-6 max-w-2xl text-xl leading-snug text-fg/90">
            साफ़ आवाज़ और काम की आवाज़ एक चीज़ नहीं हैं।
          </p>

          <div className="mt-10 max-w-2xl rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
            <p className="mb-3 text-[11px] tracking-wide text-subtle uppercase">Open with Hindi · broadcast register</p>
            <AudioPlayer id={intro.id} src={intro.src} title={intro.title} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="accent" asChild>
              <a href="#samples">
                Listen to samples
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/book">Open studio book</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/Suvadeep_Mallik_Audio_Portfolio.zip" download>
                <FileDown className="size-4" />
                Download PDF pack
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            {[
              { k: "Years on the desk", v: profile.years },
              { k: "Live events", v: profile.events },
              { k: "Hindi / Bengali", v: "Native" },
              { k: "English", v: "B2+" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-sm text-subtle">{s.k}</dt>
                <dd className="font-display mt-1 text-2xl text-fg">{s.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl tracking-tight">Why this ear for this job</h2>
              <p className="mt-3 text-muted">
                Mapped to the role: multilingual speech, noisy takes, defensible labels. No linguistics degree — ten years of equivalent practice, and the tools that are themselves speech models.
              </p>
            </div>
            <ul className="space-y-5 lg:col-span-8">
              {jdFit.map((row) => (
                <li key={row.need} className="grid gap-1 border-b border-line pb-5 sm:grid-cols-12 sm:gap-4">
                  <p className="text-sm text-accent sm:col-span-4">{row.need}</p>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-8">{row.have}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="samples" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">01 · Voice & transcripts</p>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Hindi samples, humanised</h2>
              <p className="mt-3 text-muted">
                Native Hindi scripts across broadcast, conversation, field talk, questions, Eastern accent notes, and Hindi–English mix. Each file has a verbatim transcript, prosody/disfluency tags, and a keep / restore / reject decision. Play in the browser; the PDF pack carries the same audio as attachments.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {samples.map((s) => (
                <SampleCard key={s.id} sample={s} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">02 · Restoration judgement</p>
            <h2 className="font-display max-w-2xl text-3xl tracking-tight sm:text-4xl">
              Same take, before and after a modest RX-style pass
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Live-field Hindi with generator rumble mixed in, then a conservative denoise — not Dialogue Isolate at full wet. The point is the leftover decision: rumble gone, voice still a person. If the restored file sounded like a vocoder, I would reject it for gold speech.
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {[restoration.raw, restoration.restored].map((t) => (
                <div key={t.id} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg">{t.title}</h3>
                    <Badge>{t.id.includes("raw") ? "Raw" : "Restored"}</Badge>
                  </div>
                  <AudioPlayer id={t.id} src={t.src} title={t.title} />
                  <ul className="mt-4 space-y-2">
                    {t.notes.map((n) => (
                      <li key={n} className="text-sm text-muted">
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">03 · Listening method</p>
            <h2 className="font-display max-w-2xl text-3xl tracking-tight">{method.title}</h2>
            <p className="mt-3 max-w-2xl text-muted">{method.intro}</p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {method.steps.map((s) => (
                <li key={s.n} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
                  <p className="font-mono text-xs text-accent">{s.n}</p>
                  <h3 className="font-display mt-2 text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tools" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">04 · Production chain</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">iZotope, Waves, Ableton — and why they are AI work</h2>
            <p className="mt-3 max-w-2xl text-muted">
              These are not logos. Dialogue Isolate and Clarity Vx are speech-separation networks. Using them on real shows is weekly practice in the exact failure modes a speech-data role has to catch.
            </p>
            <div className="mt-12 space-y-16">
              {toolkit.map((t) => (
                <article key={t.maker} className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="text-sm text-accent">{t.maker}</p>
                    <h3 className="font-display mt-1 text-2xl">{t.title}</h3>
                    <p className="mt-3 text-sm text-muted italic">{t.kicker}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {t.modules.map((m) => (
                        <Badge key={m}>{m}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 lg:col-span-8">
                    {t.body.map((p) => (
                      <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="craft" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">05 · Recording, ten years</p>
            <h2 className="font-display max-w-3xl text-3xl tracking-tight sm:text-4xl">{recordingCraft.lead}</h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-7">
                {recordingCraft.paragraphs.map((p) => (
                  <p key={p.slice(0, 28)} className="text-[15px] leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
              <dl className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] lg:col-span-5">
                {recordingCraft.specs.map((s) => (
                  <div key={s.k} className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0">
                    <dt className="text-sm text-subtle">{s.k}</dt>
                    <dd className="font-mono text-right text-sm text-fg">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">06 · Record</p>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl tracking-tight">{experience.role}</h2>
                <p className="mt-1 text-sm text-subtle">{experience.dates}</p>
                <ul className="mt-6 space-y-4">
                  {experience.bullets.map((b) => (
                    <li key={b.slice(0, 32)} className="text-[15px] leading-relaxed text-muted">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-display text-xl">Credentials</h3>
                <ul className="mt-5 space-y-5">
                  {certs.map((c) => (
                    <li key={c.title}>
                      <p className="text-sm text-fg">{c.title}</p>
                      <p className="text-sm text-subtle">
                        {c.org} · {c.when}
                      </p>
                      <p className="mt-1 text-sm text-muted">{c.note}</p>
                    </li>
                  ))}
                  <li>
                    <p className="text-sm text-fg">{education.title}</p>
                    <p className="text-sm text-subtle">
                      {education.org} · {education.when}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">
              {profile.location}
              <br />
              <a className="hover:text-fg" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              {" · "}
              <a className="hover:text-fg" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <a href={`mailto:${profile.email}`}>
                Email
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button variant="accent" asChild>
              <a href="/Suvadeep_Mallik_Audio_Portfolio.zip" download>
                <FileDown className="size-4" />
                Portfolio PDF
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
