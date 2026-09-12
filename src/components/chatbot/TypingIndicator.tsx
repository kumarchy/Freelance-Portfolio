"use client";

import React from "react";
import { ChatbotAvatar } from "./ChatbotAvatar";

export const TypingIndicator = () => (
  <div className="flex items-end gap-2">
    <ChatbotAvatar size="sm" />
    <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-surface border border-divider flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-emerald-primary/70 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);
