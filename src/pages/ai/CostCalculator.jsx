import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import CostHero from "../../components/ai/cost/CostHero";
import CountrySelector from "../../components/ai/cost/CountrySelector.jsx";
import ExpenseBuilder from "../../components/ai/cost/ExpenseBuilder.jsx";
import BudgetOrb from "../../components/ai/cost/BudgetOrb.jsx";
import CostDNA from "../../components/ai/cost/CostDNA.jsx";
import SavingsCoach from "../../components/ai/cost/SavingsCoach.jsx";
import SavingsBreakdown from "../../components/ai/cost/SavingsBreakdown.jsx";
import GoalTracker from "../../components/ai/cost/GoalTracker.jsx";


const CostCalculator = () => {
    const [selectedType, setSelectedType] = useState("rent");
    const [selectedCountry, setSelectedCountry] = useState("nigeria");
    const [selectedCity, setSelectedCity] = useState("Lagos");
    const [showBreakdown, setShowBreakdown] = useState(false);
    const [savings, setSavings] = useState(0);

    const [expenses, setExpenses] = useState({
        // Rent
        rent: 45000000,
        agency: 100000,
        agreement: 30000,
        caution: 50000,
        utilities: 100000,

        // Buy
        survey: 0,
        legal: 0,
        stamp: 0,
        mortgage: 0,

        // Move
        moving: 40000,
        packing: 0,
        labour: 0,
        storage: 0,
        distance: 0,

        // Renovate
        painting: 0,
        pop: 0,
        flooring: 0,
        kitchen: 0,
        bathroom: 0,

        // Furnish
        bedroom: 0,
        living: 0,
        appliances: 0,
        dining: 0,
        decor: 0,

        // Utilities
        electricity: 0,
        internet: 0,
        water: 0,
        gas: 0,
        deposit: 0,
    });

    const currencies = {
        nigeria: "₦",
        canada: "CA$",
        uk: "£",
        uae: "AED",
        germany: "€",
    };

    const currency = currencies[selectedCountry];

    const total = Object.values(expenses).reduce(
        (sum, value) => sum + Number(value || 0),
        0
    );

    return (
        <DashboardLayout>
            <div className="space-y-8 p-4 md:p-6 lg:p-8">

                <CostHero
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />


                <CountrySelector
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                />

                <ExpenseBuilder
                    selectedType={selectedType}
                    currency={currency}
                    expenses={expenses}
                    setExpenses={setExpenses}
                />

                <BudgetOrb
                    expenses={expenses}
                    currency={currency}
                />

                <CostDNA
                    expenses={expenses}
                    currency={currency}
                />

                <SavingsCoach
                    expenses={expenses}
                    currency={currency}
                    open={showBreakdown}
                    setOpen={setShowBreakdown}
                />

                <GoalTracker
                    totalBudget={total}
                    currency={currency}
                    savings={savings}
                    setSavings={setSavings}
                />

            </div>
        </DashboardLayout>
    );
};

export default CostCalculator;