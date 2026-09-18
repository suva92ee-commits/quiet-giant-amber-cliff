export type SampleTag =
  | "Hindi"
  | "English"
  | "Code-switch"
  | "Dialogue"
  | "Field"
  | "Prosody"
  | "Accent"
  | "Broadcast";

export type Annotation = {
  label: string;
  note: string;
};

export type Sample = {
  id: string;
  src: string;
  title: string;
  register: string;
  duration: number;
  lang: "hi" | "en" | "mixed";
  tags: SampleTag[];
  scriptHi?: string;
  scriptEn: string;
  transcript: string;
  annotations: Annotation[];
  decision: string;
};

export const profile = {
  name: "Suvadeep Mallik",
  short: "SM",
  role: "Audio Production Specialist",
  subrole: "Speech & Data Quality Analyst",
  location: "Thakurnagar, West Bengal, India",
  phone: "+91 8240704625",
  email: "suva92.ee@gmail.com",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/",
  years: "10+",
  events: "1,000+",
  languages: [
    { name: "Hindi", level: "Native — accents, dialects, regional variation" },
    { name: "English", level: "Proficient (B2+) — clear studio delivery" },
    { name: "Bengali", level: "Native — informs Eastern Hindi rhythm" },
  ],
};

export const samples: Sample[] = [
  {
    id: "hi-broadcast",
    src: "/audio/hi-broadcast.mp3",
    title: "Broadcast Hindi",
    register: "Formal news / studio read",
    duration: 23.74,
    lang: "hi",
    tags: ["Hindi", "Broadcast"],
    scriptHi:
      "नमस्कार। मेरा नाम सुवदीप मल्लिक है, और मैं पश्चिम बंगाल से एक ऑडियो प्रोडक्शन स्पेशलिस्ट हूँ। पिछले दस वर्षों में मैंने एक हज़ार से ज़्यादा लाइव इवेंट्स पर साउंड क्वालिटी का काम किया है। मेरा कान आवाज़ के छोटे-छोटे फ़र्कों को पकड़ता है — उच्चारण, सुर, लय, और रिकॉर्डिंग की साफ़-सफ़ाई। यही कौशल अब मैं एआई ट्रेनिंग डेटा की क्वालिटी पर लगाना चाहता हूँ।",
    scriptEn:
      "A measured broadcast register. Even pace, closed /a/ toward standard Hindustani, full retroflexes, no filled pauses. This is the gold-speech baseline I compare other takes against.",
    transcript:
      "Namaskār. Merā nām Suvadeep Mallik hai, aur main Paścim Bangāl se ek audio production specialist hū̃. Pichle das varṣõ mẽ maine ek hazār se zyādā live events par sound quality kā kām kiyā hai. Merā kān āvāz ke chote-chote farkõ ko pakaṛtā hai — uccāraṇ, sur, lay, aur recording kī sāf-safāī. Yahī kauśal ab main AI training data kī quality par lagānā cāhtā hū̃.",
    annotations: [
      { label: "Register", note: "Broadcast. Falling declaratives. No disfluency." },
      { label: "Phonetics", note: "Clear retroflex ṭ/ḍ/ṛ. Aspirated kh/th retained." },
      { label: "Prosody", note: "Phrase-final falls. Stress on content words: दस, हज़ार, कान." },
      { label: "Quality", note: "Studio dry. Use as gold / reference, not as 'noisy speech' data." },
    ],
    decision: "Keep as gold. Do not denoise. Do not 'enhance'. This is already useful.",
  },
  {
    id: "hi-conversational",
    src: "/audio/hi-conversational.mp3",
    title: "Conversational Hindi",
    register: "Humanised studio talk",
    duration: 20.04,
    lang: "hi",
    tags: ["Hindi"],
    scriptHi:
      "अरे वो जो कल वाली टेक थी ना... मतलब माइक थोड़ा ज़्यादा पास था, तो 'प' और 'ब' पे पॉप आ गया। मैंने गेन थोड़ा नीचे किया, पॉप फ़िल्टर ठीक से सेट किया, और फिर से लिया। अब वो टेक बिल्कुल क्लियर है, नेचुरल भी लग रही है। कभी-कभी एक छोटी सी जगह बदलने से पूरा फ़र्क पड़ जाता है।",
    scriptEn:
      "A humanised read: discourse particles (अरे, ना, मतलब), a trailing pause, then a repair. This is the speech models fail on if they only see news-reader Hindi.",
    transcript:
      "Are vo jo kal vālī take thī nā... matlab mic thoṛā zyādā pās thā, to 'pa' aur 'ba' pe pop ā gayā. Maine gain thoṛā nīce kiyā, pop filter ṭhīk se set kiyā, aur phir se liyā. Ab vo take bilkul clear hai, natural bhī lag rahī hai. Kabhī-kabhī ek choṭī sī jagah badalne se pūrā fark paṛ jātā hai.",
    annotations: [
      { label: "Disfluency", note: "Filled pause ना... and discourse marker मतलब. Keep, do not strip." },
      { label: "Code-mix", note: "take, mic, gain, pop filter, set, clear, natural — English tech nouns in Hindi syntax." },
      { label: "Plosives", note: "The script names the problem (प/ब pop) that close-mic cardioid recording creates." },
      { label: "Use", note: "Good for conversational ASR and for teaching a model that engineers talk like this." },
    ],
    decision: "Keep with disfluency tags. Do not 'clean' the fillers. They are the data.",
  },
  {
    id: "hi-live-field",
    src: "/audio/hi-live-field.mp3",
    title: "Field / live judgement",
    register: "Eastern Hindi, live-sound talk",
    duration: 21.96,
    lang: "hi",
    tags: ["Hindi", "Field", "Accent"],
    scriptHi:
      "देखो, लाइव साउंड में रूम का अकॉस्टिक सबसे बड़ा फ़ैसला होता है। पश्चिम बंगाल में बहुत से आउटडोर प्रोग्राम होते हैं — हवा, भीड़ का शोर, जनरेटर... सब माइक में आता है। तब किताब से नहीं, कान से फ़ैसला करना पड़ता है। क्या रखना है, क्या काटना है, और कब कहना है कि ये टेक काम की नहीं है, दोबारा रिकॉर्ड करो।",
    scriptEn:
      "The working register of a live engineer in Bengal. Open vowels, Bangla-leaning rhythm, lists of real noise sources. This is how independent judgement sounds in the field.",
    transcript:
      "Dekho, live sound mẽ room kā acoustic sabse baṛā faislā hotā hai. Paścim Bangāl mẽ bahut se outdoor program hote haĩ — havā, bhīṛ kā śor, generator... sab mic mẽ ātā hai. Tab kitāb se nahī̃, kān se faislā karnā paṛtā hai. Kyā rakhnā hai, kyā kāṭnā hai, aur kab kahnā hai ki ye take kām kī nahī̃ hai, dobārā record karo.",
    annotations: [
      { label: "Accent", note: "Eastern Hindi. Softer sibilants, more open /a/, Bangla-timed rhythm. Not 'wrong' Hindi." },
      { label: "Named noise", note: "Wind, crowd, generator — the exact interferers Dialogue Isolate is trained on." },
      { label: "Judgement", note: "Explicit reject class: ये टेक काम की नहीं है. Models need this decision, not only cleanup." },
    ],
    decision: "Keep accent. Tag as Eastern Hindi. Do not 'standardise' pronunciation.",
  },
  {
    id: "hi-codeswitch",
    src: "/audio/hi-codeswitch.mp3",
    title: "Hindi–English mix",
    register: "Technical code-switch",
    duration: 20.93,
    lang: "mixed",
    tags: ["Hindi", "English", "Code-switch"],
    scriptEn:
      "Intra-sentential mixing: Hindi grammar with English measurement language (dBFS, clipping, headroom, 48 kHz / 24-bit). Common in Indian studios. ASR that cannot hold both languages in one utterance will hallucinate numbers.",
    transcript:
      "Gain staging bahut zaroori hai. Peak agar minus six dBFS ke upar chala gaya to clipping ho jayega. I always leave headroom, khas kar live mein, kyunki surprise peaks aate rehte hain. Forty eight kilohertz, twenty four bit — yahi mera default capture hai. Post mein bahut kuch theek kiya ja sakta hai. Clipping nahi.",
    annotations: [
      { label: "Switch points", note: "Full English clause 'I always leave headroom' inside Hindi discourse." },
      { label: "Numerals", note: "minus six / forty eight / twenty four — must transcribe as said, not normalised." },
      { label: "Risk", note: "A model trained only on 'pure' Hindi will drop dBFS or invent a Hindi number word." },
    ],
    decision: "Transcribe mixed. Do not translate the English. Keep units as spoken.",
  },
  {
    id: "hi-prosody",
    src: "/audio/hi-prosody.mp3",
    title: "Emotion & breath",
    register: "Intimate, lower energy",
    duration: 19.25,
    lang: "hi",
    tags: ["Hindi", "Prosody"],
    scriptHi:
      "कभी-कभी आवाज़ में थकान होती है। कभी हल्की झुंझलाहट, कभी मुस्कान। अगर मॉडल को इंसान जैसी बात करनी है, तो डेटा में ये भावनाएँ असली होनी चाहिए। नकली smoothness से काम नहीं चलता। आवाज़ में साँस, ठहराव, और वो छोटी-छोटी गलतियाँ — वही उसे इंसान बनाती हैं।",
    scriptEn:
      "Lower intensity, longer pauses, lexical emotion. This is the take I would label for affect: fatigue, irritation, smile in the voice. Over-limiting this file would destroy the thing a voice model needs.",
    transcript:
      "Kabhī-kabhī āvāz mẽ thakān hotī hai. Kabhī halkī jhunjhlāhaṭ, kabhī muskān. Agar model ko insān jaisī bāt karnī hai, to data mẽ ye bhāvnāẽ asalī honī cāhie. Naklī smoothness se kām nahī̃ caltā. Āvāz mẽ sā̃s, ṭhahrāv, aur vo choṭī-choṭī galtiyā̃ — vahī use insān banātī haĩ.",
    annotations: [
      { label: "Affect", note: "Fatigue → mild irritation → smile. Label spans, do not flatten." },
      { label: "Breath", note: "Keep breaths. Breath Control in RX is a mix tool, not a training-data tool." },
      { label: "Anti-pattern", note: "AI 'voice enhance' often removes the micro-variation this file is for." },
    ],
    decision: "Keep dynamics. Do not loudness-match to broadcast. Tag affect.",
  },
  {
    id: "hi-question",
    src: "/audio/hi-question.mp3",
    title: "Interrogative contour",
    register: "Question intonation",
    duration: 13.01,
    lang: "hi",
    tags: ["Hindi", "Prosody"],
    scriptHi:
      "क्या आपने सुना? ये टेक काम की है, या दोबारा लेनी चाहिए? सिबिलेंस थोड़ा आगे बढ़ा है, ना कमरा है? और वो जो 'वाला' बोला, क्या वह पूर्वी हिंदी का वाला है, या मानक मानक का?",
    scriptEn:
      "Yes/no questions in Hindi typically rise on the last content word. A model that only sees declaratives will flatten this. Also a metalinguistic question about वाला — dialect, not error.",
    transcript:
      "Kyā āpne sunā? Ye take kām kī hai, yā dobārā lenī cāhie? Sibilance thoṛā āge baṛhā hai, nā kamrā hai? Aur vo jo 'vālā' bolā, kyā vah pūrvī Hindī kā vālā hai, yā mānak mānak kā?",
    annotations: [
      { label: "Intonation", note: "Terminal rise on सुना / चाहिए / है. Annotate as interrogative, not as uncertainty." },
      { label: "Linguistic", note: "'वाला' as dialect marker vs standard. Do not correct." },
    ],
    decision: "Keep. Tag speech-act = question. Useful for TTS intonation and ASR punctuation.",
  },
  {
    id: "hi-accent-east",
    src: "/audio/hi-accent-east.mp3",
    title: "Eastern Hindi ear",
    register: "Accent analysis, spoken",
    duration: 15.0,
    lang: "hi",
    tags: ["Hindi", "Accent"],
    scriptHi:
      "ये वाक्य सुनिए। वक्ता पूर्वी भारत से लगता है। 'स' थोड़ा नरम है, 'अ' थोड़ा खुला है, और लय बांग्ला की तरफ़ झुकती है। ये ग़लत हिंदी नहीं है। ये क्षेत्रीय हिंदी है, और मॉडल को इसे पहचानना चाहिए, सुधारना नहीं।",
    scriptEn:
      "A spoken style-guide for annotators: regional Hindi is a label, not a defect. LAHAJA-style Hindi ASR work shows North-East and eastern speakers are exactly where models degrade. The job is to hear that, not 'fix' it.",
    transcript:
      "Ye vākya sunie. Vaktā pūrvī Bhārat se lagtā hai. 'sa' thoṛā naram hai, 'a' thoṛā khulā hai, aur lay Bānglā kī taraf jhuktī hai. Ye galat Hindī nahī̃ hai. Ye kṣetrīya Hindī hai, aur model ko ise pahcānnā cāhie, sudhārnā nahī̃.",
    annotations: [
      { label: "Policy", note: "Identify, do not standardise. Accent is a feature." },
      { label: "Cues", note: "Softer /s/, open /ə~a/, Bangla-timed rhythm — typical of Bengal Hindi." },
    ],
    decision: "Gold for accent-tag training. Never send to a 'pronunciation corrector'.",
  },
  {
    id: "hi-everyday-female",
    src: "/audio/hi-everyday-female.mp3",
    title: "Everyday Hindi (other speaker)",
    register: "Domestic, informal, female",
    duration: 8.93,
    lang: "hi",
    tags: ["Hindi"],
    scriptHi: "सुनो, बाज़ार से धनिया और हरी मिर्च लेते आना। वो वाली वाली नहीं, ताज़ी वाली। और हाँ, दही खट्टा नहीं होना चाहिए, समझे?",
    scriptEn:
      "Not my voice — a second speaker, informal domestic Hindi. Portfolio work is also evaluation of other people. Reduplication (वाली वाली) is a real Hindi intensification pattern, not a stutter.",
    transcript:
      "Suno, bāzār se dhaniyā aur harī mirc lete ānā. Vo vālī vālī nahī̃, tāzī vālī. Aur hā̃, dahī khaṭṭā nahī̃ honā cāhie, samjhe?",
    annotations: [
      { label: "Reduplication", note: "वाली वाली = 'not that ordinary kind'. Do not collapse to one वाली." },
      { label: "Speech-act", note: "Directive + confirmation tag समझे? Rising." },
      { label: "Eval stance", note: "I annotate other voices the same way I annotate my own: verbatim, then judgement." },
    ],
    decision: "Keep reduplication. Tag speaker as female, informal. High value for colloquial Hindi.",
  },
  {
    id: "hi-dialogue-qc",
    src: "/audio/hi-dialogue-qc.mp3",
    title: "Two-engineer QC talk",
    register: "Overlap-ready dialogue",
    duration: 21.48,
    lang: "mixed",
    tags: ["Hindi", "Dialogue", "Code-switch"],
    scriptEn:
      "Two people in a control room arguing, politely, about over-processing. Clarity Vx removed noise and also presence. The correct RX move is a light Voice De-noise, not a full isolate. This is the human loop that AI tools still need.",
    transcript:
      "A: Bhāi, ye vocal thoṛā dry lag rahā hai. Room tone bilkul kāṭ diyā?\nB: Hā̃, Clarity se noise to gayā, lekin presence bhī kam ho gaī. RX mẽ Voice De-noise halkā calāte haĩ, pūrā nahī̃.\nA: Sahī kahā. AI tool madad kartā hai, lekin faislā kān kā hotā hai.\nB: Bilkul. Data mẽ bhī yahī cāhie — sāf, lekin insān jaisā.",
    annotations: [
      { label: "Speakers", note: "Two male, turn-taking, no heavy overlap. Diarise A/B." },
      { label: "Terms", note: "Clarity, RX, Voice De-noise, presence, room tone — keep English." },
      { label: "Thesis", note: "The sample is the argument: restoration is a taste decision, not a slider." },
    ],
    decision: "Diarise. Keep English plugin names. Gold for 'how engineers talk about AI audio'.",
  },
  {
    id: "hi-session-log",
    src: "/audio/hi-session-log.mp3",
    title: "Session slate",
    register: "Technical Hindi, careful diction",
    duration: 19.8,
    lang: "hi",
    tags: ["Hindi"],
    scriptHi:
      "सेशन नोट. तारीख: उन्नीस सितम्बर, दो हज़ार छब्बीस. स्थान: ठाकुरनगर, पश्चिम बंगाल. सैंपल रेट: अड़तालीस किलोहर्ट्ज़. बिट डेप्थ: चौबीस बिट. चैनल: मोनो. माइक दूरी: पंद्रह सेंटीमीटर. पॉप फ़िल्टर और कार्डियोयिड पैटर्न. पीक हेडरूम: माइनस बारह डी बी एफ एस.",
    scriptEn:
      "A slate. Numerals, units, place names. This is how I would open a training take so a transcriber (or a model) cannot guess the capture chain.",
    transcript:
      "Session note. Tārīkh: unnīs sitambar, do hazār chabbīs. Sthān: Ṭhākurnagar, Paścim Bangāl. Sample rate: aṛtālīs kilohertz. Bit depth: caubīs bit. Channel: mono. Mic dūrī: pandrah centimeter. Pop filter aur cardioid pattern. Peak headroom: minus bārah dBFS.",
    annotations: [
      { label: "Numerals", note: "Spoken Indian Hindi numbers, not digit strings. Transcribe as spoken." },
      { label: "Entities", note: "Thakurnagar — named entity. Easy for ASR to miss." },
      { label: "Chain", note: "48 kHz / 24-bit / mono / 15 cm / cardioid / −12 dBFS peaks." },
    ],
    decision: "Keep. Valuable for number/entity ASR. Do not digit-normalise in the gold transcript.",
  },
  {
    id: "en-studio",
    src: "/audio/en-studio.mp3",
    title: "English studio read",
    register: "B2+ clear delivery",
    duration: 23.26,
    lang: "en",
    tags: ["English", "Broadcast"],
    scriptEn:
      "My name is Suvadeep Mallik. I am an audio production specialist with more than ten years of live sound and post-production experience. I listen for nuance: accent, intonation, sibilance, room tone, and whether a take is actually usable for training. Clean audio is not the same as useful audio. Useful audio keeps the human in the voice.",
    transcript:
      "My name is Suvadeep Mallik. I am an audio production specialist with more than ten years of live sound and post-production experience. I listen for nuance: accent, intonation, sibilance, room tone, and whether a take is actually usable for training. Clean audio is not the same as useful audio. Useful audio keeps the human in the voice.",
    annotations: [
      { label: "Delivery", note: "Clear, unhurried, Indian English. Suitable for instruction / VO." },
      { label: "Thesis", note: "States the quality bar the rest of the portfolio demonstrates." },
    ],
    decision: "Keep as English reference. Natural Indian English — do not 'neutralise'.",
  },
  {
    id: "en-judgment",
    src: "/audio/en-judgment.mp3",
    title: "Ambiguous-take call",
    register: "Independent judgement, spoken",
    duration: 19.97,
    lang: "en",
    tags: ["English", "Field"],
    scriptEn:
      "This take is usable, but not as gold speech. There is a generator rumble under one hundred hertz, a soft east Indian Hindi accent, and a filled pause before the word decision. I would keep the accent. I would annotate the rumble. I would not send this to a restoration model as if it were clean studio audio. That is the judgement call.",
    transcript:
      "This take is usable, but not as gold speech. There is a generator rumble under one hundred hertz, a soft east Indian Hindi accent, and a filled pause before the word decision. I would keep the accent. I would annotate the rumble. I would not send this to a restoration model as if it were clean studio audio. That is the judgement call.",
    annotations: [
      { label: "Decision class", note: "Usable / not gold. Three separate tags: rumble, accent, filled pause." },
      { label: "Policy", note: "Accent stays. Noise is annotated, not automatically removed." },
    ],
    decision: "This is the annotation philosophy in one take. Keep as methodology audio.",
  },
];

export const restoration = {
  raw: {
    id: "hi-live-field-raw",
    src: "/audio/hi-live-field-raw.mp3",
    title: "Field capture — untreated",
    duration: 21.98,
    notes: [
      "55 Hz generator rumble + 110 Hz harmonic",
      "Broadband noise floor",
      "Band-limited like a stressed live mic (HPF 80, LPF 6.5 kHz)",
      "Peak held down — typical of cautious live gain",
    ],
  },
  restored: {
    id: "hi-live-field-restored",
    src: "/audio/hi-live-field-restored.mp3",
    title: "After RX-style repair",
    duration: 22.0,
    notes: [
      "High-pass 90 Hz (kill rumble, keep chest)",
      "FFT denoise, modest — not Dialogue Isolate at 100%",
      "Light compression, loudness to −16 LUFS",
      "Presence returns; consonants stay. If they vanish, the pass failed.",
    ],
  },
};

export const toolkit = [
  {
    maker: "iZotope",
    title: "RX, Nectar, Neutron, Ozone",
    kicker: "Speech isolation is a model. The ear is the last plugin.",
    body: [
      "RX is the industry default for dialogue repair — spectrogram editing, not just a denoise knob. The modules I actually reach for on speech: De-hum (50 Hz India mains and harmonics), De-click and Mouth De-click, De-plosive, Voice De-noise, De-reverb, De-ess, Breath Control, Spectral Repair for one-off events, and Dialogue Isolate when the background is non-stationary (crowd, traffic, weather, footsteps).",
      "Dialogue Isolate is a neural net trained to split voice, noise, and reverb into three gains. That is the same problem as building multilingual speech models: the network is only as good as the examples it was shown, and it fails in familiar ways — thinned consonants, musical noise, leftover reverb tails, overlapping talkers, whispers, laughter. I use it as a first pass. The last pass is always a listen for whether the person is still in the file.",
      "Spectral Recovery rebuilds highs lost to phone/Zoom band-limiting. Useful, and dangerous: too much and you have invented a voice. Repair Assistant and Nectar’s Vocal Assistant / Neutron Mix Assistant / Ozone Master Assistant are the same class of tool — ML that proposes a chain. I treat their output as a draft mix, never as a verdict.",
      "Why this matters for AI training data: over-processed speech is a silent poison. A file that sounds 'clean' on cheap speakers may have lost breath, sibilant identity, and the dialect cues a model needs. Knowing RX means knowing when not to run it — and how to label a take as gold, usable-with-noise, or reject.",
    ],
    modules: [
      "Dialogue Isolate",
      "Spectral Repair",
      "Voice De-noise",
      "De-reverb",
      "Spectral Recovery",
      "De-plosive / De-ess",
      "Repair Assistant",
      "Nectar Vocal Assistant",
    ],
  },
  {
    maker: "Waves",
    title: "Clarity Vx, Tune, Vocal Bender",
    kicker: "Real-time neural nets. Same failure modes as the models you are hiring me to judge.",
    body: [
      "Clarity Vx (and Vx Pro) is Waves Neural Networks applied to voice: it does not 'learn a noise profile' per take. It has already been trained on a very large voice/non-voice set, which is why it runs in real time. Broad 1 keeps more than one voice; Broad 2 is more aggressive on severe noise and competing talkers; ECO is the low-CPU dialogue net. One knob sets the voice/background balance — including the honest case where you want some room back, because a fully dry voice is wrong for picture, and often wrong for training.",
      "Clarity Vx DeReverb Pro is a separate net for tails, with banded control, tail smoothing, and distinct dialogue vs sung-vocal models. Clarix LB is the live-broadcast sibling (Emmy-winning NN engine, ~47 ms). I used Waves in live and post the same way: as a safety net on dirty mics, never as a substitute for gain, placement, and a pop filter.",
      "Waves Tune / Tune Real-Time and Vocal Bender sit on the other side of 'voice AI' — pitch, formant, identity. They are useful in music. On speech data they are a red flag. Formant shift changes who the speaker is. Pitch quantise destroys the intonation a Hindi question needs. If a take has been Tune’d, I would tag it as processed identity, not as natural speech.",
      "The link to this role: Clarity’s engine is a speech separator. Using it every week trains the same auditory questions the JD asks — what is residual noise, what is a dialect, what is an artefact, and what should never be in a gold set.",
    ],
    modules: [
      "Clarity Vx / Vx Pro",
      "Clarity Vx DeReverb",
      "Clarix LB",
      "Waves Tune Real-Time",
      "Vocal Bender",
      "Renaissance Vox",
      "DeEsser",
    ],
  },
  {
    maker: "Ableton Live",
    title: "Record, edit, post",
    kicker: "The DAW I actually cut speech in — not a demo of a piano roll.",
    body: [
      "For ten years of production and post, Ableton Live was the desk: audio tracks, not clips-as-music first. Capture at 48 kHz / 24-bit for speech (video sync, headroom). Interface gain — never the track fader — so peaks sit around −12 to −6 dBFS. Buffer 256–512 samples; 'Reduce Latency When Monitoring' when the talent needs to hear themselves. A pop filter, 15–20 cm, 15° off-axis, is cheaper than any De-plosive later.",
      "Editing: Arrangement View for linear dialogue, take-lane comping for several reads of the same line, fades on every join, crossfades so breath isn’t a click. Warp is for timing a music vocal, not for 'fixing' a speech dataset — warping conversational Hindi destroys rhythm tags. EQ Eight for surgical rumble and harshness; Glue / Compressor only after the edit is clean. Live 12 Auto Shift exists; I keep it off speech data.",
      "Post path I actually run: record in Live → round-trip problem files through RX (standalone or Connect) → Waves Clarity only when the noise is non-stationary and time is short → back to Live for assembly, loudness, and export. Export: WAV, 24-bit, sample rate matching the session, Normalize off, Dither off unless I am going to 16-bit. Mono for a single speaker.",
      "Live’s speed is why it fits this work. Speech QC is thousands of short files. I need to mark, split, rename, and bounce without a five-minute export dance. That operational taste — what a useful file looks like on disk — is the same taste the JD calls 'what good audio data is'.",
    ],
    modules: [
      "Arrangement + take lanes",
      "I/O & gain staging",
      "Fades / comping",
      "EQ Eight",
      "Glue Compressor",
      "Resampling / stems",
      "48 kHz 24-bit WAV export",
    ],
  },
];

export const recordingCraft = {
  lead: "Recording is not a plugin. It is a chain you cannot fully repair later.",
  paragraphs: [
    "I have spent the last decade as an independent audio engineer and live-event operator — more than a thousand shows, outdoor and indoor, across West Bengal conditions that do not resemble a treated booth. Wind, generators, crowd, bad mains, last-minute stage plots, talent who will not stay on mic. That is a ten-year ear for noisy, accented, time-pressured speech. It is also a ten-year habit of making a call and standing on it: this take ships, this take we recut, this noise we live with because the performance is the thing.",
    "The capture chain I trust: cardioid dynamic on a loud stage (rejection, proximity as a feature), small-diaphragm or large-diaphragm condenser only when the room is dead enough to deserve it. Capsule 15–20 cm from the mouth, 10–15° off-axis so plosives miss the diaphragm. Pop filter. Null of the mic aimed at the worst noise. Talent and mic pulled off the wall to kill comb filtering. If the room is bad, I get closer and lower the gain — signal-to-noise at the source — rather than promising RX will save it.",
    "Levels: conversational speech peaks −18 to −12 dBFS, loud emphasis never above −6. Hitting 0 dBFS on the way in is not 'using the bits'; it is destroying the transient that makes a stop consonant. 24-bit is the floor because the noise floor of the converter should not become the noise floor of the dataset. 48 kHz when the file might meet picture; 44.1 only for music-only delivery.",
    "Live work trained independent judgement. There is no second recording of a wedding vow or a keynote. You mix what you have, you high-pass rumble without thinning the voice, you notch 50 Hz and its harmonics, you do not over-compress a speaker who is already eating the mic. Those are the same decisions as labelling speech for a model: keep the human, name the damage, refuse to pretend a ruined file is gold.",
  ],
  specs: [
    { k: "Sample rate", v: "48 kHz speech / 44.1 kHz music" },
    { k: "Bit depth", v: "24-bit capture" },
    { k: "Peaks", v: "−12 to −6 dBFS" },
    { k: "Working loudness", v: "−16 LUFS integrated (speech)" },
    { k: "True peak", v: "≤ −1.5 dBTP" },
    { k: "Mic distance", v: "15–20 cm, off-axis" },
    { k: "Pattern", v: "Cardioid, null to noise" },
    { k: "Export", v: "Mono WAV, normalize off" },
  ],
};

export const method = {
  title: "How I listen when the file is ambiguous",
  intro:
    "The JD asks for independent judgement on noisy or accented speech, and for transcription that holds disfluencies, accents, and prosody. This is the checklist I actually run. It is closer to a mastering listen than to a typing test.",
  steps: [
    {
      n: "01",
      title: "Technical first",
      text: "Clip, drop-outs, clock issues, inverted phase, dual-mono vs true stereo, DC, 50/60 Hz. If the file is broken as audio, I stop. No amount of linguistic care fixes a clipped plosive.",
    },
    {
      n: "02",
      title: "Verbatim transcript",
      text: "What was said, including मतलब, वो, ना, filled pauses, false starts, code-switch, numbers as spoken. I do not 'help' the speaker. Reduplication (वाली वाली) stays. English islands stay English.",
    },
    {
      n: "03",
      title: "Accent & dialect",
      text: "Eastern Hindi / Bangla-timed rhythm is a label, not an error. I mark cues (open /a/, softer /s/, retroflex strength) and I do not rewrite toward Delhi broadcast. Native Hindi here includes regional variation — that is the point of the job.",
    },
    {
      n: "04",
      title: "Prosody",
      text: "Question rise vs declarative fall, stress, speech-rate, affect (fatigue, irritation, smile), breath, pause length. These are first-class features for TTS and for any model that should not sound like a news robot.",
    },
    {
      n: "05",
      title: "Quality class",
      text: "Gold (studio, usable as-is) / usable-with-noise (keep, tag the interferer) / restore (repair will not invent a voice) / reject (re-record). I will not send a Clarity-destroyed file into a gold bucket because it 'sounds clean'.",
    },
    {
      n: "06",
      title: "Defensible note",
      text: "One sentence another annotator could agree with. If I cannot write it, the label is taste, not a decision. That is how I ran live sound under pressure, and it is how I would label speech.",
    },
  ],
};

export const experience = {
  role: "Independent business owner — Audio engineer & live event management",
  dates: "2016 – 2026",
  bullets: [
    "Professional audio production and sound quality control across 1,000+ live events over 10+ years — critical listening for clear, natural, consistent output in rooms that were never designed for recording.",
    "Independent judgement on ambiguous, time-sensitive audio: wind, generators, bad mains, talent off-axis, last-minute plot changes. Consistent, defensible calls with no second take.",
    "Clear technical feedback to clients, vendors, and crews — the same skill as writing an audio QC note another human can act on.",
    "Budget, vendor, and schedule analysis for planning — structured data habits beside the ear.",
  ],
};

export const certs = [
  {
    title: "Claude with Google Cloud’s Vertex AI",
    org: "Anthropic Academy",
    when: "Sep 2026",
    note: "Prompting, multi-turn workflows, and model evaluation — how models apply (and miss) instructions. Directly relevant to judging whether speech data will teach a model the right behaviour.",
  },
  {
    title: "GenAI-Powered Data Analytics Job Simulation",
    org: "Tata Group (Tata iQ)",
    when: "Feb 2026",
    note: "Structured evaluation of generated output, not only raw analysis.",
  },
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte Australia",
    when: "Mar 2026",
    note: "Quality, reporting, and decision-making under incomplete information.",
  },
  {
    title: "AI Foundation Course",
    org: "Jio Institute (AI Classroom, JioPC)",
    when: "Aug 2026",
    note: "Foundations for how training data becomes model behaviour.",
  },
];

export const education = {
  title: "B.Tech, Electrical Engineering",
  org: "Narula Institute of Technology, MAKAUT, West Bengal",
  when: "2012 – 2016",
};

export const jdFit = [
  {
    need: "Native Hindi, dialect range",
    have: "Native Hindi and Bengali, based in West Bengal. Everyday exposure to Eastern Hindi, Bangla-influenced rhythm, and Hindi–English mix. Samples in this book are tagged for that, not flattened.",
  },
  {
    need: "English B2, clear delivery",
    have: "Proficient English, studio reads in this portfolio, ten years of client-facing technical talk.",
  },
  {
    need: "Auditory nuance",
    have: "Live critical listening as the job: intonation, sibilance, plosives, room tone, whether a take is actually usable.",
  },
  {
    need: "Transcription + disfluency / prosody",
    have: "Method in this book: verbatim, fillers kept, questions tagged, affect labelled. Not a 'clean the transcript' habit.",
  },
  {
    need: "Independent judgement on messy audio",
    have: "1,000+ events with no safety net. Gold / usable / restore / reject is how I already think.",
  },
  {
    need: "Voice, production, datasets",
    have: "Ableton production/post, iZotope RX and Waves neural voice tools in the real chain — the same models whose artefacts I would refuse in a training set.",
  },
];
