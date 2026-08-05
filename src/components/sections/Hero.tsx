"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Core Technologies", value: "12+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-primary/10 border border-emerald-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-primary"></span>
            </span>
            <span className="text-xs font-bold text-emerald-primary tracking-wider uppercase">
              Available for new projects
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-text-primary leading-[1.1] mb-6">
            Helping Businesses Grow with{" "}
            <span className="emerald-gradient-text">Modern Websites, AI Automation,</span>{" "}
            and Intelligent Software.
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed">
            I build premium digital experiences that combine cutting-edge AI with world-class engineering to drive real business value.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="#portfolio" className="px-8 py-4 rounded-full border border-emerald-primary/30 text-emerald-primary font-bold hover:bg-emerald-primary/10 transition-colors">
              View My Work
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-divider">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-heading font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Element — Dashboard UI */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden lg:flex flex-col gap-3"
        >
          {/* Decorative Glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-primary/20 blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-secondary/20 blur-[100px] -z-10" />

          {/* Dashboard header */}
          <div className="glass-card px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-primary animate-pulse" />
              <span className="text-xs font-bold text-text-primary tracking-wider">AutomateX Dashboard</span>
            </div>
            <span className="text-[10px] text-text-muted font-mono">live</span>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-2 gap-3">

            {/* AI Agent */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 flex flex-col gap-3 col-span-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-primary/10 border border-emerald-primary/20 flex items-center justify-center text-sm">🤖</div>
                  <span className="text-sm font-bold text-text-primary">AI Agent</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-primary/10 border border-emerald-primary/20 text-emerald-primary font-bold">Running</span>
              </div>
              <div className="flex gap-2">
                {["Analyse", "Respond", "Execute", "Learn"].map((step, i) => (
                  <motion.div
                    key={step}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="flex-1 text-center py-1.5 rounded-lg bg-emerald-primary/10 border border-emerald-primary/20 text-[10px] font-bold text-emerald-primary"
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* n8n Workflow */}
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-primary/10 border border-emerald-primary/20 flex items-center justify-center text-sm">⚡</div>
                <span className="text-sm font-bold text-text-primary">n8n Workflow</span>
              </div>
              <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                {/* Animated flow paths */}
                <motion.path d="M36 45 H72" stroke="#37D67A" strokeWidth="1.5" strokeDasharray="5 3"
                  animate={{ strokeDashoffset: [0, -16] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <motion.path d="M108 45 H144" stroke="#37D67A" strokeWidth="1.5" strokeDasharray="5 3"
                  animate={{ strokeDashoffset: [0, -16] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.4 }} />
                {/* Branch line from middle node */}
                <motion.path d="M90 57 V72 H144" stroke="#86EFAC" strokeWidth="1" strokeDasharray="4 3"
                  animate={{ strokeDashoffset: [0, -14] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.8 }} />

                {/* Node 1 — Webhook trigger */}
                <rect x="2" y="33" width="34" height="24" rx="5" fill="#101A13" stroke="#37D67A" strokeWidth="1.2" />
                <text x="19" y="43" textAnchor="middle" fill="#37D67A" fontSize="5" fontWeight="bold">WEBHOOK</text>
                <text x="19" y="51" textAnchor="middle" fill="#86EFAC" fontSize="4">Trigger</text>
                <motion.circle cx="36" cy="45" r="2.5" fill="#37D67A"
                  animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />

                {/* Node 2 — AI Agent */}
                <rect x="72" y="30" width="36" height="30" rx="5" fill="#101A13" stroke="#37D67A" strokeWidth="1.2" />
                <text x="90" y="42" textAnchor="middle" fill="#37D67A" fontSize="5" fontWeight="bold">AI AGENT</text>
                <text x="90" y="51" textAnchor="middle" fill="#86EFAC" fontSize="4">OpenAI</text>
                <motion.circle cx="108" cy="45" r="2.5" fill="#37D67A"
                  animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
                <motion.circle cx="72" cy="45" r="2.5" fill="#37D67A"
                  animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />

                {/* Node 3 — Send Email */}
                <rect x="144" y="33" width="34" height="24" rx="5" fill="#101A13" stroke="#86EFAC" strokeWidth="1.2" />
                <text x="161" y="43" textAnchor="middle" fill="#86EFAC" fontSize="5" fontWeight="bold">EMAIL</text>
                <text x="161" y="51" textAnchor="middle" fill="#86EFAC" fontSize="4">Send</text>
                <motion.circle cx="144" cy="45" r="2.5" fill="#86EFAC"
                  animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.8 }} />

                {/* Node 4 — Slack (branch) */}
                <rect x="144" y="62" width="34" height="24" rx="5" fill="#101A13" stroke="#86EFAC" strokeWidth="1.2" />
                <text x="161" y="72" textAnchor="middle" fill="#86EFAC" fontSize="5" fontWeight="bold">SLACK</text>
                <text x="161" y="80" textAnchor="middle" fill="#86EFAC" fontSize="4">Notify</text>
                <motion.circle cx="144" cy="74" r="2.5" fill="#86EFAC"
                  animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 1.2 }} />

                {/* Arrow heads */}
                <polygon points="73,42 68,45 73,48" fill="#37D67A" />
                <polygon points="145,42 140,45 145,48" fill="#37D67A" />
                <polygon points="145,71 140,74 145,77" fill="#86EFAC" />
              </svg>
            </motion.div>

            {/* API Integrations */}
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-primary/10 border border-emerald-primary/20 flex items-center justify-center text-sm">🔗</div>
                <span className="text-sm font-bold text-text-primary">API Integrations</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["OpenAI", "Stripe", "Slack", "Gmail"].map((api) => (
                  <div key={api} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface border border-divider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary" />
                    <span className="text-[10px] text-text-secondary font-medium">{api}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-primary/10 border border-emerald-primary/20 flex items-center justify-center text-sm">🗄️</div>
                <span className="text-sm font-bold text-text-primary">Database</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { label: "Records", pct: 72 },
                  { label: "Queries", pct: 55 },
                  { label: "Cache", pct: 88 },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2">
                    <span className="text-[10px] text-text-muted w-12">{row.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-surface border border-divider">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${row.pct}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-emerald-primary/70"
                      />
                    </div>
                    <span className="text-[10px] text-emerald-primary font-bold">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Analytics */}
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-primary/10 border border-emerald-primary/20 flex items-center justify-center text-sm">📊</div>
                <span className="text-sm font-bold text-text-primary">Analytics</span>
              </div>
              <div className="flex items-end gap-1 h-10">
                {[30, 55, 40, 70, 50, 85, 65, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                    className="flex-1 rounded-sm bg-emerald-primary/50 hover:bg-emerald-primary transition-colors"
                  />
                ))}
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-text-muted">Automations run</span>
                <span className="text-[10px] text-emerald-primary font-bold">+24% ↑</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
