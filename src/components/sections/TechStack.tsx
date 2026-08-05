"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGithub,
  FaDatabase,
  FaRobot,
  FaJava,
  FaGit,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiVercel,
  SiSpringboot,
  SiN8N,
  SiGooglegemini,
  SiRender,
  SiGithubactions,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { category: "AI & Automation", items: [
    { name: "OpenAI", icon: <FaRobot /> },
    { name: "Google Gemini", icon: <SiGooglegemini /> },
    { name: "n8n", icon: <SiN8N /> },
    { name: "MCP", icon: <FaRobot /> },
  ]},
  { category: "Frontend", items: [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ]},
  { category: "Backend", items: [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
  ]},
  { category: "Cloud & Deployment", items: [
    { name: "AWS", icon: <FaAws /> },
    { name: "Render", icon: <SiRender /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Docker", icon: <FaDocker /> },
  ]},
  { category: "Databases", items: [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> },
  ]},
  { category: "DevOps", items: [
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
  ]},
];

export const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            Tech Stack
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Powered by Modern Technology
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            I use industry-leading tools and technologies to build robust,
            scalable, and maintainable solutions.
          </p>
        </div>

        <div className="space-y-12">
          {techStack.map((category, ci) => (
            <div key={ci}>
              <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest text-center mb-6">
                {category.category}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.items.map((item, ii) => (
                  <motion.div
                    key={`${ci}-${ii}`}
                    whileHover={{ scale: 1.05, borderColor: "rgba(55,214,122,0.3)" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + ii * 0.05, duration: 0.4 }}
                    className="glass-card p-5 flex flex-col items-center gap-3 group cursor-default"
                  >
                    <div className="text-3xl text-emerald-primary group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-text-secondary group-hover:text-emerald-primary transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};