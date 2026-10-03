// import { useRef, useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import {
//     Shield,
//     GraduationCap,
//     HeartPulse,
//     Trees,
//     Train,
// } from "lucide-react";
//
// import panorama from "../../../assets/ai/parallax/panaroma.jpg";
// import clouds from "../../../assets/ai/parallax/clouds.jpg";
// import trees from "../../../assets/ai/parallax/trees.jpg";
// import road from "../../../assets/ai/parallax/roads.jpg";
//
// import school from "../../../assets/ai/parallax/school.jpg";
// import hospital from "../../../assets/ai/parallax/hospital.jpg";
// import park from "../../../assets/ai/parallax/park.jpg";
// import lifestyle from "../../../assets/ai/parallax/lifestyle.jpg";
//
// const hotspots = [
//     {
//         id: 1,
//         title: "Education Hub",
//         x: 32,
//         y: 46,
//         color: "#16A34A",
//         image: school,
//         icon: GraduationCap,
//         text: "University 5 mins • International schools nearby • Student friendly.",
//     },
//     {
//         id: 2,
//         title: "Transit Station",
//         x: 56,
//         y: 58,
//         color: "#2563EB",
//         image: park,
//         icon: Train,
//         text: "Metro 8 mins • Bus stop 2 mins • Commute DNA 91.",
//     },
//     {
//         id: 3,
//         title: "Lifestyle District",
//         x: 78,
//         y: 42,
//         color: "#7C2338",
//         image: lifestyle,
//         icon: Trees,
//         text: "Luxury cafés • Restaurants • Boutique shopping within walking distance.",
//     },
//     {
//         id: 4,
//         title: "Medical Centre",
//         x: 66,
//         y: 28,
//         color: "#DC2626",
//         image: hospital,
//         icon: HeartPulse,
//         text: "Emergency hospital 4 mins away • Excellent healthcare accessibility.",
//     },
//     {
//         id: 5,
//         title: "Verified Safety Zone",
//         x: 46,
//         y: 38,
//         color: "#9333EA",
//         image: park,
//         icon: Shield,
//         text: "AI verified residential district • CCTV coverage • Low fraud probability.",
//     },
// ];
//
// export default function NeighborhoodExplorer() {
//     const containerRef = useRef(null);
//     const [active, setActive] = useState(hotspots[0]);
//
//     const dragX = useMotionValue(0);
//
//     const skyX = useTransform(dragX, [-150, 150], [20, -20]);
//     const cityX = useTransform(dragX, [-150, 150], [35, -35]);
//     const treeX = useTransform(dragX, [-150, 150], [60, -60]);
//     const roadX = useTransform(dragX, [-150, 150], [80, -80]);
//
//     const ActiveIcon = active.icon;
//
//     return (
//         <section className="space-y-6">
//             <div>
//                 <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
//                     360° Neighborhood Explorer
//                 </p>
//
//                 <h2 className="mt-2 font-serif text-3xl font-bold">
//                     Drag to explore the surroundings
//                 </h2>
//
//                 <p className="mt-2 max-w-2xl text-[var(--text-light)]">
//                     Finder AI visualizes schools, transport, parks, safety and lifestyle
//                     around every verified property.
//                 </p>
//             </div>
//
//             {/* PARALLAX SCENE */}
//             <div
//                 ref={containerRef}
//                 className="relative h-[260px] overflow-hidden rounded-[34px] border border-[var(--border)] shadow-2xl md:h-[520px]"
//             >
//                 {/* Sky */}
//                 <motion.img
//                     src={clouds}
//                     style={{ x: skyX }}
//                     className="absolute inset-0 h-full w-[120%] object-cover opacity-70"
//                     draggable={false}
//                 />
//
//                 {/* Panorama */}
//                 <motion.div
//                     drag="x"
//                     dragConstraints={{ left: -150, right: 150 }}
//                     dragElastic={0.12}
//                     style={{ x: dragX }}
//                     className="absolute inset-0 cursor-grab active:cursor-grabbing"
//                 >
//                     <motion.img
//                         src={panorama}
//                         style={{ x: cityX }}
//                         className="absolute inset-0 h-full w-[120%] object-cover"
//                         draggable={false}
//                     />
//
//                     <motion.img
//                         src={trees}
//                         style={{ x: treeX }}
//                         className="absolute bottom-0 h-[38%] w-[130%] object-cover"
//                         draggable={false}
//                     />
//
//                     <motion.img
//                         src={road}
//                         style={{ x: roadX }}
//                         className="absolute bottom-0 h-[28%] w-[130%] object-cover opacity-90"
//                         draggable={false}
//                     />
//
//                     {/* Hotspots */}
//                     {hotspots.map((spot) => {
//                         const Icon = spot.icon;
//
//                         return (
//                             <button
//                                 key={spot.id}
//                                 onClick={() => setActive(spot)}
//                                 className="absolute -translate-x-1/2 -translate-y-1/2"
//                                 style={{
//                                     left: `${spot.x}%`,
//                                     top: `${spot.y}%`,
//                                 }}
//                             >
//                                 <div
//                                     className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white shadow-xl"
//                                     style={{ backgroundColor: spot.color }}
//                                 >
//                   <span
//                       className="absolute h-full w-full animate-ping rounded-full opacity-30"
//                       style={{ backgroundColor: spot.color }}
//                   />
//
//                                     <Icon size={18} color="white" />
//                                 </div>
//                             </button>
//                         );
//                     })}
//                 </motion.div>
//
//                 {/* Overlay */}
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//
//                 {/* Drag Hint */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur">
//                     ← Drag or Swipe →
//                 </div>
//             </div>
//
//             {/* AI Glass Card */}
//             <motion.div
//                 key={active.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)] shadow-lg"
//             >
//                 <div className="grid md:grid-cols-[220px_1fr]">
//                     <img
//                         src={active.image}
//                         className="h-56 w-full object-cover md:h-full"
//                         alt={active.title}
//                     />
//
//                     <div className="p-6">
//                         <div className="mb-4 flex items-center gap-3">
//                             <div
//                                 className="flex h-12 w-12 items-center justify-center rounded-2xl"
//                                 style={{ backgroundColor: `${active.color}20` }}
//                             >
//                                 <ActiveIcon color={active.color} size={24} />
//                             </div>
//
//                             <div>
//                                 <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
//                                     Finder AI Intelligence
//                                 </p>
//
//                                 <h3 className="font-serif text-2xl font-bold">
//                                     {active.title}
//                                 </h3>
//                             </div>
//                         </div>
//
//                         <p className="leading-7 text-[var(--text-light)]">
//                             {active.text}
//                         </p>
//
//                         <div className="mt-5 flex flex-wrap gap-3">
//               <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
//                 Verified
//               </span>
//
//                             <span className="rounded-full bg-[var(--surface-2)] px-3 py-1 text-sm">
//                 AI Confidence 96%
//               </span>
//                         </div>
//                     </div>
//                 </div>
//             </motion.div>
//         </section>
//     );
// }

import { useState } from "react";
import {
    Shield,
    Train,
    GraduationCap,
    HeartPulse,
    Trees,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import view1 from "../../../assets/ai/neighborhood/view1.jpg";
import view2 from "../../../assets/ai/neighborhood/view2.jpg";
import view3 from "../../../assets/ai/neighborhood/view3.jpg";
import view4 from "../../../assets/ai/neighborhood/school.jpg";
import view5 from "../../../assets/ai/neighborhood/hospital.jpg";

const views = [
    {
        image: view1,
        title: "Front Residence",
        description: "Premium detached residence with verified ownership.",
        hotspot: {
            x: "58%",
            y: "48%",
            title: "Main Property",
            text: "Verified title • Authentic listing • AI Trust 96%",
            color: "#7C2338",
        },
    },
    {
        image: view2,
        title: "Transit Zone",
        description: "Walkable streets with excellent transport access.",
        hotspot: {
            x: "28%",
            y: "55%",
            title: "Transit Hub",
            text: "Bus stop 2 mins • Metro 8 mins • Commute DNA 91",
            color: "#2563EB",
        },
    },
    {
        image: view3,
        title: "Lifestyle Park",
        description: "Green recreational environment for families.",
        hotspot: {
            x: "68%",
            y: "42%",
            title: "Central Park",
            text: "Parks • Cafés • Fitness • Lifestyle DNA 86",
            color: "#059669",
        },
    },
    {
        image: view4,
        title: "Education District",
        description: "Universities and schools within walking distance.",
        hotspot: {
            x: "40%",
            y: "40%",
            title: "Education Hub",
            text: "University 5 mins • School 3 mins • Student friendly",
            color: "#16A34A",
        },
    },
    {
        image: view5,
        title: "Healthcare & City",
        description: "Hospitals and essential services nearby.",
        hotspot: {
            x: "72%",
            y: "52%",
            title: "Medical Centre",
            text: "Emergency care 4 mins • Hospital DNA 94",
            color: "#DC2626",
        },
    },
];

const layerIcons = {
    Safety: Shield,
    Transit: Train,
    Schools: GraduationCap,
    Hospital: HeartPulse,
    Parks: Trees,
};

export default function NeighborhoodExplorer() {
    const [current, setCurrent] = useState(0);
    const [showCard, setShowCard] = useState(true);
    const [startX, setStartX] = useState(null);

    const next = () => {
        setShowCard(false);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % views.length);
            setShowCard(true);
        }, 180);
    };

    const prev = () => {
        setShowCard(false);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + views.length) % views.length);
            setShowCard(true);
        }, 180);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (startX === null) return;

        const end = e.changedTouches[0].clientX;
        const diff = startX - end;

        if (diff > 40) next();
        if (diff < -40) prev();

        setStartX(null);
    };

    const view = views[current];

    return (
        <section className="space-y-6">
            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Neighborhood Explorer
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold">
                    Explore the environment in 360°
                </h2>

                <p className="mt-2 max-w-2xl text-[var(--text-light)]">
                    Drag on mobile or use the arrows on desktop to explore the property's
                    surroundings through Finder AI.
                </p>
            </div>

            {/* Image Viewer */}
            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative overflow-hidden rounded-[34px] border border-[var(--border)] shadow-2xl"
            >
                <img
                    src={view.image}
                    alt={view.title}
                    className={`h-[260px] w-full object-cover transition-all duration-500 md:h-[520px] ${
                        showCard ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Hotspot */}
                <button
                    onClick={() => setShowCard(!showCard)}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                        left: view.hotspot.x,
                        top: view.hotspot.y,
                    }}
                >
          <span
              className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-white"
              style={{ backgroundColor: view.hotspot.color }}
          >
            <span className="absolute h-5 w-5 animate-ping rounded-full bg-white/40" />
          </span>
                </button>

                {/* Info Card */}
                {showCard && (
                    <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-black/45 p-5 text-white backdrop-blur-xl md:right-auto md:w-[340px]">
                        <div className="mb-3 flex items-center gap-2">
                            <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: view.hotspot.color }}
                            />

                            <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                                Finder AI Intelligence
                            </p>
                        </div>

                        <h3 className="font-serif text-2xl font-bold">{view.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-white/90">
                            {view.description}
                        </p>

                        <div className="mt-4 rounded-2xl bg-white/10 p-3">
                            <p className="font-semibold">{view.hotspot.title}</p>

                            <p className="mt-1 text-sm text-white/80">{view.hotspot.text}</p>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 md:block"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 md:block"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Mobile swipe hint */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 text-xs text-white md:hidden">
                    ← Swipe →
                </div>
            </div>

            {/* Filmstrip */}
            <div className="grid grid-cols-5 gap-2">
                {views.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setShowCard(false);
                            setTimeout(() => {
                                setCurrent(index);
                                setShowCard(true);
                            }, 180);
                        }}
                        className={`overflow-hidden rounded-2xl border-2 transition ${
                            current === index
                                ? "border-[var(--primary)]"
                                : "border-transparent"
                        }`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-full object-cover md:h-20"
                        />
                    </button>
                ))}
            </div>

            {/* Progress */}
            <div className="flex items-center justify-between rounded-2xl bg-[var(--surface)] px-4 py-3">
                <div>
                    <p className="text-sm font-semibold">{view.title}</p>
                    <p className="text-xs text-[var(--text-light)]">
                        View {current + 1} of {views.length}
                    </p>
                </div>

                <div className="flex gap-1">
                    {views.map((_, i) => (
                        <span
                            key={i}
                            className={`h-2 rounded-full transition-all ${
                                current === i
                                    ? "w-8 bg-[var(--primary)]"
                                    : "w-2 bg-[var(--border)]"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}