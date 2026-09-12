"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, AlertCircle } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { ChatbotAvatar } from "./ChatbotAvatar";
import { sendChatMessage } from "@/lib/chatbot";
import type { ChatMessage as ChatMessageType } from "@/types/chatbot";

interface Props {
  onClose: () => void;
}

const WELCOME_MESSAGE: ChatMessageType = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I'm Kumar's AI assistant. Ask me anything about his skills, services, projects, or how he can help your business.",
  timestamp: new Date(),
};

export const ChatWindow = ({ onClose }: Props) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isTyping || isStreaming) return;

    const userMsg: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setIsStreaming(false);
    setError(null);

    const aiMsgId = crypto.randomUUID();

    try {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      await sendChatMessage({ message: text, history }, (chunk) => {
        setIsTyping(false);
        setIsStreaming(true);
        setMessages((prev) => {
          const exists = prev.find((m) => m.id === aiMsgId);
          if (exists) {
            return prev.map((m) =>
              m.id === aiMsgId ? { ...m, content: m.content + chunk } : m
            );
          }
          return [
            ...prev,
            { id: aiMsgId, role: "assistant", content: chunk, timestamp: new Date() },
          ];
        });
      });
    } catch (err) {
      setMessages((prev) => prev.filter((m) => m.id !== aiMsgId));
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsTyping(false);
      setIsStreaming(false);
    }
  }, [input, isTyping, isStreaming, messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col w-[370px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-120px)] rounded-2xl overflow-hidden border border-emerald-primary/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      style={{ background: "rgba(10,18,13,0.97)", backdropFilter: "blur(20px)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-divider bg-surface/60 shrink-0">
        <div className="relative">
          <ChatbotAvatar size="md" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-primary border-2 border-background-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-text-primary leading-tight">Kumar's AI Assistant</p>
          <p className="text-[10px] text-emerald-primary font-medium">Online · Powered by Spring AI</p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
            >
              <TypingIndicator />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2 px-3 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <AlertCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
              <p className="text-xs text-red-400 leading-relaxed">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-divider bg-surface/40 shrink-0">
        <div className="flex items-end gap-2 px-3 py-2 rounded-xl bg-background-primary/60 border border-divider focus-within:border-emerald-primary/40 transition-colors">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            rows={1}
            className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted resize-none outline-none max-h-24 leading-relaxed py-0.5"
            style={{ scrollbarWidth: "none" }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping || isStreaming}
            className="w-8 h-8 rounded-lg bg-emerald-primary/20 border border-emerald-primary/30 flex items-center justify-center text-emerald-primary hover:bg-emerald-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
            aria-label="Send message"
          >
            <Send size={14} />
          </button>
        </div>
        <p className="text-[10px] text-text-muted text-center mt-2">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </motion.div>
  );
};
