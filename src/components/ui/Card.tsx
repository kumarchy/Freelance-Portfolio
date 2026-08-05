import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-card transition-all duration-300",
        {
          "hover:-translate-y-1 hover:border-emerald-primary/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:shadow-emerald-primary/10":
            hover,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};