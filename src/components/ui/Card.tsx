"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-lagari-black border border-dark-200 rounded-2xl overflow-hidden",
        hover && "hover:border-lagari-orange/50 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

