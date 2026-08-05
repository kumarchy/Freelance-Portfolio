"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { number: "01", title: "Discovery", description: "Understanding your business, challenges, goals, and automation opportunities." },
  { number: "02", title: "Strategy", description: "Defining the solution architecture, technology stack, workflow, and project roadmap." },
  { number: "03", title: "Solution Design", description: "Designing intuitive user experiences, automation flows, APIs, and system architecture." },
  { number: "04", title: "Development", description: "Building scalable software, AI agents, automations, and integrations using modern technologies." },
  { number: "05", title: "Testing & Optimization", description: "Validating functionality, performance, security, and refining AI workflows for reliability." },
  { number: "06", title: "Deployment", description: "Deploying applications and automations with monitoring, documentation, and seamless integration." },
  { number: "07", title: "Continuous Support", description: "Providing maintenance, improvements, feature enhancements, and ongoing technical support." },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            From Concept to Launch
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A structured, transparent methodology that ensures every project is delivered on time and exceeds expectations.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-primary/50 via-divider to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
                  )}
                >
                  <div
                    className={cn(
                      "md:w-[45%]",
                      isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    )}
                  >
                    <div className="glass-card p-6">
                      <span className="text-xs font-bold text-emerald-primary uppercase tracking-widest">
                        Step {step.number}
                      </span>
                      <h4 className="text-xl font-heading font-bold text-text-primary mt-2 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-primary/20 border border-emerald-primary/30 -translate-x-1/2">
                    <CheckCircle2 size={18} className="text-emerald-primary" />
                  </div>

                  <div className="md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};