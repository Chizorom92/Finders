import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import AIHero from "../../components/ai/AIHero";
import QuickActions from "../../components/ai/QuickActions";
import ChatInterface from "../../components/ai/ChatInterface";
import SuggestedPrompts from "../../components/ai/SuggestedPrompts.jsx";

const FinderAI = () => {
    const [message, setMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const [messages, setMessages] = useState([
        {
            id: 1,
            role: "assistant",
            content:
                "Hello! I'm Finder AI. I can help you analyze listings, explain tenancy agreements, compare countries, estimate relocation costs, and answer housing questions.",
        },
    ]);

    const getAIReply = (text) => {
        const lower = text.toLowerCase();

        if (lower.includes("visa")) {
            return "Student visas usually require admission documents, proof of funds, a valid passport, and medical requirements. I can also explain country-specific visa rules.";
        }

        if (lower.includes("agent")) {
            return "Before paying an agent, verify their identity, request their registration details, and avoid cash payments without receipts.";
        }

        if (lower.includes("listing")) {
            return "A listing may be suspicious if the rent is unusually low, the owner refuses physical inspection, or they pressure you to pay immediately.";
        }

        if (lower.includes("country")) {
            return "I can compare countries by rent, safety, transport, salaries, student life, and cost of living.";
        }

        return "Great question. This is a demo response for now. Later, Finder AI will use the OpenAI API to give intelligent real-time housing advice.";
    };

    const sendMessage = (text) => {
        if (!text.trim()) return;

        const userMessage = {
            id: Date.now(),
            role: "user",
            content: text,
        };

        setMessages((prev) => [...prev, userMessage]);
        setMessage("");
        setIsTyping(true);

        setTimeout(() => {
            const reply = {
                id: Date.now() + 1,
                role: "assistant",
                content: getAIReply(text),
            };

            setMessages((prev) => [...prev, reply]);
            setIsTyping(false);
        }, 1200);
    };

    const handleSend = () => sendMessage(message);

    return (
        <DashboardLayout>
            <div className="space-y-8 p-4 md:p-6 lg:p-8">

                <AIHero />

                <QuickActions onSelect={sendMessage} />

                <SuggestedPrompts onSelect={sendMessage} />

                <ChatInterface
                    messages={messages}
                    message={message}
                    setMessage={setMessage}
                    onSend={handleSend}
                    isTyping={isTyping}
                />
            </div>
        </DashboardLayout>
    );
};

export default FinderAI;