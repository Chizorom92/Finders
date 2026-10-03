import { PiggyBank, Home } from "lucide-react";

const GoalTracker = ({ totalBudget, currency, savings, setSavings }) => {
    const remaining = Math.max(totalBudget - savings, 0);

    const progress =
        totalBudget === 0
            ? 0
            : Math.min((savings / totalBudget) * 100, 100);

    const monthlyGoal = Math.ceil(remaining / 36);

    const format = (value) =>
        new Intl.NumberFormat().format(Math.round(value));

    return (
        <section
            className="
        rounded-[32px] p-8 transition-all duration-500
        bg-[var(--surface)]
        border border-[var(--border)]
        dark:bg-gradient-to-br dark:from-[#151821] dark:to-[#2A1020]
        dark:border-white/10
        dark:shadow-[0_0_60px_rgba(124,35,56,0.25)]
      "
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7C2338] text-white shadow-lg">
                    <PiggyBank size={22} />
                </div>

                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#7C2338] dark:text-[#E6C27A]">
                        Goal Tracker
                    </p>
                    <h2 className="font-serif text-3xl font-bold text-[#4A2E24] dark:text-white">
                        Dream Home Fund
                    </h2>
                </div>
            </div>

            <p className="mt-3 max-w-2xl text-[#6B5B4D] dark:text-gray-300">
                Tell Finder how much you've already saved and we'll track your progress
                toward your move-in budget.
            </p>

            {/* Input */}
            <div className="mt-6">
                <label className="mb-2 block font-medium text-[#5C4033] dark:text-gray-200">
                    How much have you already saved?
                </label>

                <div
                    className="
            rounded-2xl p-4
            bg-[var(--surface-2)]
            dark:bg-white/5
            dark:border dark:border-white/10
            dark:backdrop-blur-md
          "
                >
                    <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#7C2338] dark:text-[#E6C27A]">
              {currency}
            </span>

                        <input
                            type="number"
                            value={savings}
                            onChange={(e) => setSavings(Number(e.target.value))}
                            className="w-full bg-transparent text-lg outline-none dark:text-white"
                            placeholder="0"
                        />
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="mt-8">
                <div className="mb-3 flex justify-between text-sm font-medium">
          <span className="text-[#6B5B4D] dark:text-gray-300">
            {progress.toFixed(0)}% Completed
          </span>

                    <span className="text-[#6B5B4D] dark:text-gray-300">
            {currency}
                        {format(savings)} / {format(totalBudget)}
          </span>
                </div>

                <div className="relative h-4 overflow-hidden rounded-full bg-[#D8C3AE] dark:bg-white/10">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-[#A14B60] via-[#D88A9D] to-[#E6C27A] transition-all duration-700"
                        style={{ width: `${progress}%` }}
                    />

                    <div
                        className="absolute top-1/2 -translate-y-1/2 transition-all duration-700"
                        style={{ left: `calc(${progress}% - 16px)` }}
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6C27A] shadow-[0_0_18px_#E6C27A]">
                            <Home size={16} color="#4A2E24" />
                        </div>
                    </div>
                </div>

                {/* Milestones */}
                <div className="mt-6 flex justify-between">
                    {[10, 25, 50, 75, 100].map((mark) => (
                        <div key={mark} className="flex flex-col items-center gap-2">
                            <div
                                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${
                                    progress >= mark
                                        ? "bg-[#E6C27A] text-black shadow-[0_0_16px_#E6C27A]"
                                        : "bg-[#D8C3AE] text-[#7C2338] dark:bg-white/10 dark:text-white"
                                }`}
                            >
                                {mark}
                            </div>

                            <span className="text-xs text-[#6B5B4D] dark:text-gray-400">
                {mark}%
              </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Statistics */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div
                    className="
            rounded-2xl p-5 transition
            bg-[var(--surface-2)]
            dark:bg-white/5
            dark:border dark:border-white/10
            dark:backdrop-blur-md
          "
                >
                    <p className="text-sm text-[#7C2338] dark:text-[#E6C27A]">Saved</p>
                    <h3 className="mt-2 text-2xl font-bold text-[#4A2E24] dark:text-white">
                        {currency}
                        {format(savings)}
                    </h3>
                </div>

                <div
                    className="
            rounded-2xl p-5 transition
            bg-[var(--surface-2)]
            dark:bg-white/5
            dark:border dark:border-white/10
            dark:backdrop-blur-md
          "
                >
                    <p className="text-sm text-[#7C2338] dark:text-[#E6C27A]">
                        Remaining
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#4A2E24] dark:text-white">
                        {currency}
                        {format(remaining)}
                    </h3>
                </div>

                <div
                    className="
            rounded-2xl p-5 transition
            bg-[var(--surface-2)]
            dark:bg-white/5
            dark:border dark:border-white/10
            dark:backdrop-blur-md
          "
                >
                    <p className="text-sm text-[#7C2338] dark:text-[#E6C27A]">
                        36-Month Goal
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#4A2E24] dark:text-white">
                        {currency}
                        {format(monthlyGoal)}
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default GoalTracker;