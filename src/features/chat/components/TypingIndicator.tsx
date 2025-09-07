import React from "react";

const TypingIndicator: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
    <div className="flex items-center space-x-2 py-2">
        <div className={`flex space-x-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            <div className="flex space-x-1">
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <span className="text-sm ml-2">ThinkAI is typing...</span>
        </div>
    </div>
);

export default TypingIndicator;
