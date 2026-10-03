import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

import ScamHero from "../../components/ai/scamDetector/ScamHero";
import InvestigationForm from "../../components/ai/scamDetector/InvestigationForm";
import RiskScanner from "../../components/ai/scamDetector/RiskScanner";
import RiskOrb from "../../components/ai/scamDetector/RiskOrb";
import ScamSignals from "../../components/ai/scamDetector/ScamSignals.jsx";
import SafeActions from '../../components/ai/scamDetector/SafeActions.jsx';

const ScamDetector = () => {
    const navigate = useNavigate();

    const [method, setMethod] = useState("url");
    const [query, setQuery] = useState("");
    const [price, setPrice] = useState("");

    const [investigating, setInvestigating] = useState(false);
    const [investigationComplete, setInvestigationComplete] = useState(false);
    const [riskScore, setRiskScore] = useState(90);
    const startInvestigation = () => {
        if (!query) return;

        // Hide previous result
        setInvestigationComplete(false);

        // Show scanner
        setInvestigating(true);
    };



    return (
        <DashboardLayout>
            <div className="space-y-8 p-4 md:p-6 lg:p-8">
                <ScamHero />

                <InvestigationForm
                    method={method}
                    setMethod={setMethod}
                    query={query}
                    setQuery={setQuery}
                    price={price}
                    setPrice={setPrice}
                    onInvestigate={startInvestigation}
                />

                {investigating && (
                    <RiskScanner
                        visible={true}
                        onComplete={() => {
                            setInvestigating(false);

                            setRiskScore(78);

                            setInvestigationComplete(true);
                        }}
                    />
                )}

                {/* Results */}
                {!investigating && investigationComplete && (
                    <>
                        <RiskOrb score={riskScore} />
                        <ScamSignals />
                        <SafeActions />
                    </>
                )}
            </div>
        </DashboardLayout>
    );
};

export default ScamDetector;