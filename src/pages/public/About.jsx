
import DashboardLayout from "../../layouts/DashboardLayout.jsx";

import { Link } from "react-router-dom";


const goals = [
    "Make property search faster and more convenient for everyone",
    "Connect seekers directly with verified agents and owners",
    "Reduce the risk of fraudulent or misleading listings",
    "Give property providers a trusted platform to reach genuine interested parties",
    "Deliver clear, up-to-date information so you can make confident decisions",
];

const features = [
    "Secure registration",
    "Powerful search tools",
    "Rich property listings with images",
    "A verification system for agents and owners",
    "Easy inquiry options",
    "The ability to save properties you are interested in",
];

function About() {
    return (
        <DashboardLayout activeKey="about" user={{ name: "Guest User" }}>
            <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
                <section className="max-w-4xl">
                    <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[var(--primary)]">
                        ABOUT FINDERS
                    </p>
                    <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                        Find a place you can trust, wherever you are.
                    </h1>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-light)] sm:text-lg">
                        Finders is a modern digital property-finding platform designed to help people discover trusted homes, apartments, lands, and commercial properties anywhere in the world. Whether you&apos;re an international student looking for accommodation near campus, a tourist seeking a short-term stay, a professional relocating for work, or simply searching for your next home or investment, Finders makes the process easier, safer, and more transparent.
                    </p>
                </section>

                <section className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
                    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm sm:p-9">
                        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--primary)]">
                            WHY FINDERS EXISTS
                        </p>
                        <h2 className="mt-4 text-3xl leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
                            Property search should not feel like a gamble.
                        </h2>
                        <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--text-light)] sm:text-base">
                            <p>
                                Finding a suitable property can be stressful. Fake listings, unverified agents, outdated information, and difficulty connecting with legitimate owners create unnecessary risk and frustration — especially when you&apos;re searching from another country or city.
                            </p>
                            <p>
                                Finders was built to solve these problems by acting as a reliable bridge between property seekers and verified owners or agents.
                            </p>
                        </div>
                    </article>

                    <aside className="rounded-3xl bg-[var(--primary)] p-7 text-white shadow-md sm:p-9">
                        <p className="text-xs font-semibold tracking-[0.18em] text-white/70">
                            BUILT FOR EVERY SEARCH
                        </p>
                        <p className="mt-5 text-2xl leading-tight tracking-tight sm:text-3xl">
                            From a room near campus to your next investment anywhere in the world.
                        </p>
                        <p className="mt-5 text-sm leading-7 text-white/75">
                            Finders helps international students, tourists, relocating professionals, and everyday property seekers connect with trusted opportunities with greater confidence.
                        </p>
                    </aside>
                </section>

                <section className="mt-16 sm:mt-24" aria-labelledby="how-it-works-heading">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--primary)]">
                            HOW FINDERS HELPS
                        </p>
                        <h2
                            id="how-it-works-heading"
                            className="mt-3 text-3xl leading-tight tracking-tight text-[var(--text)] sm:text-4xl"
                        >
                            Clear information. Better decisions.
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-[var(--text-light)] sm:text-base">
                            On Finders, you can search for houses, apartments, duplexes, lands, commercial spaces, and more. Property owners and agents list their properties with detailed descriptions, clear photos, accurate locations, and transparent pricing. Seekers can filter by location, property type, price range, number of bedrooms and bathrooms, and purpose: rent, sale, or lease, then contact verified providers directly.
                        </p>
                    </div>
                </section>

                <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-label="Finders mission and features">
                    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm sm:p-9">
                        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--primary)]">
                            OUR MISSION
                        </p>
                        <ul className="mt-6 space-y-4">
                            {goals.map((goal) => (
                                <li
                                    key={goal}
                                    className="flex gap-3 text-sm leading-6 text-[var(--text-light)] sm:text-base"
                                >
                                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--primary)]" aria-hidden="true" />
                                    <span>{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm sm:p-9">
                        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--primary)]">
                            KEY FEATURES
                        </p>
                        <ul className="mt-6 space-y-4">
                            {features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex gap-3 text-sm leading-6 text-[var(--text-light)] sm:text-base"
                                >
                                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--primary)]" aria-hidden="true" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>

                <section className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-7 sm:mt-24 sm:p-10">
                    <p className="max-w-4xl text-xl leading-8 tracking-tight text-[var(--text)] sm:text-2xl sm:leading-9">
                        At Finders, we believe finding a place to stay or invest should feel safe and straightforward — no matter where you are in the world. We&apos;re here to help international students, tourists, relocating professionals, and everyday property seekers connect with trusted opportunities with greater confidence.
                    </p>
                    <Link
                        to="/search"
                        className="mt-7 inline-flex w-fit items-center justify-center rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                    >
                        Start searching
                    </Link>
                </section>
            </main>
        </DashboardLayout>
    );
}

export default About;
