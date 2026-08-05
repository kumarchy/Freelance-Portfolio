import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide",
        {
          "bg-emerald-primary/10 text-emerald-primary border border-emerald-primary/20":
            variant === "default",
          "bg-emerald-primary/20 text-emerald-highlight border border-emerald-primary/30":
            variant === "accent",
          "border border-emerald-primary/20 text-text-secondary hover:border-emerald-primary/40":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};