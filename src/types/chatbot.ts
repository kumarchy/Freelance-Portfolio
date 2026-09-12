export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface ChatRequest {
  message: string;
  history?: { role: MessageRole; content: string }[];
}

export interface ChatResponse {
  message: string;
}
