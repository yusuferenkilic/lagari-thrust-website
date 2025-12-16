"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`font-clash font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${
          light ? "text-lagari-dark-green" : "text-lagari-cream"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-exo text-lg md:text-xl max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-dark-100" : "text-cream-300/70"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-24 bg-lagari-orange rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}

