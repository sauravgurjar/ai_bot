import React, { useState } from "react";
import { useChat } from "./hooks/useChat";
import { simulateAIResponse } from "./services/aiService";
import ChatInput from "./chat/components/ChatInput";
import TopNav from "./chat/components/TopNav";
import HomeScreen from "./chat/components/HomeScreen";
import ChatScreen from "./chat/components/ChatScreen";

const ThinkAIHome: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const {
        messages,
        inputValue,
        setInputValue,
        isTyping,
        setIsTyping,
        isChatMode,
        setIsChatMode,
        addMessage,
        messagesEndRef,
    } = useChat();

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now().toString(),
            content: inputValue,
            sender: "user" as const,
            timestamp: new Date(),
        };
        addMessage(userMessage);
        setInputValue("");
        setIsChatMode(true);

        await simulateAIResponse(userMessage.content, addMessage, setIsTyping);
    };

    return (
        <div
            className={`min-h-screen flex flex-col ${
                isDarkMode ? "bg-black" : "bg-gray-50"
            }`}
        >
            <TopNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <div className="flex-1 flex flex-col min-h-0">
                {!isChatMode ? (
                    <HomeScreen isDarkMode={isDarkMode} />
                ) : (
                    <ChatScreen
                        messages={messages}
                        isDarkMode={isDarkMode}
                        isTyping={isTyping}
                        messagesEndRef={messagesEndRef}
                    />
                )}
            </div>

            <ChatInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSend={handleSendMessage}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};

export default ThinkAIHome;
