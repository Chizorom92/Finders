import { User, Phone, MessageSquare } from "lucide-react";

const ContactCard = ({
                         fullName,
                         setFullName,
                         phone,
                         setPhone,
                         note,
                         setNote,
                     }) => {
    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Contact Information
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Who should the agent contact?
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Your details will only be shared with the verified Finders agent after
                    your inspection request is submitted.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                        Full Name
                    </label>

                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3">
                        <User className="text-[var(--primary)]" size={20} />

                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Igwe Munachi"
                            className="w-full bg-transparent outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                        Phone Number
                    </label>

                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3">
                        <Phone className="text-[var(--primary)]" size={20} />

                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234 801 234 5678"
                            className="w-full bg-transparent outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                    Note for the Agent (Optional)
                </label>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                    <div className="mb-3 flex items-center gap-2 text-[var(--primary)]">
                        <MessageSquare size={18} />
                        <span className="text-sm font-medium">Additional request</span>
                    </div>

                    <textarea
                        rows={4}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="I'd like to inspect the parking space and ask about service charges..."
                        className="w-full resize-none bg-transparent outline-none"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactCard;