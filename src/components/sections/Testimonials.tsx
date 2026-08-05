"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Placeholder",
    role: "Coming Soon",
    text: "Testimonials from real client engagements will be showcased here once projects are completed. I am committed to delivering exceptional results and building long-term relationships.",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = React.useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-primary uppercase tracking-[0.3em] mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            What Clients Say
          </h3>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-10 md:p-16 text-center"
          >
            <Quote className="mx-auto text-emerald-primary/20 mb-4" size={48} />
            <p className="text-xl md:text-2xl font-heading text-text-primary leading-relaxed mb-8">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-emerald-primary/10 border border-emerald-primary/20 mb-6"
            )}>
              <span className="text-xs font-bold text-emerald-primary">
                {testimonials[current].role}
              </span>
            </div>
            <p className="text-text-muted font-heading font-medium">
              {testimonials[current].name}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === i ? "w-6 bg-emerald-primary" : "w-2 bg-surface border border-divider"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};