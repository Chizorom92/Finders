import { useState } from "react";
import documentImage from "../../../assets/ai/safety/documentImage.jpg";

const hotspots = [
    {
        id: 1,
        title: "Registry Number",
        left: "63%",
        top: "19%",
        color: "#16A34A",
        description:
            "Finder AI matched this registry number with the official government formatting pattern.",
    },
    {
        id: 2,
        title: "Official Stamp",
        left: "74%",
        top: "42%",
        color: "#2563EB",
        description:
            "The embossed seal dimensions and placement appear authentic.",
    },
    {
        id: 3,
        title: "Signature",
        left: "43%",
        top: "82%",
        color: "#D97706",
        description:
            "This signature differs slightly from archived samples. Physical verification is recommended.",
    },
];

const DocumentViewer = () => {
    const [active, setActive] = useState(1);

    const selected = hotspots.find((h) => h.id === active);

    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Interactive Preview
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Document Viewer
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Click any highlighted point to see what Finder AI verified.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
                {/* Document */}
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]">
                    <img
                        src={documentImage}
                        alt="Sample Property Document"
                        className="w-full object-cover"
                    />

                    {hotspots.map((spot) => (
                        <button
                            key={spot.id}
                            onClick={() => setActive(spot.id)}
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                            style={{
                                left: spot.left,
                                top: spot.top,
                            }}
                        >
                            <div
                                className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white shadow-lg ${
                                    active === spot.id ? "scale-110" : "scale-100"
                                } transition`}
                                style={{ background: spot.color }}
                            >
                                <div className="h-2 w-2 rounded-full bg-white" />
                            </div>

                            {active === spot.id && (
                                <div
                                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-30"
                                    style={{ background: spot.color }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* AI Explanation */}
                <div className="rounded-2xl bg-[var(--surface-2)] p-5">
                    <div
                        className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white"
                        style={{ background: selected.color }}
                    >
                        Active Detection
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--text)]">
                        {selected.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[var(--text-light)]">
                        {selected.description}
                    </p>

                    <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                            AI Confidence
                        </p>

                        <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-black text-[var(--text)]">
                97%
              </span>
                            <span className="pb-1 text-sm text-emerald-600">
                Verified
              </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: "97%",
                                    background: selected.color,
                                }}
                            />
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        {hotspots.map((spot) => (
                            <button
                                key={spot.id}
                                onClick={() => setActive(spot.id)}
                                className={`flex w-full items-center gap-3 rounded-xl p-3 transition ${
                                    active === spot.id
                                        ? "bg-[var(--surface)] shadow-sm"
                                        : "hover:bg-[var(--surface)]"
                                }`}
                            >
                                <div
                                    className="h-4 w-4 rounded-full"
                                    style={{ background: spot.color }}
                                />

                                <span className="font-medium text-[var(--text)]">
                  {spot.title}
                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocumentViewer;