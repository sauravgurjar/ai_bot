import React from "react";
import { User, Bot } from "lucide-react";
import { Message } from "../types";

interface Props {
    message: Message;
    isDarkMode: boolean;
}

const ChatMessage: React.FC<Props> = ({ message, isDarkMode }) => (
    <div
        className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
        } mb-4 animate-message-in`}
    >
        <div
            className={`flex items-start space-x-3 max-w-3xl ${
                message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
            }`}
        >
            {/* Avatar always left of bubble */}
            <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
          ${
                    message.sender === "user"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                }`}
            >
                {message.sender === "user" ? (
                    <User size={16} className="text-white" />
                ) : (
                    <Bot size={16} className="text-white" />
                )}
            </div>

            {/* Bubble */}
            <div
                className={`px-4 py-3 rounded-2xl shadow-lg max-w-xs sm:max-w-md md:max-w-lg
          ${
                    message.sender === "user"
                        ? isDarkMode
                            ? "bg-purple-600 text-white"
                            : "bg-purple-500 text-white"
                        : isDarkMode
                            ? "bg-gray-700 text-gray-200 border border-gray-600"
                            : "bg-white text-gray-800 border border-gray-200"
                }`}
            >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                </p>
            </div>
        </div>
    </div>
);

export default ChatMessage;
