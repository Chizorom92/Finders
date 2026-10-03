import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import ScanHero from "../../components/ai/scanDocuments/ScanHero";
import DocumentTypeSelector from "../../components/ai/scanDocuments/DocumentTypeSelector";
import UploadZone from "../../components/ai/scanDocuments/UploadZone.jsx";
import ScanAnalyzer from "../../components/ai/scanDocuments/ScanAnalyzer.jsx";
import AuthenticityReport from "../../components/ai/scanDocuments/AuthenticityReport.jsx";
import FindingsPanel from "../../components/ai/scanDocuments/FindingsPanel.jsx";
import DocumentViewer from "../../components/ai/scanDocuments/DocumentViewer.jsx";



const ScanDocuments = () => {
    const [selectedType, setSelectedType] = useState("cofo");
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);
    const [authScore, setAuthScore] = useState(92);

    const navigate = useNavigate();

    return (
        <DashboardLayout>
        <div className="space-y-8 p-4 md:p-6 lg:p-8">
            <ScanHero />

            <DocumentTypeSelector
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />

            <UploadZone
                selectedType={selectedType}
                uploadedFile={uploadedFile}
                setUploadedFile={setUploadedFile}
            />

            {uploadedFile && !isScanning && !scanComplete && (
                <button
                    onClick={() => setIsScanning(true)}
                    className="w-full rounded-2xl bg-[#7C2338] py-4 text-lg font-semibold text-white transition hover:bg-[#8B2941]"
                >
                    Analyze Document
                </button>
            )}

            <ScanAnalyzer
                visible={isScanning}
                onComplete={() => {
                    setIsScanning(false);

                    // Demo score for now
                    setAuthScore(92);

                    setScanComplete(true);
                }}
            />

            {scanComplete && (
                <>
                    <AuthenticityReport
                        score={authScore}
                        onOpenScamDetector={() => navigate("/scam-detector")}
                    />
                    <FindingsPanel />
                    <DocumentViewer />
                </>
            )}

        </div>
        </DashboardLayout>
    );
};

export default ScanDocuments;