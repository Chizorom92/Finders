import DashboardLayout from "../../layouts/DashboardLayout";
import VisaHero from "../../components/International/VisaHero";
import VisaCategories from "../../components/International/VisaCategories.jsx"
import VisaChecklist from "../../components/International/VisaChecklist.jsx"
import CountryRequirements from "../../components/International/CountryRequirements.jsx"
import VisaAICTA from "../../components/International/VisaAICTA.jsx"


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