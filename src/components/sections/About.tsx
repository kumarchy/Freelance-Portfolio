"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual Side — shown first on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col gap-4 order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-emerald-primary/5 blur-[80px] rounded-full -z-10" />

            {/* Identity Card */}
            <div className="glass-card p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-primary/10 border border-emerald-primary/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-heading font-bold text-emerald-primary">K</span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-text-primary text-lg leading-tight">Kumar Chaudhary</h4>
                <p className="text-text-muted text-xs mt-1">Software &amp; AI Automation Developer</p>
              </div>
            </div>

            {/* AI Workspace Illustration */}
            <div className="relative w-full glass-card p-8 overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-40" />

              {/* Floating API badges */}
              {[
                { label: "OpenAI", top: "6%", left: "4%" },
                { label: "REST API", top: "6%", right: "4%" },
                { label: "n8n", bottom: "10%", left: "4%" },
                { label: "Webhook", bottom: "10%", right: "4%" },
              ].map((b) => (
                <motion.span
                  key={b.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: "absolute", top: b.top, left: b.left, right: b.right, bottom: b.bottom }}
                  className="px-3 py-1 rounded-full bg-emerald-primary/10 border border-emerald-primary/30 text-emerald-primary text-[10px] font-bold tracking-wider z-10"
                >
                  {b.label}
                </motion.span>
              ))}

              <svg viewBox="0 0 400 320" className="w-full h-auto relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="90" y="60" width="220" height="145" rx="10" fill="#101A13" stroke="#37D67A" strokeWidth="1.5" />
                <rect x="100" y="70" width="200" height="125" rx="6" fill="#0B120D" />
                <rect x="60" y="205" width="280" height="14" rx="4" fill="#16231A" stroke="#37D67A" strokeWidth="1" />
                <rect x="155" y="219" width="90" height="6" rx="3" fill="#101A13" />
                <rect x="115" y="85" width="80" height="5" rx="2" fill="#37D67A" opacity="0.7" />
                <rect x="115" y="97" width="120" height="4" rx="2" fill="#86EFAC" opacity="0.4" />
                <rect x="125" y="108" width="90" height="4" rx="2" fill="#86EFAC" opacity="0.3" />
                <rect x="125" y="119" width="60" height="4" rx="2" fill="#37D67A" opacity="0.5" />
                <rect x="115" y="130" width="100" height="4" rx="2" fill="#86EFAC" opacity="0.3" />
                <rect x="125" y="141" width="75" height="4" rx="2" fill="#37D67A" opacity="0.6" />
                <rect x="115" y="152" width="50" height="4" rx="2" fill="#86EFAC" opacity="0.4" />
                <motion.rect x="168" y="152" width="8" height="4" rx="1" fill="#37D67A"
                  animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                <circle cx="48" cy="132" r="22" fill="#101A13" stroke="#37D67A" strokeWidth="1.5" />
                <text x="48" y="137" textAnchor="middle" fill="#37D67A" fontSize="10" fontWeight="bold">AI</text>
                <circle cx="352" cy="132" r="22" fill="#101A13" stroke="#37D67A" strokeWidth="1.5" />
                <text x="352" y="137" textAnchor="middle" fill="#37D67A" fontSize="10" fontWeight="bold">ML</text>
                <circle cx="200" cy="28" r="18" fill="#101A13" stroke="#86EFAC" strokeWidth="1.5" />
                <text x="200" y="33" textAnchor="middle" fill="#86EFAC" fontSize="9" fontWeight="bold">GPT</text>
                <motion.line x1="70" y1="132" x2="90" y2="132" stroke="#37D67A" strokeWidth="1.5" strokeDasharray="4 3"
                  animate={{ strokeDashoffset: [0, -14] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="310" y1="132" x2="330" y2="132" stroke="#37D67A" strokeWidth="1.5" strokeDasharray="4 3"
                  animate={{ strokeDashoffset: [0, -14] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="200" y1="46" x2="200" y2="60" stroke="#86EFAC" strokeWidth="1.5" strokeDasharray="4 3"
                  animate={{ strokeDashoffset: [0, -14] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <rect x="100" y="248" width="56" height="24" rx="6" fill="#101A13" stroke="#37D67A" strokeWidth="1" />
                <text x="128" y="264" textAnchor="middle" fill="#37D67A" fontSize="8" fontWeight="bold">INPUT</text>
                <rect x="172" y="248" width="56" height="24" rx="6" fill="#101A13" stroke="#86EFAC" strokeWidth="1" />
                <text x="200" y="264" textAnchor="middle" fill="#86EFAC" fontSize="8" fontWeight="bold">PROCESS</text>
                <rect x="244" y="248" width="56" height="24" rx="6" fill="#101A13" stroke="#37D67A" strokeWidth="1" />
                <text x="272" y="264" textAnchor="middle" fill="#37D67A" fontSize="8" fontWeight="bold">OUTPUT</text>
                <motion.line x1="156" y1="260" x2="172" y2="260" stroke="#37D67A" strokeWidth="1.5" strokeDasharray="3 2"
                  animate={{ strokeDashoffset: [0, -10] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="228" y1="260" x2="244" y2="260" stroke="#37D67A" strokeWidth="1.5" strokeDasharray="3 2"
                  animate={{ strokeDashoffset: [0, -10] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                <polygon points="172,257 166,260 172,263" fill="#37D67A" />
                <polygon points="244,257 238,260 244,263" fill="#37D67A" />
                {[40,80,120,160,200,240,280,320,360].map((x) =>
                  [290,305].map((y) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#37D67A" opacity="0.2" />
                  ))
                )}
              </svg>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-divider">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-primary" />
                  </span>
                  <span className="text-[10px] text-emerald-primary font-bold uppercase tracking-widest">AI Systems Online</span>
                </div>
                <span className="text-[10px] text-text-muted font-mono">v2.0.1</span>
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-primary/10 border border-emerald-primary/20 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-primary" />
              </span>
              <span className="text-xs font-bold text-emerald-primary tracking-wider uppercase">Available for new projects</span>
            </div>
          </motion.div>

          {/* Text Side — shown second on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-last lg:order-first"
          >
            <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
              About
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-8">
              Solving Business Problems with Technology
            </h3>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I help businesses transform their operations through custom software,
                AI automation, and modern web experiences. My focus is on delivering
                solutions that drive measurable growth and operational efficiency.
              </p>
              <p>
                Every project begins with understanding your unique challenges. I don&apos;t
                just write code — I architect solutions that scale, perform, and convert.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <Card>
                <Target size={28} className="text-emerald-primary mb-3" />
                <h4 className="font-heading font-bold text-text-primary mb-2">Results-Driven</h4>
                <p className="text-text-secondary text-sm">Every solution is designed with clear business outcomes in mind.</p>
              </Card>
              <Card>
                <Lightbulb size={28} className="text-emerald-primary mb-3" />
                <h4 className="font-heading font-bold text-text-primary mb-2">Innovative Approach</h4>
                <p className="text-text-secondary text-sm">Leveraging the latest AI and automation technologies to stay ahead of the curve.</p>
              </Card>
              <Card>
                <Users size={28} className="text-emerald-primary mb-3" />
                <h4 className="font-heading font-bold text-text-primary mb-2">Collaborative Partner</h4>
                <p className="text-text-secondary text-sm">Close collaboration throughout every phase, ensuring transparency and alignment.</p>
              </Card>
              <Card>
                <Rocket size={28} className="text-emerald-primary mb-3" />
                <h4 className="font-heading font-bold text-text-primary mb-2">Fast Delivery</h4>
                <p className="text-text-secondary text-sm">Rapid iteration cycles with a focus on shipping quickly and iterating based on feedback.</p>
              </Card>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
