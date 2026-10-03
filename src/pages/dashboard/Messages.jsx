import { useMemo, useState } from "react";
import {
    ArrowLeft,
    BadgeCheck,
    Check,
    MessageSquare,
    MoreVertical,
    Paperclip,
    Search,
    Send,
} from "lucide-react";

import { conversations as initialConversations } from "./messagesData";

export default function Messages() {
    const [conversations, setConversations] = useState(
        initialConversations
    );

    const [selectedId, setSelectedId] = useState(
        initialConversations[0]?.id ?? null
    );

    const [searchQuery, setSearchQuery] = useState("");
    const [messageText, setMessageText] = useState("");

    const [showConversation, setShowConversation] = useState(false);

    const filteredConversations = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return conversations;
        }

        return conversations.filter((conversation) => {
            return (
                conversation.name.toLowerCase().includes(query) ||
                conversation.property.toLowerCase().includes(query) ||
                conversation.location.toLowerCase().includes(query)
            );
        });
    }, [conversations, searchQuery]);

    const selectedConversation = conversations.find(
        (conversation) => conversation.id === selectedId
    );

    const selectConversation = (id) => {
        setSelectedId(id);
        setShowConversation(true);

        setConversations((current) =>
            current.map((conversation) =>
                conversation.id === id
                    ? { ...conversation, unread: 0 }
                    : conversation
            )
        );
    };

    const sendMessage = () => {
        const text = messageText.trim();

        if (!text || !selectedConversation) {
            return;
        }

        const newMessage = {
            id: Date.now(),
            sender: "user",
            text,
            time: new Date().toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
            }),
        };

        setConversations((current) =>
            current.map((conversation) =>
                conversation.id === selectedConversation.id
                    ? {
                        ...conversation,
                        lastMessage: text,
                        time: "Now",
                        messages: [
                            ...conversation.messages,
                            newMessage,
                        ],
                    }
                    : conversation
            )
        );

        setMessageText("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="flex min-h-full flex-col bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-6">

                <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                    MY SPACE
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                    Messages
                </h1>

                <p className="mt-2 text-sm text-[var(--text-light)] md:text-base">
                    Communicate securely with agents and property owners.
                </p>

            </section>

            {/* Messaging Workspace */}
            <section className="flex min-h-[650px] flex-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">

                {/* Conversations Sidebar */}
                <aside
                    className={`w-full border-r border-[var(--border)] md:flex md:w-[330px] md:flex-shrink-0 ${
                        showConversation ? "hidden" : "flex"
                    } flex-col`}
                >

                    {/* Conversation Header */}
                    <div className="border-b border-[var(--border)] p-4">

                        <div className="flex items-center justify-between">

                            <div>
                                <h2 className="font-semibold text-[var(--text)]">
                                    Conversations
                                </h2>

                                <p className="mt-1 text-xs text-[var(--text-light)]">
                                    {conversations.length} conversations
                                </p>
                            </div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                                <MessageSquare size={17} />
                            </div>

                        </div>

                        {/* Search */}
                        <div className="relative mt-4">

                            <Search
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                            />

                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
                                placeholder="Search conversations..."
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-2.5 pl-9 pr-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                            />

                        </div>

                    </div>

                    {/* Conversation List */}
                    <div className="flex-1 overflow-y-auto">

                        {filteredConversations.length > 0 ? (
                            filteredConversations.map((conversation) => {

                                const isSelected =
                                    conversation.id === selectedId;

                                return (
                                    <button
                                        key={conversation.id}
                                        type="button"
                                        onClick={() =>
                                            selectConversation(
                                                conversation.id
                                            )
                                        }
                                        className={`flex w-full gap-3 border-b border-[var(--border)] p-4 text-left transition ${
                                            isSelected
                                                ? "bg-[var(--surface-2)]"
                                                : "hover:bg-[var(--surface-2)]"
                                        }`}
                                    >

                                        {/* Avatar */}
                                        <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">

                                            {conversation.initials}

                                            {conversation.verified && (
                                                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--surface)]">
                                                    <BadgeCheck
                                                        size={14}
                                                        className="text-[var(--primary)]"
                                                    />
                                                </span>
                                            )}

                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">

                                            <div className="flex items-center justify-between gap-2">

                                                <p className="truncate text-sm font-semibold text-[var(--text)]">
                                                    {conversation.name}
                                                </p>

                                                <span className="flex-shrink-0 text-[10px] text-[var(--text-light)]">
                                                    {conversation.time}
                                                </span>

                                            </div>

                                            <p className="mt-1 truncate text-xs font-medium text-[var(--primary)]">
                                                {conversation.property}
                                            </p>

                                            <div className="mt-1 flex items-center justify-between gap-2">

                                                <p className="truncate text-xs text-[var(--text-light)]">
                                                    {conversation.lastMessage}
                                                </p>

                                                {conversation.unread > 0 && (
                                                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--primary)] px-1.5 text-[10px] font-semibold text-white">
                                                        {conversation.unread}
                                                    </span>
                                                )}

                                            </div>

                                        </div>

                                    </button>
                                );
                            })
                        ) : (
                            <div className="px-6 py-12 text-center">

                                <Search
                                    size={24}
                                    className="mx-auto text-[var(--text-light)]"
                                />

                                <p className="mt-3 text-sm font-medium text-[var(--text)]">
                                    No conversations found
                                </p>

                                <p className="mt-1 text-xs text-[var(--text-light)]">
                                    Try another search.
                                </p>

                            </div>
                        )}

                    </div>

                </aside>

                {/* Active Conversation */}
                <div
                    className={`min-w-0 flex-1 flex-col ${
                        showConversation ? "flex" : "hidden md:flex"
                    }`}
                >

                    {selectedConversation ? (
                        <>
                            {/* Conversation Header */}
                            <header className="flex items-center justify-between border-b border-[var(--border)] px-4 py-4 md:px-6">

                                <div className="flex min-w-0 items-center gap-3">

                                    {/* Mobile back */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConversation(false)
                                        }
                                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl hover:bg-[var(--surface-2)] md:hidden"
                                        aria-label="Back to conversations"
                                    >
                                        <ArrowLeft size={18} />
                                    </button>

                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-semibold text-white">
                                        {selectedConversation.initials}
                                    </div>

                                    <div className="min-w-0">

                                        <div className="flex items-center gap-1.5">

                                            <h2 className="truncate text-sm font-semibold text-[var(--text)]">
                                                {selectedConversation.name}
                                            </h2>

                                            {selectedConversation.verified && (
                                                <BadgeCheck
                                                    size={16}
                                                    className="flex-shrink-0 text-[var(--primary)]"
                                                />
                                            )}

                                        </div>

                                        <p className="mt-0.5 text-xs text-[var(--text-light)]">
                                            {selectedConversation.verified
                                                ? "Verified agent"
                                                : "Property contact"}
                                        </p>

                                    </div>

                                </div>

                                <button
                                    type="button"
                                    className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-[var(--surface-2)]"
                                    aria-label="Conversation options"
                                >
                                    <MoreVertical size={18} />
                                </button>

                            </header>

                            {/* Property Context */}
                            <div className="border-b border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 md:px-6">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] text-[var(--primary)]">
                                        <MessageSquare size={16} />
                                    </div>

                                    <div className="min-w-0">

                                        <p className="text-xs font-semibold text-[var(--text)]">
                                            {selectedConversation.property}
                                        </p>

                                        <p className="mt-0.5 truncate text-[11px] text-[var(--text-light)]">
                                            {selectedConversation.location}
                                        </p>

                                    </div>

                                    {selectedConversation.verified && (
                                        <span className="ml-auto hidden items-center gap-1 text-[11px] font-medium text-[var(--primary)] sm:flex">
                                            <BadgeCheck size={14} />
                                            Verified
                                        </span>
                                    )}

                                </div>

                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-4 py-6 md:px-6">

                                <div className="mx-auto max-w-3xl space-y-4">

                                    <div className="mb-6 text-center">

                                        <span className="rounded-full bg-[var(--surface-2)] px-3 py-1 text-[10px] text-[var(--text-light)]">
                                            Today
                                        </span>

                                    </div>

                                    {selectedConversation.messages.map(
                                        (message) => {
                                            const isUser =
                                                message.sender === "user";

                                            return (
                                                <div
                                                    key={message.id}
                                                    className={`flex ${
                                                        isUser
                                                            ? "justify-end"
                                                            : "justify-start"
                                                    }`}
                                                >

                                                    <div
                                                        className={`max-w-[80%] md:max-w-[65%] ${
                                                            isUser
                                                                ? "items-end"
                                                                : "items-start"
                                                        } flex flex-col`}
                                                    >

                                                        <div
                                                            className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                                                isUser
                                                                    ? "rounded-br-md bg-[var(--primary)] text-white"
                                                                    : "rounded-bl-md bg-[var(--surface-2)] text-[var(--text)]"
                                                            }`}
                                                        >
                                                            {message.text}
                                                        </div>

                                                        <div
                                                            className={`mt-1 flex items-center gap-1 text-[10px] text-[var(--text-light)] ${
                                                                isUser
                                                                    ? "flex-row-reverse"
                                                                    : ""
                                                            }`}
                                                        >

                                                            <span>
                                                                {message.time}
                                                            </span>

                                                            {isUser && (
                                                                <Check
                                                                    size={12}
                                                                    className="text-[var(--primary-light)]"
                                                                />
                                                            )}

                                                        </div>

                                                    </div>

                                                </div>
                                            );
                                        }
                                    )}

                                </div>

                            </div>

                            {/* Composer */}
                            <div className="border-t border-[var(--border)] p-4 md:p-5">

                                <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-2">

                                    <button
                                        type="button"
                                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[var(--text-light)] transition hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                                        aria-label="Attach file"
                                    >
                                        <Paperclip size={18} />
                                    </button>

                                    <textarea
                                        value={messageText}
                                        onChange={(event) =>
                                            setMessageText(
                                                event.target.value
                                            )
                                        }
                                        onKeyDown={handleKeyDown}
                                        rows={1}
                                        placeholder="Write a message..."
                                        className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-light)]"
                                    />

                                    <button
                                        type="button"
                                        onClick={sendMessage}
                                        disabled={!messageText.trim()}
                                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white transition hover:bg-[var(--primary-light)] disabled:cursor-not-allowed disabled:opacity-40"
                                        aria-label="Send message"
                                    >
                                        <Send size={17} />
                                    </button>

                                </div>

                                <p className="mt-2 text-center text-[10px] text-[var(--text-light)]">
                                    Press Enter to send · Shift + Enter for a new line
                                </p>

                            </div>
                        </>
                    ) : (
                        /* No conversation selected */
                        <div className="flex flex-1 items-center justify-center p-6 text-center">

                            <div>

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
                                    <MessageSquare size={28} />
                                </div>

                                <h2 className="mt-5 text-lg font-semibold text-[var(--text)]">
                                    Select a conversation
                                </h2>

                                <p className="mt-2 max-w-sm text-sm text-[var(--text-light)]">
                                    Choose a conversation from the list to
                                    start messaging.
                                </p>

                            </div>

                        </div>
                    )}

                </div>

            </section>

        </div>
    );
}