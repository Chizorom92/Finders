import { Send, Bot, User } from "lucide-react";

const ChatInterface = ({
                           messages,
                           message,
                           setMessage,
                           onSend,
                           isTyping,
                       }) => {
    return (
        <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-sm overflow-hidden">

            {/* Header */}
            <div className="border-b border-[var(--border)] bg-gradient-to-r from-[#61182A] to-[#8A2F46] px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        <Bot size={22} />
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold">
                            Finder AI Chat
                        </h3>
                        <p className="text-sm text-white/80">
                            Online • Housing & Relocation Assistant
                        </p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="h-[420px] space-y-5 overflow-y-auto p-4 md:p-6">

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${
                            msg.role === "user"
                                ? "justify-end"
                                : "justify-start"
                        }`}
                    >
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="flex max-w-[75%] gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C2338] text-white">
                                        <Bot size={18} />
                                    </div>

                                    <div className="rounded-3xl bg-[var(--surface-2)] px-4 py-3">
                                        <div className="flex gap-1">
                                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#7C2338]" />
                                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#7C2338] [animation-delay:0.2s]" />
                                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#7C2338] [animation-delay:0.4s]" />
                                        </div>

                                        <p className="mt-2 text-xs text-[var(--text-light)]">
                                            Finder AI is typing...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div
                            className={`flex max-w-[92%] gap-3 md:max-w-[75%] ${
                                msg.role === "user"
                                    ? "flex-row-reverse"
                                    : ""
                            }`}
                        >
                            {/* Avatar */}
                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                                    msg.role === "assistant"
                                        ? "bg-[#7C2338] text-white"
                                        : "bg-[var(--surface-2)] text-[var(--text)]"
                                }`}
                            >
                                {msg.role === "assistant" ? (
                                    <Bot size={18} />
                                ) : (
                                    <User size={18} />
                                )}
                            </div>

                            {/* Bubble */}
                            <div
                                className={`rounded-3xl px-4 py-3 ${
                                    msg.role === "assistant"
                                        ? "bg-[var(--surface-2)] text-[var(--text)]"
                                        : "bg-[#7C2338] text-white"
                                }`}
                            >
                                <p className="leading-7 whitespace-pre-wrap">
                                    {msg.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Input */}
            <div className="border-t border-[var(--border)] p-3 md:p-4">
                <div className="flex items-end gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-2">

          <textarea
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about a listing, landlord, visa, relocation or documents..."
              className="max-h-36 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-2 outline-none"
              onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      onSend();
                  }
              }}
          />

                    <button
                        onClick={onSend}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7C2338] text-white transition hover:bg-[#651B2D]"
                    >
                        <Send size={18} />
                    </button>

                </div>

                <p className="mt-2 text-center text-xs text-[var(--text-light)]">
                    Press Enter to send • Shift + Enter for a new line
                </p>
            </div>
        </section>
    );
};

export default ChatInterface;