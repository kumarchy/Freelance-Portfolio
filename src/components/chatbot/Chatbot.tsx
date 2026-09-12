"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { ChatbotAvatar } from "./ChatbotAvatar";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full focus:outline-none"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {/* Pulsing glow ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-emerald-primary/20 pointer-events-none" />
        <span className="absolute inset-0 rounded-full shadow-[0_0_24px_rgba(55,214,122,0.4)] pointer-events-none" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="w-14 h-14 rounded-full bg-surface border-2 border-emerald-primary/40 flex items-center justify-center"
            >
              <X size={22} className="text-emerald-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <ChatbotAvatar size="lg" animated />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
