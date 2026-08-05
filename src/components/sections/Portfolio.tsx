"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "AI", "Automation"];

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    category: "Web",
    description:
      "A modern, responsive restaurant website featuring online menu, table reservation system, and location integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    id: 2,
    title: "Medical Clinic Platform",
    category: "Web",
    description:
      "A full-featured clinic management platform with patient portal, appointment booking, and doctor dashboard.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: 3,
    title: "AI Lead Qualification Agent",
    category: "AI",
    description:
      "An AI agent that automatically qualifies inbound leads via chat, scores them, and routes them to the right sales rep.",
    technologies: ["OpenAI", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  },
  {
    id: 4,
    title: "Voice Appointment Booking Agent",
    category: "AI",
    description:
      "A natural-sounding AI voice agent that handles inbound calls, books appointments, and sends confirmation messages.",
    technologies: ["Python", "OpenAI", "Twilio", "AWS Lambda"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
  },
  {
    id: 5,
    title: "Business Automation Workflow",
    category: "Automation",
    description:
      "End-to-end n8n automation connecting CRM, email, Slack, and Google Sheets — eliminating manual data entry entirely.",
    technologies: ["n8n", "Node.js", "Google Sheets API", "Slack API"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 6,
    title: "Client Onboarding Automation",
    category: "Automation",
    description:
      "Automated onboarding pipeline that triggers contracts, welcome emails, project setup, and Slack notifications on signup.",
    technologies: ["n8n", "Stripe", "SendGrid", "Notion API"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Featured Projects
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A selection of work that demonstrates my expertise in building
            high-impact digital products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-bold transition-all duration-300",
                activeCategory === cat
                  ? "bg-emerald-primary/10 text-emerald-primary border border-emerald-primary/30"
                  : "text-text-muted border border-transparent hover:text-text-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card hover>
                  <div className="relative overflow-hidden rounded-t-[20px] aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <h4 className="font-heading font-bold text-text-primary text-lg">
                          {project.title}
                        </h4>
                        <div className="flex gap-2 mt-2">
                          <Badge>{project.category}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.githubUrl}
                          onClick={(e) => e.preventDefault()}
                          className="w-9 h-9 rounded-full bg-background-primary/60 backdrop-blur-sm flex items-center justify-center border border-emerald-primary/20 hover:bg-emerald-primary/20 transition-colors"
                          aria-label="GitHub Link"
                        >
                          <GitBranch size={16} className="text-text-secondary" />
                        </a>
                        <a
                          href={project.liveUrl}
                          onClick={(e) => e.preventDefault()}
                          className="w-9 h-9 rounded-full bg-emerald-primary/20 backdrop-blur-sm flex items-center justify-center border border-emerald-primary/30 hover:bg-emerald-primary/30 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ArrowUpRight size={16} className="text-emerald-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-surface text-text-muted text-[11px] font-bold border border-divider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};