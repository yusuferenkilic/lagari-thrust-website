"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export default function CTASection() {
  return (
    <section className="py-24 bg-lagari-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-lagari-orange/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-lagari-orange/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-lagari-orange/10 rounded-full mb-8">
            <Image
              src="/images/amblem.svg"
              alt=""
              width={60}
              height={60}
            />
          </div>

          <h2 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-lagari-cream mb-6">
            Gökyüzüne Birlikte
            <span className="text-lagari-orange"> Yükselmeye</span> Hazır mısın?
          </h2>

          <p className="font-exo text-xl text-cream-300/70 mb-10 max-w-2xl mx-auto">
            Lagari Thrust ailesine katıl, roket biliminin heyecan verici
            dünyasında yerini al. Deneyimin önemli değil, tutkun yeterli!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply">
              <Button size="lg" className="animate-pulse-glow">
                <Rocket className="w-5 h-5 mr-2" />
                Hemen Başvur
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg">
                İletişime Geç
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

