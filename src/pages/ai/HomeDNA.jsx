import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import { useState } from "react";
import DNAHero from "../../components/ai/homeDNA/DNAHero";
import PropertySelector from "../../components/ai/homeDNA/PropertySelector";
import DNAScanner from "../../components/ai/homeDNA/DNAScanner";
import DNABars from "../../components/ai/homeDNA/DNABars.jsx";
import DNAOrb from "../../components/ai/homeDNA/DNAOrb.jsx";
import DimensionReveal from "../../components/ai/homeDNA/DimensionReveal.jsx";
import AIInsight from "../../components/ai/homeDNA/AIInsight.jsx";
import NeighborhoodExplorer from "../../components/ai/homeDNA/NeighborhoodExplorer.jsx";
import FinalDNAReport from "../../components/ai/homeDNA/FinalDNAReport.jsx"


function HomeDNA() {

    const [showScanner, setShowScanner] = useState(false);
    const [analysisComplete, setAnalysisComplete] = useState(false);

    const startAnalysis = () => {
        setAnalysisComplete(false);
        setShowScanner(true);
    };

    return (

        <DashboardLayout>
            <div className="space-y-10 p-4 md:p-6 lg:p-8">
                <DNAHero
                    onAnalyze={() => {
                        setShowScanner(true);
                        setAnalysisComplete(false);

                        setTimeout(() => {
                            document
                                .getElementById("dna-scanner")
                                ?.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                    }}
                />

                <PropertySelector />

                <DNAScanner
                    visible={showScanner}
                    onComplete={() => {
                        setAnalysisComplete(true);
                    }}
                />

                {analysisComplete && (
                    <>
                        <DNAOrb />

                        <DNABars animate={analysisComplete} />

                        <DimensionReveal />

                        <AIInsight />

                        <NeighborhoodExplorer />

                        <FinalDNAReport />

                    </>

                )}

            </div>
        </DashboardLayout>
    );
}

export default HomeDNA;