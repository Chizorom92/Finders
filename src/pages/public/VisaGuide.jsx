import DashboardLayout from "../../layouts/DashboardLayout";
import VisaHero from "../../components/international/VisaHero";
import VisaCategories from "../../components/international/VisaCategories.jsx"
import VisaChecklist from "../../components/international/VisaChecklist.jsx"
import CountryRequirements from "../../components/international/CountryRequirements.jsx"
import VisaAICTA from "../../components/international/VisaAICTA.jsx"


const VisaGuide = () => {
    return (
        <DashboardLayout>
            <div className="space-y-8 p-4 md:p-6 lg:p-8">

                <VisaHero />

                <VisaCategories />

                <VisaChecklist />

                <CountryRequirements />

                <VisaAICTA />

            </div>
        </DashboardLayout>
    );
};

export default VisaGuide;