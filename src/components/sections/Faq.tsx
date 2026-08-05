"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I build AI agents, business automation workflows, custom software, web applications, APIs, and system integrations tailored to your business needs.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "I work with startups, small businesses, and growing companies looking to automate processes, improve efficiency, or build custom software solutions.",
  },
  {
    q: "Can you automate our existing business processes?",
    a: "Yes. I can integrate AI and automation with your existing tools such as CRMs, Google Workspace, databases, messaging platforms, payment systems, and other third-party services.",
  },
  {
    q: "What technologies do you use?",
    a: "I primarily work with OpenAI, Google Gemini, n8n, Java, Spring Boot, React, Next.js, Node.js, Python, PostgreSQL, MongoDB, Docker, AWS, Render, and modern cloud technologies.",
  },
  {
    q: "How long does a project usually take?",
    a: "Project timelines depend on complexity. Small automation projects may take a few days, while larger software solutions can take several weeks. A detailed timeline is provided before development begins.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes. I offer post-deployment support, bug fixes, maintenance, and feature enhancements based on your requirements.",
  },
  {
    q: "How do you communicate during a project?",
    a: "You'll receive regular progress updates, milestone reviews, and clear communication throughout the project to ensure everything stays aligned with your goals.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-background-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            FAQ
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Here are answers to the most common questions I receive from prospective clients.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="glass-card overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <h4 className="font-heading font-bold text-text-primary pr-4">
                    {faq.q}
                  </h4>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-emerald-primary shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-text-muted shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-text-secondary leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};