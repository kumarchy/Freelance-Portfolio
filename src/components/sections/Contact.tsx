"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, GitBranch, Link, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Let&apos;s Work Together
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-emerald-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-bold uppercase tracking-wider">Email</div>
                  <a href="mailto:chaudharykumar228@gmail.com" className="text-text-primary hover:text-emerald-primary transition-colors text-sm font-medium">
                    chaudharykumar228@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-primary/10 flex items-center justify-center">
                  <Link size={18} className="text-emerald-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-bold uppercase tracking-wider">LinkedIn</div>
                  <a href="https://linkedin.com/in/kumarchaudhary/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-emerald-primary transition-colors text-sm font-medium">
                    linkedin.com/in/kumarchaudhary
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-primary/10 flex items-center justify-center">
                  <GitBranch size={18} className="text-emerald-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-bold uppercase tracking-wider">GitHub</div>
                  <a href="https://github.com/kumarchy" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-emerald-primary transition-colors text-sm font-medium">
                    github.com/kumarchy
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-primary/10 flex items-center justify-center">
                  <MessageCircle size={18} className="text-emerald-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-bold uppercase tracking-wider">WhatsApp</div>
                  <a href="https://wa.me/9779849136258" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-emerald-primary transition-colors text-sm font-medium">
                    +977 9849136258
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-4 mb-3">
                <Clock size={18} className="text-emerald-primary" />
                <span className="text-sm text-text-secondary">Available for new projects</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-emerald-primary" />
                <span className="text-sm text-text-secondary">Worldwide, Remote-First</span>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="glass-card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-emerald-primary" />
                </div>
                <h4 className="font-heading font-bold text-text-primary text-xl mb-2">
                  Message Sent
                </h4>
                <p className="text-text-secondary">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-surface border border-divider text-text-primary focus:outline-none focus:border-emerald-primary/50 transition-colors text-sm"
                      )}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-surface border border-divider text-text-primary focus:outline-none focus:border-emerald-primary/50 transition-colors text-sm"
                      )}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface border border-divider text-text-primary focus:outline-none focus:border-emerald-primary/50 transition-colors text-sm resize-none"
                    )}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send size={18} className="ml-2" />
                </Button>
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};