"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  Cpu,
  Wind,
  LineChart,
  Handshake,
  Share2,
  ArrowRight,
} from "lucide-react";
import { SectionTitle, Card, Button } from "@/components/ui";

const teams = [
  {
    name: "Mekanik Ekibi",
    slug: "mechanical",
    icon: Wrench,
    description: "Roket yapısal tasarımı ve üretim süreçleri",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Aviyonik Ekibi",
    slug: "avionics",
    icon: Cpu,
    description: "Elektronik sistemler ve uçuş yazılımı",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Aerodinamik Ekibi",
    slug: "aerodynamics",
    icon: Wind,
    description: "Aerodinamik analiz ve optimizasyon",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "3-DOF ve Simülasyon",
    slug: "simulation",
    icon: LineChart,
    description: "Uçuş benzetim ve modelleme",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Sponsorluk Ekibi",
    slug: "sponsorship",
    icon: Handshake,
    description: "Sponsor ilişkileri ve iş geliştirme",
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "Sosyal Medya Ekibi",
    slug: "social-media",
    icon: Share2,
    description: "İletişim ve medya yönetimi",
    color: "from-cyan-500 to-cyan-600",
  },
];

export default function TeamsPreview() {
  return (
    <section className="py-24 bg-lagari-dark-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Birimlerimiz"
          subtitle="Her biri kendi alanında uzmanlaşmış, tutkulu mühendislerden oluşan ekiplerimiz"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {teams.map((team, index) => (
            <motion.div
              key={team.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/teams/${team.slug}`}>
                <Card className="p-6 h-full group cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${team.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <team.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-exo font-bold text-lg text-lagari-cream mb-2 group-hover:text-lagari-orange transition-colors">
                    {team.name}
                  </h3>
                  <p className="font-exo text-cream-300/70 text-sm">
                    {team.description}
                  </p>
                  <div className="mt-4 flex items-center text-lagari-orange opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-exo text-sm">Ekibi İncele</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/teams">
            <Button variant="secondary">
              Tüm Birimleri Gör
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

