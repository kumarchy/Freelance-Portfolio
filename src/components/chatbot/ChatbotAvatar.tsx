"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const sizes = {
  sm: 28,
  md: 36,
  lg: 56,
};

export const ChatbotAvatar = ({ size = "md", animated = false, className }: Props) => {
  const px = sizes[size];

  const Wrapper = animated ? motion.div : "div";
  const animProps = animated
    ? {
        animate: { scale: [1, 1.06, 1] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
      }
    : {};

  return (
    <Wrapper
      {...animProps}
      className={cn("rounded-full shrink-0 flex items-center justify-center", className)}
      style={{ width: px, height: px }}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle cx="28" cy="28" r="27" fill="#0B120D" stroke="#37D67A" strokeWidth="1.2" />

        {/* Inner glow circle */}
        <circle cx="28" cy="28" r="22" fill="#101A13" />
        <circle cx="28" cy="28" r="22" fill="url(#avatarGlow)" />

        {/* Face base */}
        <rect x="16" y="18" width="24" height="20" rx="6" fill="#16231A" stroke="#37D67A" strokeWidth="1" />

        {/* Eyes */}
        <rect x="20" y="24" width="5" height="5" rx="1.5" fill="#37D67A" />
        <rect x="31" y="24" width="5" height="5" rx="1.5" fill="#37D67A" />

        {/* Eye glow */}
        <rect x="20" y="24" width="5" height="5" rx="1.5" fill="url(#eyeGlow)" opacity="0.6" />
        <rect x="31" y="24" width="5" height="5" rx="1.5" fill="url(#eyeGlow)" opacity="0.6" />

        {/* Pupil dots */}
        <circle cx="22.5" cy="26.5" r="1" fill="#86EFAC" />
        <circle cx="33.5" cy="26.5" r="1" fill="#86EFAC" />

        {/* Mouth / signal bar */}
        <rect x="21" y="32" width="4" height="2.5" rx="1" fill="#37D67A" opacity="0.5" />
        <rect x="26" y="30.5" width="4" height="4" rx="1" fill="#37D67A" opacity="0.75" />
        <rect x="31" y="29" width="4" height="5.5" rx="1" fill="#37D67A" />

        {/* Antenna */}
        <line x1="28" y1="18" x2="28" y2="13" stroke="#37D67A" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="28" cy="12" r="2" fill="#37D67A" />
        <circle cx="28" cy="12" r="2" fill="url(#antennaGlow)" />

        {/* Side ears */}
        <rect x="11" y="23" width="5" height="8" rx="2" fill="#16231A" stroke="#37D67A" strokeWidth="0.8" />
        <rect x="40" y="23" width="5" height="8" rx="2" fill="#16231A" stroke="#37D67A" strokeWidth="0.8" />
        <rect x="12.5" y="25" width="2" height="4" rx="1" fill="#37D67A" opacity="0.5" />
        <rect x="41.5" y="25" width="2" height="4" rx="1" fill="#37D67A" opacity="0.5" />

        {/* Corner circuit dots */}
        <circle cx="8" cy="8" r="1.5" fill="#37D67A" opacity="0.3" />
        <circle cx="48" cy="8" r="1.5" fill="#37D67A" opacity="0.3" />
        <circle cx="8" cy="48" r="1.5" fill="#37D67A" opacity="0.3" />
        <circle cx="48" cy="48" r="1.5" fill="#37D67A" opacity="0.3" />

        <defs>
          <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#37D67A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#37D67A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#86EFAC" stopOpacity="1" />
            <stop offset="100%" stopColor="#37D67A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="antennaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#86EFAC" stopOpacity="1" />
            <stop offset="100%" stopColor="#37D67A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </Wrapper>
  );
};
