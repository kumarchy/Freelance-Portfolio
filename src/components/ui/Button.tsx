import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-primary/50 focus:ring-offset-2 focus:ring-offset-background-primary",
        {
          "bg-emerald-gradient text-white shadow-button hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(34,197,94,0.35)] active:scale-[0.98]":
            variant === "primary",
          "border border-emerald-primary/30 text-emerald-primary hover:bg-emerald-primary/10":
            variant === "secondary",
          "text-text-secondary hover:text-emerald-primary hover:bg-emerald-primary/5":
            variant === "ghost",
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};