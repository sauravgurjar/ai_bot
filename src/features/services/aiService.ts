import { Message } from "../chat/types";

/**
 * Simulates an AI response (replace with API later if needed).
 */
export async function simulateAIResponse(
    userMessage: string,
    addMessage: (m: Message) => void,
    setIsTyping: (val: boolean) => void
) {
    setIsTyping(true);

    // Fake thinking delay
    await new Promise((res) => setTimeout(res, 1000));

    const responses = [
        "I understand your question. Let me think carefully and provide details...",
        "That's an interesting perspective! Here’s how I’d approach it...",
        "Great question! We can explore this from different angles.",
        "Happy to help! Let’s break this down step by step."
    ];

    const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

    const aiMessage: Message = {
        id: Date.now().toString() + "_ai",
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
    };

    addMessage(aiMessage);
    setIsTyping(false);
}
