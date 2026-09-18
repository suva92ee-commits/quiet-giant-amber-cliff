#!/usr/bin/env python3
"""Studio portfolio PDF with embedded (attached) playable audio files."""
from __future__ import annotations

from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path("/workspace")
AUDIO = ROOT / "public" / "audio"
OUT_TMP = ROOT / "public" / "_portfolio_body.pdf"
OUT = ROOT / "public" / "Suvadeep_Mallik_Audio_Portfolio.pdf"
ZIP_OUT = ROOT / "public" / "Suvadeep_Mallik_Audio_Portfolio.zip"

W, H = A4
MARGIN = 18 * mm
INK = (0.08, 0.08, 0.07)
MUTED = (0.32, 0.31, 0.28)
ACCENT = (0.30, 0.48, 0.45)
RULE = (0.82, 0.80, 0.74)
PAPER = (0.96, 0.94, 0.89)

pdfmetrics.registerFont(TTFont("Tiro", str(ROOT / "public/fonts/TiroDevanagariHindi-Regular.ttf")))
pdfmetrics.registerFont(TTFont("Serif", "/usr/share/fonts/truetype/freefont/FreeSerif.ttf"))
pdfmetrics.registerFont(TTFont("SerifB", "/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf"))
pdfmetrics.registerFont(TTFont("Sans", "/usr/share/fonts/truetype/freefont/FreeSans.ttf"))
pdfmetrics.registerFont(TTFont("SansB", "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf"))

AUDIO_FILES = [
    ("hi-broadcast.mp3", "Broadcast Hindi — formal studio read"),
    ("hi-conversational.mp3", "Conversational Hindi — humanised, fillers kept"),
    ("hi-live-field.mp3", "Field / live judgement — Eastern Hindi"),
    ("hi-codeswitch.mp3", "Hindi–English technical mix"),
    ("hi-prosody.mp3", "Emotion, breath, lower energy"),
    ("hi-question.mp3", "Interrogative contour"),
    ("hi-accent-east.mp3", "Eastern Hindi ear — dialect as feature"),
    ("hi-everyday-female.mp3", "Everyday Hindi, second speaker"),
    ("hi-dialogue-qc.mp3", "Two-engineer QC dialogue"),
    ("hi-session-log.mp3", "Session slate — numbers and entities"),
    ("en-studio.mp3", "English studio read (B2+)"),
    ("en-judgment.mp3", "Ambiguous-take decision, spoken"),
    ("hi-live-field-raw.mp3", "Field capture untreated (rumble)"),
    ("hi-live-field-restored.mp3", "After a conservative RX-style pass"),
]


def wrap(c: canvas.Canvas, text: str, font: str, size: float, max_w: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for w in words:
        trial = (cur + " " + w).strip()
        if c.stringWidth(trial, font, size) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines or [""]


class Doc:
    def __init__(self) -> None:
        self.c = canvas.Canvas(str(OUT_TMP), pagesize=A4)
        self.page = 0
        self.y = 0.0

    def new_page(self) -> None:
        if self.page:
            self.c.showPage()
        self.page += 1
        self.c.setFillColorRGB(*PAPER)
        self.c.rect(0, 0, W, H, fill=1, stroke=0)
        self.c.setFillColorRGB(*MUTED)
        self.c.setFont("Sans", 7)
        self.c.drawString(MARGIN, 12 * mm, "SUVADEEP MALLIK  ·  AUDIO PORTFOLIO  ·  HINDI SPEECH  ·  2016–2026")
        self.c.drawRightString(W - MARGIN, 12 * mm, f"{self.page:02d}")
        self.c.setStrokeColorRGB(*RULE)
        self.c.setLineWidth(0.4)
        self.c.line(MARGIN, 16 * mm, W - MARGIN, 16 * mm)
        self.y = H - 22 * mm

    def gap(self, n: float = 8) -> None:
        self.y -= n

    def need(self, h: float) -> None:
        if self.y - h < 24 * mm:
            self.new_page()

    def rule(self) -> None:
        self.need(10)
        self.c.setStrokeColorRGB(*RULE)
        self.c.setLineWidth(0.5)
        self.c.line(MARGIN, self.y, W - MARGIN, self.y)
        self.y -= 8

    def h1(self, text: str) -> None:
        self.need(28)
        self.c.setFillColorRGB(*INK)
        self.c.setFont("Serif", 26)
        for line in wrap(self.c, text, "Serif", 26, W - 2 * MARGIN):
            self.c.drawString(MARGIN, self.y, line)
            self.y -= 30

    def h2(self, text: str) -> None:
        self.need(20)
        self.c.setFillColorRGB(*INK)
        self.c.setFont("Serif", 16)
        self.c.drawString(MARGIN, self.y, text)
        self.y -= 18

    def kicker(self, text: str) -> None:
        self.need(12)
        self.c.setFillColorRGB(*ACCENT)
        self.c.setFont("SansB", 8)
        self.c.drawString(MARGIN, self.y, text.upper())
        self.y -= 14

    def body(self, text: str, font: str = "Sans", size: float = 9.5, leading: float = 13, color=MUTED) -> None:
        max_w = W - 2 * MARGIN
        lines = wrap(self.c, text, font, size, max_w)
        self.need(len(lines) * leading + 4)
        self.c.setFillColorRGB(*color)
        self.c.setFont(font, size)
        for line in lines:
            self.c.drawString(MARGIN, self.y, line)
            self.y -= leading
        self.y -= 4

    def hindi(self, text: str) -> None:
        max_w = W - 2 * MARGIN
        lines = wrap(self.c, text, "Tiro", 12, max_w)
        self.need(len(lines) * 18 + 4)
        self.c.setFillColorRGB(*INK)
        self.c.setFont("Tiro", 12)
        for line in lines:
            self.c.drawString(MARGIN, self.y, line)
            self.y -= 18
        self.y -= 4

    def bullet(self, text: str) -> None:
        max_w = W - 2 * MARGIN - 10
        lines = wrap(self.c, text, "Sans", 9, max_w)
        self.need(len(lines) * 12 + 3)
        self.c.setFillColorRGB(*ACCENT)
        self.c.circle(MARGIN + 2, self.y + 2, 1.4, fill=1, stroke=0)
        self.c.setFillColorRGB(*MUTED)
        self.c.setFont("Sans", 9)
        x = MARGIN + 10
        for i, line in enumerate(lines):
            self.c.drawString(x, self.y, line)
            self.y -= 12
        self.y -= 2


def build() -> None:
    d = Doc()
    d.new_page()
    d.kicker("Thakurnagar, West Bengal  ·  +91 8240704625  ·  suva92.ee@gmail.com")
    d.h1("Suvadeep Mallik")
    d.body("Audio Production Specialist  ·  Speech & Data Quality Analyst", "Serif", 12, 16, INK)
    d.hindi("साफ़ आवाज़ और काम की आवाज़ एक चीज़ नहीं हैं।")
    d.body(
        "Detail-oriented audio engineer with 10+ years of live production and post, "
        "1,000+ events, native Hindi and Bengali, proficient English. This PDF is the "
        "written portfolio. Playable Hindi and English speech samples are embedded as "
        "file attachments — open the paperclip in Adobe Acrobat to listen. Browser PDF "
        "viewers usually cannot play embedded sound; the companion studio book on the "
        "web portfolio is the inline player."
    )
    d.body(
        "The samples are native-Hindi scripts across broadcast, conversation, field talk, "
        "questions, Eastern accent notes, Hindi–English mix, and a two-engineer QC dialogue. "
        "Each take is paired with a verbatim transcript and a keep / restore / reject call — "
        "the same independent judgement used on noisy live stages."
    )
    d.rule()
    d.h2("Attached audio  (Acrobat → attachments)")
    for name, desc in AUDIO_FILES:
        d.bullet(f"{name}  —  {desc}")

    d.new_page()
    d.kicker("01  ·  Fit for multilingual speech work")
    d.h2("What the ear is for")
    for need, have in [
        ("Native Hindi, dialect range",
         "Native Hindi and Bengali, based in West Bengal. Everyday Eastern Hindi, Bangla-timed rhythm, and Hindi–English mix. Samples are tagged for that, not flattened toward Delhi broadcast."),
        ("English B2, clear delivery",
         "Proficient English, studio reads in this pack, ten years of client-facing technical talk."),
        ("Auditory nuance",
         "Live critical listening as the job: intonation, sibilance, plosives, room tone, whether a take is actually usable for training."),
        ("Transcription + disfluency / prosody",
         "Verbatim method: fillers kept (matlab, na, vo), questions tagged, affect labelled. Reduplication is intensification, not stutter."),
        ("Independent judgement on messy audio",
         "1,000+ events with no safety net. Gold / usable-with-noise / restore / reject is how live sound already works."),
        ("Voice, production, AI-adjacent tools",
         "Ableton production and post; iZotope RX Dialogue Isolate and Waves Clarity Vx are themselves speech-separation networks. Using them is weekly practice in the artefacts a speech-data role has to refuse."),
    ]:
        d.body(need, "SansB", 9.5, 13, INK)
        d.body(have)

    d.new_page()
    d.kicker("02  ·  Annotated Hindi")
    d.h2("Broadcast (gold)")
    d.hindi("नमस्कार। मेरा नाम सुवदीप मल्लिक है, और मैं पश्चिम बंगाल से एक ऑडियो प्रोडक्शन स्पेशलिस्ट हूँ। पिछले दस वर्षों में मैंने एक हज़ार से ज़्यादा लाइव इवेंट्स पर साउंड क्वालिटी का काम किया है।")
    d.body("Decision: keep as gold. Do not denoise. Do not enhance. File: hi-broadcast.mp3")
    d.h2("Conversational (humanised)")
    d.hindi("अरे वो जो कल वाली टेक थी ना... मतलब माइक थोड़ा ज़्यादा पास था, तो 'प' और 'ब' पे पॉप आ गया। मैंने गेन थोड़ा नीचे किया, पॉप फ़िल्टर ठीक से सेट किया, और फिर से लिया।")
    d.body("Disfluency tags: ना..., मतलब. Code-mix: take, mic, gain, pop filter. Decision: keep fillers. File: hi-conversational.mp3")
    d.h2("Field / Eastern Hindi")
    d.hindi("देखो, लाइव साउंड में रूम का अकॉस्टिक सबसे बड़ा फ़ैसला होता है। पश्चिम बंगाल में बहुत से आउटडोर प्रोग्राम होते हैं — हवा, भीड़ का शोर, जनरेटर... सब माइक में आता है। तब किताब से नहीं, कान से फ़ैसला करना पड़ता है।")
    d.body("Accent is a feature: softer sibilants, open /a/, Bangla-timed rhythm. Decision: keep accent, do not standardise. File: hi-live-field.mp3")
    d.h2("Code-switch")
    d.body(
        "Gain staging bahut zaroori hai. Peak agar minus six dBFS ke upar chala gaya to clipping ho jayega. "
        "I always leave headroom, khas kar live mein… Forty eight kilohertz, twenty four bit. "
        "Transcribe mixed; do not translate the English islands. File: hi-codeswitch.mp3",
        color=INK,
    )
    d.h2("Everyday Hindi (other speaker)")
    d.hindi("सुनो, बाज़ार से धनिया और हरी मिर्च लेते आना। वो वाली वाली नहीं, ताज़ी वाली। और हाँ, दही खट्टा नहीं होना चाहिए, समझे?")
    d.body("Reduplication वाली वाली is intensification. Decision: keep. File: hi-everyday-female.mp3")

    d.new_page()
    d.kicker("03  ·  Listening method")
    d.h2("How I decide when the file is ambiguous")
    d.body(
        "This is closer to a mastering listen than a typing test. Another annotator should be able to "
        "agree with the one-sentence note. If I cannot write that sentence, the label is taste, not a decision."
    )
    steps = [
        ("01 Technical first", "Clip, drop-outs, 50 Hz mains, inverted phase. Broken audio is not a linguistics problem."),
        ("02 Verbatim", "What was said, including matlab, vo, na, false starts, code-switch, numbers as spoken. Do not help the speaker."),
        ("03 Accent & dialect", "Eastern Hindi / Bangla-timed rhythm is a label, not an error. Identify; do not rewrite toward broadcast."),
        ("04 Prosody", "Question rise vs declarative fall, stress, rate, affect, breath, pause. First-class for TTS."),
        ("05 Quality class", "Gold / usable-with-noise / restore / reject. A Clarity-destroyed file is not gold because it 'sounds clean'."),
        ("06 Defensible note", "One sentence another listener could stand on. Same standard as a live mix call with no second take."),
    ]
    for t, b in steps:
        d.body(t, "SansB", 9.5, 13, INK)
        d.body(b)

    d.h2("Restoration pair")
    d.body(
        "hi-live-field-raw.mp3 adds generator rumble and band-limiting to the field talk. "
        "hi-live-field-restored.mp3 is a modest high-pass + FFT denoise + light loudness pass — not Dialogue Isolate at 100% wet. "
        "I would label the restored file usable, with a processing tag, not gold."
    )

    d.new_page()
    d.kicker("04  ·  Tools that are already speech models")
    d.h2("iZotope RX, Nectar, Neutron, Ozone")
    d.body(
        "RX is spectrogram editing for dialogue, not a single denoise knob. Modules used on speech: "
        "De-hum (50 Hz India mains), De-click / Mouth De-click, De-plosive, Voice De-noise, De-reverb, "
        "De-ess, Breath Control, Spectral Repair, Dialogue Isolate for non-stationary noise (crowd, traffic, weather), "
        "and Spectral Recovery for phone/Zoom band-limits."
    )
    d.body(
        "Dialogue Isolate is a neural net that splits voice, noise, and reverb. It fails in familiar ways: "
        "thinned consonants, musical noise, leftover tails, overlapping talkers, whispers. I use it as a first pass. "
        "The last pass is whether the person is still in the file. Over-processed 'clean' speech is a silent poison "
        "in a training set — breath, sibilant identity, and dialect cues go first. Knowing RX means knowing when not to run it."
    )
    d.h2("Waves Clarity Vx, Tune, Vocal Bender")
    d.body(
        "Clarity Vx does not learn a noise profile per take; Waves Neural Networks already saw a very large "
        "voice/non-voice set, which is why it runs in real time. Broad 1 keeps more than one voice; Broad 2 is more "
        "aggressive; ECO is the low-CPU dialogue net. DeReverb Pro is a separate net with dialogue vs sung-vocal models. "
        "Clarix LB is the live-broadcast sibling."
    )
    d.body(
        "Waves Tune and Vocal Bender change pitch and formant — useful in music, a red flag on speech data. "
        "Formant shift changes who the speaker is. Pitch quantise destroys the rise a Hindi question needs. "
        "Using Clarity every week is practice in the same questions this role asks: residual noise vs dialect vs artefact."
    )

    d.new_page()
    d.kicker("05  ·  Ableton Live  ·  ten years of capture")
    d.h2("The DAW as a speech desk")
    d.body(
        "Ableton Live was the production, edit, and post desk: Arrangement View for linear dialogue, take-lane "
        "comping, fades on every join. Capture 48 kHz / 24-bit. Interface gain — never the track fader — so peaks "
        "sit around −12 to −6 dBFS. Buffer 256–512. Pop filter, 15–20 cm, 15° off-axis. Warp is for music vocals, "
        "not for 'fixing' conversational Hindi rhythm. Export: WAV 24-bit, normalize off, dither off unless going to 16-bit, mono for one speaker."
    )
    d.body(
        "Post path: record in Live → round-trip problem files through RX → Waves Clarity only when noise is "
        "non-stationary and time is short → back to Live for assembly. Speech QC is thousands of short files; "
        "the DAW has to mark, split, rename, and bounce without ceremony. That operational taste is 'what good audio data is'."
    )
    d.h2("Recording is a chain you cannot fully repair later")
    d.body(
        "A thousand live events in West Bengal rooms that were never treated: wind, generators, crowd, bad mains, "
        "talent off-mic. Cardioid dynamic on a loud stage; condenser only when the room deserves it. Null aimed at "
        "the worst noise. Get closer and lower the gain before promising a plugin will save the take. Hitting 0 dBFS "
        "is not 'using the bits'; it destroys the transient that makes a stop consonant. There is no second recording "
        "of a vow or a keynote — the same discipline as refusing to pretend a ruined file is gold speech."
    )
    for k, v in [
        ("Sample rate", "48 kHz speech / 44.1 kHz music"),
        ("Bit depth", "24-bit capture"),
        ("Peaks", "−12 to −6 dBFS"),
        ("Working loudness", "−16 LUFS integrated (speech)"),
        ("True peak", "≤ −1.5 dBTP"),
        ("Mic distance", "15–20 cm, off-axis cardioid"),
        ("Export", "Mono WAV, normalize off"),
    ]:
        d.body(f"{k}:  {v}", "Sans", 9, 12, INK)

    d.new_page()
    d.kicker("06  ·  Record")
    d.h2("Independent business owner — Audio engineer & live event management")
    d.body("2016 – 2026", "SansB", 9, 12, INK)
    for b in [
        "Professional audio production and sound quality control across 1,000+ live events over 10+ years — critical listening for clear, natural, consistent output in rooms never designed for recording.",
        "Independent judgement on ambiguous, time-sensitive audio: wind, generators, bad mains, talent off-axis. Consistent, defensible calls with no second take.",
        "Clear technical feedback to clients, vendors, and crews — the same skill as writing an audio QC note another human can act on.",
        "Budget, vendor, and schedule analysis — structured data habits beside the ear.",
    ]:
        d.bullet(b)
    d.h2("Certifications")
    for line in [
        "Claude with Google Cloud’s Vertex AI — Anthropic Academy, Sep 2026. Prompting, multi-turn workflows, model evaluation.",
        "Tata Group (Tata iQ) — GenAI-Powered Data Analytics Job Simulation, Feb 2026.",
        "Deloitte Australia — Data Analytics Job Simulation, Mar 2026.",
        "Jio Institute — AI Foundation Course (AI Classroom, JioPC), Aug 2026.",
        "B.Tech, Electrical Engineering — Narula Institute of Technology, MAKAUT, West Bengal, 2012–2016.",
    ]:
        d.bullet(line)
    d.h2("Languages")
    d.body("Hindi (native, including regional variation)  ·  Bengali (native)  ·  English (proficient, B2+ studio delivery).")
    d.gap(10)
    d.rule()
    d.body("Suvadeep Mallik  ·  suva92.ee@gmail.com  ·  +91 8240704625  ·  Thakurnagar, West Bengal")
    d.body("Open attachments in Adobe Acrobat to play the Hindi and English samples. The web studio book plays them inline.")

    d.c.save()

    writer = PdfWriter()
    reader = PdfReader(str(OUT_TMP))
    for page in reader.pages:
        writer.add_page(page)
    writer.add_metadata({
        "/Title": "Suvadeep Mallik — Audio Portfolio",
        "/Author": "Suvadeep Mallik",
        "/Subject": "Hindi speech samples, annotated transcripts, recording craft, iZotope / Waves / Ableton",
    })
    for name, _desc in AUDIO_FILES:
        path = AUDIO / name
        writer.add_attachment(name, path.read_bytes())

    with OUT.open("wb") as f:
        writer.write(f)
    OUT_TMP.unlink(missing_ok=True)
    print("PDF", OUT, "pages", len(reader.pages), "bytes", OUT.stat().st_size)

    import zipfile
    with zipfile.ZipFile(ZIP_OUT, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(OUT, "Suvadeep_Mallik_Audio_Portfolio.pdf")
        for name, desc in AUDIO_FILES:
            z.write(AUDIO / name, f"audio/{name}")
        z.writestr(
            "README.txt",
            "Suvadeep Mallik — Audio Portfolio\n\n"
            "Play the MP3 files in /audio, or open the PDF in Adobe Acrobat and use the paperclip/attachments panel.\n"
            "Browser PDF viewers usually cannot play embedded audio.\n\n"
            + "\n".join(f"  {n}  — {d}" for n, d in AUDIO_FILES)
            + "\n",
        )
    print("ZIP", ZIP_OUT, ZIP_OUT.stat().st_size)


if __name__ == "__main__":
    build()
