"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users } from "lucide-react";
import { SectionTitle, Button } from "@/components/ui";

const features = [
  {
    icon: Target,
    title: "Misyonumuz",
    description:
      "Roket bilimi ve uzay teknolojileri alanında Türkiye'yi temsil eden, yenilikçi projeler geliştiren bir takım olmak.",
  },
  {
    icon: Lightbulb,
    title: "Vizyonumuz",
    description:
      "Uzay teknolojilerinde öncü bir ekip olarak ulusal ve uluslararası yarışmalarda başarılar elde etmek.",
  },
  {
    icon: Users,
    title: "Değerlerimiz",
    description:
      "Takım çalışması, sürekli öğrenme, yenilikçilik ve mühendislik mükemmelliği temel değerlerimizdir.",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-lagari-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Biz Kimiz?"
          subtitle="Lagari Thrust, uzay tutkusuyla bir araya gelen mühendislik öğrencilerinden oluşan bir roket takımıdır."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-lagari-dark-green/50 border border-dark-200 rounded-2xl p-8 hover:border-lagari-orange/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-lagari-orange/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-lagari-orange" />
              </div>
              <h3 className="font-exo font-bold text-xl text-lagari-cream mb-4">
                {feature.title}
              </h3>
              <p className="font-exo text-cream-300/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/about">
            <Button variant="secondary">
              Daha Fazla Bilgi
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

