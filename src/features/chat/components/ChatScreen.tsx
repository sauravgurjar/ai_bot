import React from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

interface Props {
    messages: any[];
    isDarkMode: boolean;
    isTyping: boolean;
    messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const ChatScreen: React.FC<Props> = ({ messages, isDarkMode, isTyping, messagesEndRef }) => {
    return (
        <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
                <ChatMessage key={m.id} message={m} isDarkMode={isDarkMode} />
            ))}
            {isTyping && <TypingIndicator isDarkMode={isDarkMode} />}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatScreen;
