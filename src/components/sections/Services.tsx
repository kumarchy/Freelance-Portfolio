"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  MessageSquare, 
  Mic, 
  Zap, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "High-performance, SEO-optimized premium websites built with Next.js and Tailwind.",
    benefits: "Faster load times, better ranking, and higher conversion rates.",
    icon: <Globe className="text-emerald-primary" size={24} />,
  },
  {
    title: "Custom Web Applications",
    description: "Complex, scalable web solutions tailored to your specific business requirements.",
    benefits: "Automated workflows and centralized business data.",
    icon: <Cpu className="text-emerald-primary" size={24} />,
  },
  {
    title: "AI Chatbot Integration",
    description: "Intelligent AI assistants that handle customer queries 24/7 with human-like precision.",
    benefits: "Reduced support costs and increased customer satisfaction.",
    icon: <MessageSquare className="text-emerald-primary" size={24} />,
  },
  {
    title: "AI Voice Agents",
    description: "Natural-sounding AI agents for automated outbound and inbound call handling.",
    benefits: "Scale your sales and support without increasing headcount.",
    icon: <Mic className="text-emerald-primary" size={24} />,
  },
  {
    title: "Business Automation",
    description: "End-to-end automation of repetitive tasks using AI and custom scripts.",
    benefits: "Save hundreds of hours per month on manual operations.",
    icon: <Zap className="text-emerald-primary" size={24} />,
  },
  {
    title: "AI Agent Systems",
    description: "Autonomous AI agents that handle multi-step tasks, decisions, and workflows without constant human input.",
    benefits: "Reduced operational overhead and round-the-clock task execution.",
    icon: <Cpu className="text-emerald-primary" size={24} />,
  },
  {
    title: "Website Optimization",
    description: "Technical audit and optimization for performance, accessibility, and SEO.",
    benefits: "Perfect Lighthouse scores and improved user experience.",
    icon: <BarChart3 className="text-emerald-primary" size={24} />,
  },
  {
    title: "Technical Consulting",
    description: "Strategic advice on technology choice, architecture, and AI implementation.",
    benefits: "Make informed decisions and avoid costly technical debt.",
    icon: <ShieldCheck className="text-emerald-primary" size={24} />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Premium Solutions for Modern Businesses
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            I provide a comprehensive suite of services designed to modernize your operations 
            and elevate your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:border-emerald-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-surface border border-divider flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-text-primary mb-3">
                {service.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-6 border-t border-divider">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 block">
                  Business Benefit
                </span>
                <p className="text-xs text-emerald-primary font-medium italic">
                  {service.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
