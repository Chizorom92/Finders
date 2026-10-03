import { useRef } from "react";
import { UploadCloud, FileText, Sparkles } from "lucide-react";

const UploadZone = ({
                        selectedType,
                        uploadedFile,
                        setUploadedFile,
                    }) => {
    const inputRef = useRef();

    const handleFile = (file) => {
        if (!file) return;
        setUploadedFile(file);
    };

    const loadSample = () => {
        setUploadedFile({
            name: "Sample_Certificate_of_Occupancy.pdf",
            size: 2450000,
            isSample: true,
        });
    };

    return (
        <section className="rounded-[30px] bg-[var(--surface)] border border-[var(--border)] p-6 transition-colors duration-300">
            {/* Header */}
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Upload Document
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Secure AI Verification
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Finder AI accepts PDF, JPG, PNG and DOCX documents for authenticity
                    analysis.
                </p>
            </div>

            {/* Hidden input */}
            <input
                ref={inputRef}
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0])}
            />

            {/* Upload Zone */}
            <div
                onClick={() => inputRef.current?.click()}
                className="
          group relative cursor-pointer overflow-hidden
          rounded-3xl border-2 border-dashed
          border-[var(--primary)]/30
          bg-[var(--surface-2)]
          p-10 text-center
          transition-all duration-300
          hover:border-[var(--primary)]
          dark:bg-white/5
          dark:border-white/15
          dark:hover:border-[#E6C27A]
          dark:backdrop-blur-md
        "
            >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(124,35,56,0.08),transparent_70%)]" />

                <div className="relative z-10">
                    {/* Icon */}
                    <div
                        className="
              mx-auto mb-5 flex h-20 w-20 items-center justify-center
              rounded-full
              bg-[#7C2338]/10
              dark:bg-[#A14B60]/20
              dark:border dark:border-white/10
            "
                    >
                        <UploadCloud
                            size={36}
                            className="text-[#7C2338] dark:text-[#F2D6DD]"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--text)]">
                        Drop your document here
                    </h3>

                    <p className="mt-3 text-[var(--text-light)]">
                        or click anywhere inside this area to browse files
                    </p>

                    {/* File types */}
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {["PDF", "JPG", "PNG", "DOCX"].map((type) => (
                            <span
                                key={type}
                                className="
                  rounded-full px-4 py-2 text-sm font-medium
                  bg-[var(--surface)]
                  border border-[var(--border)]
                  text-[var(--text)]
                  dark:bg-white/10
                  dark:border-white/10
                  dark:text-white
                "
                            >
                {type}
              </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
                <button
                    onClick={() => inputRef.current?.click()}
                    className="
            rounded-2xl px-5 py-3 font-semibold text-white
            bg-[var(--primary)]
            transition-all duration-300
            hover:scale-[1.02]
            hover:bg-[#8B2941]
          "
                >
                    Browse Files
                </button>

                <button
                    onClick={loadSample}
                    className="
            rounded-2xl px-5 py-3 font-semibold
            border border-[var(--border)]
            text-[var(--primary)]
            bg-transparent
            transition-all duration-300
            hover:bg-[var(--surface-2)]
            dark:border-white/10
            dark:text-[#E6C27A]
            dark:hover:bg-white/5
          "
                >
          <span className="flex items-center gap-2">
            <Sparkles size={18} />
            Try Sample Document
          </span>
                </button>
            </div>

            {/* Uploaded file */}
            {uploadedFile && (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900">
                            <FileText className="text-emerald-700 dark:text-emerald-300" />
                        </div>

                        <div className="flex-1">
                            <h4 className="font-semibold text-[var(--text)]">
                                {uploadedFile.name}
                            </h4>

                            <p className="text-sm text-[var(--text-light)]">
                                {selectedType.toUpperCase()} •{" "}
                                {uploadedFile.isSample
                                    ? "Demo Document"
                                    : `${(uploadedFile.size / 1000000).toFixed(2)} MB`}
                            </p>
                        </div>

                        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
              Ready
            </span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UploadZone;