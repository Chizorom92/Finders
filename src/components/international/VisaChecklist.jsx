import { useState } from "react";
import {
    CheckCircle2,
    FileText,
    CreditCard,
    Wallet,
    Home,
    ShieldCheck,
} from "lucide-react";

const VisaChecklist = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Valid international passport", done: true, icon: CreditCard },
        { id: 2, title: "Visa application form", done: false, icon: FileText },
        { id: 3, title: "Proof of funds", done: false, icon: Wallet },
        { id: 4, title: "Accommodation / housing proof", done: false, icon: Home },
        { id: 5, title: "Travel & health insurance", done: false, icon: ShieldCheck },
    ]);

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const completed = tasks.filter((t) => t.done).length;
    const progress = (completed / tasks.length) * 100;

    return (
        <section className="space-y-6">
            <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    RELOCATION CHECKLIST
                </p>

                <h2 className="mt-2 font-serif text-4xl font-bold text-[var(--text)]">
                    Prepare your documents
                </h2>

                <p className="mt-3 leading-7 text-[var(--text-light)]">
                    Keep track of the essential documents required before renting and relocating abroad.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                {/* Checklist */}
                <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
                    <div className="space-y-4">
                        {tasks.map((task) => {
                            const Icon = task.icon;

                            return (
                                <button
                                    key={task.id}
                                    onClick={() => toggleTask(task.id)}
                                    className={`flex w-full items-center justify-between rounded-2xl border p-4 transition ${
                                        task.done
                                            ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30"
                                            : "border-[var(--border)] hover:bg-[var(--surface-2)]"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`rounded-xl p-3 ${
                                                task.done
                                                    ? "bg-emerald-600 text-white"
                                                    : "bg-[var(--surface-2)] text-[var(--primary)]"
                                            }`}
                                        >
                                            <Icon size={20} />
                                        </div>

                                        <span
                                            className={`font-medium ${
                                                task.done ? "line-through text-gray-500" : "text-[var(--text)]"
                                            }`}
                                        >
                      {task.title}
                    </span>
                                    </div>

                                    <CheckCircle2
                                        size={24}
                                        className={
                                            task.done
                                                ? "text-emerald-600"
                                                : "text-gray-300 dark:text-gray-600"
                                        }
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Card */}
                <div className="rounded-[28px] bg-gradient-to-b from-[#7C2338] to-[#A14B60] p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                        Progress
                    </p>

                    <h3 className="mt-2 text-5xl font-bold">{completed}/{tasks.length}</h3>

                    <p className="mt-1 text-white/80">Documents completed</p>

                    <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">
                        <div
                            className="h-full rounded-full bg-white transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className="mt-3 text-sm text-white/90">
                        {Math.round(progress)}% ready for relocation
                    </p>

                    <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-wider text-white/70">
                            Finder Tip
                        </p>

                        <p className="mt-2 text-sm leading-6 text-white/90">
                            Secure accommodation before arrival to strengthen many visa and rental applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaChecklist;