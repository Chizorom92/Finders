import DashboardLayout from "../../layouts/DashboardLayout";
import Hero from "../../components/home/Hero.jsx";
import SearchCard from "../../components/home/SearchCard.jsx";
import StatsSection from "../../components/home/StatsSection.jsx";
import FeaturedOpportunities from "../../components/home/FeaturedOpportunities.jsx";
import PropertyTypeSection from "../../components/home/PropertyTypeSection.jsx";
import ProtectionSection from "../../components/home/ProtectionSection.jsx";
import VerifiedAgentsSection from "../../components/home/VerifiedAgentsSection.jsx";
import ScamFreeCTA from "../../components/home/ScamFreeCTA.jsx";
import Footer from "../../components/home/Footer.jsx";

const Home = () => {
    return (
        <DashboardLayout>
            <div className="px-4 py-4 md:px-6 lg:px-8">

                <Hero />

                <div className="relative z-20 -mt-8 md:-mt-10 lg:px-8">
                    <SearchCard />
                </div>

                <div className="mt-10 lg:px-8">
                    <FeaturedOpportunities />
                </div>

                <div className="mt-16 lg:px-8">
                    <PropertyTypeSection />
                </div>

                <div className="mt-16 lg:px-8">
                    <ProtectionSection />
                </div>

                <div className="mt-16">
                    <VerifiedAgentsSection />
                </div>

                <div className="mt-16">
                    <ScamFreeCTA />
                </div>

                <div className="mt-16">
                    <StatsSection />
                </div>

                <div className="mt-16">
                    <Footer />
                </div>

            </div>
        </DashboardLayout>
    );
};

export default Home;