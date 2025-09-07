import React, { useRef, useEffect } from "react";
import { Send, Camera, Paperclip } from "lucide-react";

interface Props {
    inputValue: string;
    setInputValue: (val: string) => void;
    onSend: () => void;
    isDarkMode: boolean;
}

const ChatInput: React.FC<Props> = ({
                                        inputValue,
                                        setInputValue,
                                        onSend,
                                        isDarkMode,
                                    }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // auto-grow up to 5 lines
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 5 * 24)}px`; // 24px ≈ line-height
        }
    }, [inputValue]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (inputValue.trim()) {
                onSend();
            }
        }
    };

    return (
        <div
            className={`w-full p-4 border-t ${
                isDarkMode
                    ? "border-gray-700 bg-gray-800/50"
                    : "border-gray-200 bg-white/50"
            } backdrop-blur-sm`}
        >
            <div className="relative w-full">
        <textarea
            ref={textareaRef}
            placeholder="Type your message here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            className={`w-full px-4 py-3 pb-5 pr-24 rounded-2xl border resize-none focus:ring-2 focus:ring-purple-500 leading-relaxed ${
                isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-200"
                    : "bg-white border-gray-300 text-gray-900"
            }`}
            style={{
                maxHeight: "120px", // 5 lines
                overflowY: "auto",
            }}
        />
                <div className="absolute right-3 bottom-4 flex items-center space-x-2">
                    <button
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                        type="button"
                    >
                        <Paperclip
                            size={20}
                            className={isDarkMode ? "text-gray-300" : "text-gray-500"}
                        />
                    </button>
                    <button
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                        type="button"
                    >
                        <Camera
                            size={20}
                            className={isDarkMode ? "text-gray-300" : "text-gray-500"}
                        />
                    </button>
                    <button
                        onClick={onSend}
                        disabled={!inputValue.trim()}
                        className={`p-2 rounded-lg ${
                            inputValue.trim()
                                ? "bg-purple-600 hover:bg-purple-700 text-white"
                                : "bg-gray-300 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
