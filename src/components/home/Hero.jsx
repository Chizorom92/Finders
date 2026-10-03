import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

import hero1 from "../../assets/Hero/house1.jpg";
import hero2 from "../../assets/Hero/house2.jpg";
import hero3 from "../../assets/Hero/house3.jpg";
import hero4 from "../../assets/Hero/house4.jpg";

const Hero = () => {
    const heroSlides = [
        {
            image: hero1,
            title: "Aurora Villa",
            location: "Lekki Phase 1, Lagos",
        },
        {
            image: hero2,
            title: "Maple Heights",
            location: "Maitama, Abuja",
        },
        {
            image: hero3,
            title: "Skyline Residence",
            location: "Banana Island, Lagos",
        },
        {
            image: hero4,
            title: "Palm Court",
            location: "Asokoro, Abuja",
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[480px] overflow-hidden rounded-[28px] md:h-[620px] md:rounded-[36px]">
            {/* Background Images */}
            {heroSlides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        current === index ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />

            {/* Content */}
            <div className="relative flex h-full flex-col justify-between px-5 pb-6 pt-8 text-white md:px-12 md:pb-10 md:pt-10">
                {/* Badge */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md md:px-4">
                        <ShieldCheck size={15} />
                        <span className="text-xs font-medium md:text-sm">
              98% Verified Listings
            </span>
                    </div>
                </div>

                {/* Main Text */}
                <div className="max-w-2xl">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#F3E7D4] md:mb-3 md:text-sm md:tracking-[0.35em]">
                        Nigeria • Africa • International
                    </p>

                    <h1 className="font-serif text-4xl leading-tight md:text-6xl">
                        Find a home.
                        <br />
                        <span className="italic text-[#F3E7D4]">
              Trust every step.
            </span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 md:text-lg md:leading-8">
                        Discover verified homes, trusted agents and AI-powered scam protection across Nigeria and beyond.
                    </p>
                </div>

                {/* Bottom */}
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#F3E7D4]">
                            Featured Property
                        </p>

                        <h3 className="mt-1 font-serif text-lg md:text-2xl">
                            {heroSlides[current].title}
                        </h3>

                        <p className="text-xs text-white/80 md:text-sm">
                            {heroSlides[current].location}
                        </p>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    current === index
                                        ? "w-7 bg-white"
                                        : "w-2.5 bg-white/40"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;