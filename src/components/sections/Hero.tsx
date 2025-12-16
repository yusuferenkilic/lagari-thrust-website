"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Rocket, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui";

// Sabit yıldız pozisyonları (hydration hatası önlemek için)
const generateStars = () => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: ((i * 17 + 23) % 100),
    top: ((i * 31 + 7) % 100),
    duration: 2 + (i % 3),
    delay: (i % 20) / 10,
  }));
};

const stars = generateStars();

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-lagari-gradient" />
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-cream-200/30 rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-lagari-orange/10 border border-lagari-orange/30 rounded-full mb-8"
          >
            <Image
              src="/images/amblem.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="font-exo text-sm text-lagari-orange">
              Türkiye&apos;nin Roket Takımı
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-clash font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-lagari-cream mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block"
            >
              LAGARI
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="block text-lagari-orange"
            >
              THRUST
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-exo text-xl md:text-2xl text-cream-300/80 max-w-3xl mx-auto mb-10"
          >
            Gökyüzüne uzanan yolculuğumuzda bize katılın. İnovasyon, mühendislik
            ve tutkuyla roket biliminin sınırlarını zorluyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/apply">
              <Button size="lg" className="w-full sm:w-auto">
                <Rocket className="w-5 h-5 mr-2" />
                Takıma Katıl
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Play className="w-5 h-5 mr-2" />
                Projelerimizi Keşfet
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "5+", label: "Yıllık Deneyim" },
              { value: "50+", label: "Aktif Üye" },
              { value: "10+", label: "Tamamlanan Proje" },
              { value: "15+", label: "Yarışma Katılımı" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-clash font-bold text-4xl md:text-5xl text-lagari-orange mb-2">
                  {stat.value}
                </div>
                <div className="font-exo text-cream-300/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-cream-300/50"
        >
          <span className="font-exo text-sm">Keşfet</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Amblem Animation */}
      <motion.div
        className="absolute bottom-10 right-10 hidden lg:block"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.15 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/amblem.svg"
            alt=""
            width={150}
            height={150}
            className="opacity-30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

