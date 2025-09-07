import { Message } from "../types";

export async function simulateAIResponse(
    userMessage: string,
    addMessage: (m: Message) => void,
    setIsTyping: (val: boolean) => void
) {
    setIsTyping(true);
    await new Promise((res) => setTimeout(res, 1000));

    const responses = [
        "I understand your question. Let me think carefully...",
        "That's an interesting perspective! Here's my approach...",
        "Great question! Let’s explore it from different angles.",
        "Happy to help! Let’s break this down step by step."
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const aiMessage: Message = {
        id: Date.now().toString() + "_ai",
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
    };

    addMessage(aiMessage);
    setIsTyping(false);
}
