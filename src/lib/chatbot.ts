import type { ChatRequest, ChatResponse } from "@/types/chatbot";

const CHATBOT_API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

// Generate once per browser session — persists across messages for chat memory
const CONVERSATION_ID =
  typeof window !== "undefined"
    ? (sessionStorage.getItem("chatConversationId") ??
       (() => {
         const id = crypto.randomUUID();
         sessionStorage.setItem("chatConversationId", id);
         return id;
       })())
    : crypto.randomUUID();

function mapRequest(req: ChatRequest): Record<string, unknown> {
  return {
    message: req.message,
  };
}

function mapResponse(data: string): ChatResponse {
  return {
    message: data,
  };
}

export async function sendChatMessage(
  req: ChatRequest,
  onChunk: (chunk: string) => void
): Promise<void> {
  if (!CHATBOT_API_URL) {
    throw new Error("NEXT_PUBLIC_CHATBOT_API_URL is not set.");
  }

  const res = await fetch(`${CHATBOT_API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      conversationId: CONVERSATION_ID,
    },
    body: JSON.stringify(mapRequest(req)),
  });

  if (!res.ok) {
    throw new Error(`Backend error: ${res.status} ${res.statusText}`);
  }

  // Read the Flux<String> stream chunk by chunk
  const reader = res.body?.getReader();
  if (!reader) throw new Error("No response body.");

  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });
    onChunk(mapResponse(chunk).message);
  }
}
