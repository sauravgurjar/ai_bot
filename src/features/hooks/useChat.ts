import { useState, useRef, useEffect } from "react";
import { Message } from "../chat/types";

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isChatMode, setIsChatMode] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when new message arrives
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const addMessage = (message: Message) => {
        setMessages((prev) => [...prev, message]);
    };

    return {
        messages,
        inputValue,
        setInputValue,
        isTyping,
        setIsTyping,
        isChatMode,
        setIsChatMode,
        addMessage,
        messagesEndRef,
    };
}
