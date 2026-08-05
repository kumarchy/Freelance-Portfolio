"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Shield, Zap, Scale, Rocket, Code2, Clock } from "lucide-react";
import { Counter } from "@/components/ui/Counter";

const features = [
  { icon: <Clock size={24} />, title: "Timeline Delivery", description: "Project completed on time with weekly milestones and transparent progress tracking." },
  { icon: <Scale size={24} />, title: "Scalable Architecture", description: "Built for growth. Systems handle traffic spikes without breaking a sweat." },
  { icon: <Code2 size={24} />, title: "Clean Code", description: "Readable, maintainable, and well-documented code following industry best practices." },
  { icon: <Shield size={24} />, title: "Security First", description: "Enterprise-grade security practices baked into every line of code." },
  { icon: <Zap size={24} />, title: "Performance Optimized", description: "Sub-second load times with optimized assets, caching, and CDN strategy." },
  { icon: <Rocket size={24} />, title: "SEO Built-in", description: "Every project ships with semantic HTML, meta tags, and Core Web Vitals optimization." },
  { icon: <Sparkles size={24} />, title: "Responsive Design", description: "Flawless experience across all devices, from mobile to ultrawide desktop." },
  { icon: <CheckCircle2 size={24} />, title: "Long-Term Support", description: "Ongoing maintenance, updates, and priority support after deployment." },
];

export const WhyWorkWithMe = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            Why Work With Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Delivering What Matters
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Every project is built with precision, care, and a focus on measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: 10, suffix: "+", label: "Projects Completed" },
            { value: null, suffix: "", label: "BUSINESS AUTOMATIONS" },
            { value: null, suffix: "", label: "AI WORKFLOWS" },
            { value: null, suffix: "", label: "SYSTEM INTEGRATIONS" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-emerald-primary mb-2">
                {stat.value !== null
                  ? <Counter end={stat.value} suffix={stat.suffix} />
                  : <span>✦</span>
                }
              </div>
              <div className="text-xs font-bold text-text-muted uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 hover:border-emerald-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-primary/10 flex items-center justify-center text-emerald-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="font-heading font-bold text-text-primary mb-2">
                {feature.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};