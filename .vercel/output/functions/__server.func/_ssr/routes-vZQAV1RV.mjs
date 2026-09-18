import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { L as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, i as FileDown, s as ArrowDown } from "../_libs/lucide-react.mjs";
import { a as cn, c as jdFit, d as recordingCraft, f as restoration, i as certs, l as method, m as toolkit, n as Badge, o as education, p as samples, r as Button, s as experience, t as AudioPlayer, u as profile } from "./portfolio-bf4LZNP3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vZQAV1RV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SampleCard({ sample }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-medium tracking-tight text-fg",
					children: sample.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: sample.register
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: sample.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t }, t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioPlayer, {
				id: sample.id,
				src: sample.src,
				title: sample.title
			}),
			sample.scriptHi && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-deva mt-4 text-[1.05rem] leading-relaxed text-fg",
				children: sample.scriptHi
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: sample.scriptEn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen((v) => !v),
				className: "mt-4 text-sm text-accent hover:text-fg",
				children: open ? "Hide annotation" : "Annotated transcript"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid transition-[grid-template-rows] duration-200", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-xl bg-elevated p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-[11px] tracking-wide text-subtle uppercase",
								children: "Verbatim"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whitespace-pre-wrap text-sm leading-relaxed text-fg",
								children: sample.transcript
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: sample.annotations.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-accent",
											children: [a.label, "."]
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: a.note
										})
									]
								}, a.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle",
									children: "Decision. "
								}), sample.decision]
							})
						]
					})
				})
			})
		]
	});
}
var links = [
	{
		href: "#samples",
		label: "Samples"
	},
	{
		href: "#method",
		label: "Method"
	},
	{
		href: "#tools",
		label: "Tools"
	},
	{
		href: "#craft",
		label: "Craft"
	},
	{
		href: "#work",
		label: "Work"
	}
];
function SiteNav({ book = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-elevated text-accent flex size-8 shrink-0 items-center justify-center rounded-md font-mono text-[11px] tracking-wider",
						children: profile.short
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate text-sm text-fg",
						children: [profile.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-muted sm:inline",
							children: " · Audio"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: book ? `/${l.href}` : l.href,
						className: "text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							children: "Studio book"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "accent",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/Suvadeep_Mallik_Audio_Portfolio.zip",
							download: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("hidden sm:inline"),
									children: "PDF + audio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "PDF"
								})
							]
						})
					})]
				})
			]
		})
	});
}
function Home() {
	const intro = samples.find((s) => s.id === "hi-broadcast");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-6 font-mono text-[11px] tracking-[0.22em] text-accent uppercase",
							children: [profile.location, " · 2016–2026"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display max-w-4xl text-[2.6rem] leading-[1.05] font-medium tracking-[-0.03em] text-fg sm:text-6xl",
							children: profile.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-xl text-lg text-muted sm:text-xl",
							children: [
								profile.role,
								". ",
								profile.subrole,
								". Native Hindi, a decade of live sound, and an ear for whether speech is actually useful — not just clean."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-deva mt-6 max-w-2xl text-xl leading-snug text-fg/90",
							children: "साफ़ आवाज़ और काम की आवाज़ एक चीज़ नहीं हैं।"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 max-w-2xl rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-[11px] tracking-wide text-subtle uppercase",
								children: "Open with Hindi · broadcast register"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioPlayer, {
								id: intro.id,
								src: intro.src,
								title: intro.title
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "accent",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#samples",
										children: ["Listen to samples", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/book",
										children: "Open studio book"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/Suvadeep_Mallik_Audio_Portfolio.zip",
										download: true,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), "Download PDF pack"]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4",
							children: [
								{
									k: "Years on the desk",
									v: profile.years
								},
								{
									k: "Live events",
									v: profile.events
								},
								{
									k: "Hindi / Bengali",
									v: "Native"
								},
								{
									k: "English",
									v: "B2+"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-subtle",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display mt-1 text-2xl text-fg",
								children: s.v
							})] }, s.k))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl tracking-tight",
								children: "Why this ear for this job"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: "Mapped to the role: multilingual speech, noisy takes, defensible labels. No linguistics degree — ten years of equivalent practice, and the tools that are themselves speech models."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-5 lg:col-span-8",
							children: jdFit.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-1 border-b border-line pb-5 sm:grid-cols-12 sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-accent sm:col-span-4",
									children: row.need
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted sm:col-span-8",
									children: row.have
								})]
							}, row.need))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "samples",
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
									children: "01 · Voice & transcripts"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl tracking-tight sm:text-4xl",
									children: "Hindi samples, humanised"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted",
									children: "Native Hindi scripts across broadcast, conversation, field talk, questions, Eastern accent notes, and Hindi–English mix. Each file has a verbatim transcript, prosody/disfluency tags, and a keep / restore / reject decision. Play in the browser; the PDF pack carries the same audio as attachments."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 lg:grid-cols-2",
							children: samples.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleCard, { sample: s }, s.id))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
								children: "02 · Restoration judgement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display max-w-2xl text-3xl tracking-tight sm:text-4xl",
								children: "Same take, before and after a modest RX-style pass"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: "Live-field Hindi with generator rumble mixed in, then a conservative denoise — not Dialogue Isolate at full wet. The point is the leftover decision: rumble gone, voice still a person. If the restored file sounded like a vocoder, I would reject it for gold speech."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-5 lg:grid-cols-2",
								children: [restoration.raw, restoration.restored].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-lg",
												children: t.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.id.includes("raw") ? "Raw" : "Restored" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioPlayer, {
											id: t.id,
											src: t.src,
											title: t.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 space-y-2",
											children: t.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "text-sm text-muted",
												children: n
											}, n))
										})
									]
								}, t.id))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "method",
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
								children: "03 · Listening method"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display max-w-2xl text-3xl tracking-tight",
								children: method.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: method.intro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: method.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs text-accent",
											children: s.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display mt-2 text-xl",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted",
											children: s.text
										})
									]
								}, s.n))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "tools",
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
								children: "04 · Production chain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl tracking-tight sm:text-4xl",
								children: "iZotope, Waves, Ableton — and why they are AI work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: "These are not logos. Dialogue Isolate and Clarity Vx are speech-separation networks. Using them on real shows is weekly practice in the exact failure modes a speech-data role has to catch."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 space-y-16",
								children: toolkit.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "grid gap-8 lg:grid-cols-12",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-accent",
												children: t.maker
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display mt-1 text-2xl",
												children: t.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-muted italic",
												children: t.kicker
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-5 flex flex-wrap gap-1.5",
												children: t.modules.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: m }, m))
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-4 lg:col-span-8",
										children: t.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[15px] leading-relaxed text-muted",
											children: p
										}, p.slice(0, 24)))
									})]
								}, t.maker))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "craft",
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
								children: "05 · Recording, ten years"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display max-w-3xl text-3xl tracking-tight sm:text-4xl",
								children: recordingCraft.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid gap-10 lg:grid-cols-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4 lg:col-span-7",
									children: recordingCraft.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[15px] leading-relaxed text-muted",
										children: p
									}, p.slice(0, 28)))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] lg:col-span-5",
									children: recordingCraft.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-sm text-subtle",
											children: s.k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-right text-sm text-fg",
											children: s.v
										})]
									}, s.k))
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "work",
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
							children: "06 · Record"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-12 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-3xl tracking-tight",
										children: experience.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-subtle",
										children: experience.dates
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 space-y-4",
										children: experience.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-[15px] leading-relaxed text-muted",
											children: b
										}, b.slice(0, 32)))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Credentials"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-5",
									children: [certs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-fg",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-subtle",
											children: [
												c.org,
												" · ",
												c.when
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: c.note
										})
									] }, c.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-fg",
										children: education.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-subtle",
										children: [
											education.org,
											" · ",
											education.when
										]
									})] })]
								})]
							})]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: profile.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							profile.location,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-fg",
								href: `mailto:${profile.email}`,
								children: profile.email
							}),
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-fg",
								href: `tel:${profile.phone.replace(/\s/g, "")}`,
								children: profile.phone
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${profile.email}`,
								children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "accent",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/Suvadeep_Mallik_Audio_Portfolio.zip",
								download: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), "Portfolio PDF"]
							})
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
