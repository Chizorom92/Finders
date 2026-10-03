import DashboardLayout from "../../layouts/DashboardLayout";

import HeroSection from "../../components/international/HeroSection.jsx";
import CountryGrid from "../../components/International/CountryGrid.jsx";
import CurrencyCard from "../../components/International/CurrencyCard.jsx";
import FinderAICard from "../../components/international/FinderAICard.jsx";
import FeaturedListings from "../../components/international/FeaturedListings.jsx";
import SafetyChecklist from "../../components/international/SafetyChecklist.jsx";
import BrowseCountries from "../../components/International/BrowseCountries.jsx";
import VisaGuideCTA from "../../components/International/VisaGuideCTA.jsx";


const InternationalRental = () => {
    return (
        <DashboardLayout>
            <div className="p-4 md:p-6 lg:p-8 space-y-8">

                <HeroSection />

                <CountryGrid />

                <BrowseCountries />

                <VisaGuideCTA />

                <CurrencyCard />

                <FinderAICard />

                <SafetyChecklist />

            </div>
        </DashboardLayout>
    );
};

export default InternationalRental;