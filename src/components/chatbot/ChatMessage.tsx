"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { ChatbotAvatar } from "./ChatbotAvatar";
import type { ChatMessage as ChatMessageType } from "@/types/chatbot";

interface Props {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex items-end gap-2", isUser && "flex-row-reverse")}>
      {/* Avatar */}
      {!isUser && <ChatbotAvatar size="sm" />}
      {isUser && (
        <div className="w-7 h-7 rounded-full bg-emerald-primary/20 border border-emerald-primary/30 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-bold text-emerald-primary">You</span>
        </div>
      )}

      {/* Bubble */}
      <div
        className={cn(
          "max-w-[78%] px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "rounded-2xl rounded-br-sm bg-emerald-primary/15 border border-emerald-primary/25 text-text-primary"
            : "rounded-2xl rounded-bl-sm bg-surface border border-divider text-text-secondary"
        )}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="text-text-primary font-semibold">{children}</strong>,
              ul: ({ children }) => <ul className="list-disc list-inside space-y-0.5 my-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside space-y-0.5 my-1">{children}</ol>,
              li: ({ children }) => <li className="text-text-secondary">{children}</li>,
              code: ({ children }) => (
                <code className="px-1.5 py-0.5 rounded bg-background-primary/60 text-emerald-primary text-xs font-mono">
                  {children}
                </code>
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-primary underline underline-offset-2">
                  {children}
                </a>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
        <p className={cn("text-[10px] mt-1.5 select-none", isUser ? "text-emerald-primary/50 text-right" : "text-text-muted")}>
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
};
