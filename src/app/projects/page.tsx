"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SectionTitle, Card, Button } from "@/components/ui";
import {
  Rocket,
  ArrowRight,
  Calendar,
  Ruler,
  Weight,
  Gauge,
  Target,
} from "lucide-react";

// Örnek proje verileri (ileride veritabanından gelecek)
const projects = [
  {
    id: "1",
    name: "Lagari-I",
    slug: "lagari-1",
    year: 2021,
    status: "completed",
    description:
      "İlk roketimiz. Temel roket tasarım prensiplerini öğrendiğimiz ve uyguladığımız proje.",
    image: "/images/amblem.svg",
    specs: {
      height: "1.2m",
      diameter: "75mm",
      weight: "3.5kg",
      apogee: "500m",
    },
    featured: true,
  },
  {
    id: "2",
    name: "Lagari-II",
    slug: "lagari-2",
    year: 2022,
    status: "completed",
    description:
      "Geliştirilmiş aviyonik sistemler ve kurtarma mekanizması ile ikinci roketimiz.",
    image: "/images/amblem.svg",
    specs: {
      height: "1.5m",
      diameter: "98mm",
      weight: "5.2kg",
      apogee: "1200m",
    },
    featured: true,
  },
  {
    id: "3",
    name: "Lagari-III",
    slug: "lagari-3",
    year: 2023,
    status: "completed",
    description:
      "TEKNOFEST yarışması için tasarlanan, çift aşamalı kurtarma sistemine sahip roket.",
    image: "/images/amblem.svg",
    specs: {
      height: "1.8m",
      diameter: "98mm",
      weight: "6.8kg",
      apogee: "2500m",
    },
    featured: true,
  },
  {
    id: "4",
    name: "Lagari-IV",
    slug: "lagari-4",
    year: 2024,
    status: "completed",
    description:
      "Kompozit malzeme gövde ve gelişmiş telemetri sistemi ile en başarılı roketimiz.",
    image: "/images/amblem.svg",
    specs: {
      height: "2.1m",
      diameter: "114mm",
      weight: "8.5kg",
      apogee: "3500m",
    },
    featured: true,
  },
  {
    id: "5",
    name: "Lagari-V",
    slug: "lagari-5",
    year: 2025,
    status: "active",
    description:
      "Şu an geliştirmekte olduğumuz, 5000m irtifa hedefli yeni nesil roketimiz.",
    image: "/images/amblem.svg",
    specs: {
      height: "2.4m",
      diameter: "127mm",
      weight: "10kg",
      apogee: "5000m (hedef)",
    },
    featured: true,
  },
];

const statusLabels: Record<string, { label: string; color: string }> = {
  completed: { label: "Tamamlandı", color: "bg-green-500/20 text-green-400" },
  active: { label: "Geliştiriliyor", color: "bg-lagari-orange/20 text-lagari-orange" },
  upcoming: { label: "Planlanan", color: "bg-blue-500/20 text-blue-400" },
};

export default function ProjectsPage() {
  const activeProject = projects.find((p) => p.status === "active");
  const completedProjects = projects.filter((p) => p.status === "completed");

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-lagari-gradient" />
          <div className="absolute inset-0 bg-hero-glow opacity-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-lagari-cream mb-6">
                Projelerimiz
              </h1>
              <p className="font-exo text-xl text-cream-300/80 max-w-3xl mx-auto">
                Kuruluşumuzdan bu yana geliştirdiğimiz roketler ve devam eden projelerimiz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Active Project Highlight */}
        {activeProject && (
          <section className="py-16 bg-lagari-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-lagari-orange/10 to-transparent border border-lagari-orange/30 rounded-3xl p-8 lg:p-12"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-lagari-orange/20 text-lagari-orange rounded-full font-exo text-sm font-medium">
                    Aktif Proje
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-4">
                      {activeProject.name}
                    </h2>
                    <p className="font-exo text-lg text-cream-300/80 mb-8">
                      {activeProject.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Ruler className="w-5 h-5 text-lagari-orange" />
                        <div>
                          <p className="font-exo text-xs text-cream-300/50">Yükseklik</p>
                          <p className="font-exo text-lagari-cream">{activeProject.specs.height}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Weight className="w-5 h-5 text-lagari-orange" />
                        <div>
                          <p className="font-exo text-xs text-cream-300/50">Ağırlık</p>
                          <p className="font-exo text-lagari-cream">{activeProject.specs.weight}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Gauge className="w-5 h-5 text-lagari-orange" />
                        <div>
                          <p className="font-exo text-xs text-cream-300/50">Çap</p>
                          <p className="font-exo text-lagari-cream">{activeProject.specs.diameter}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-lagari-orange" />
                        <div>
                          <p className="font-exo text-xs text-cream-300/50">Hedef İrtifa</p>
                          <p className="font-exo text-lagari-cream">{activeProject.specs.apogee}</p>
                        </div>
                      </div>
                    </div>

                    <Link href={`/projects/${activeProject.slug}`}>
                      <Button>
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="aspect-square bg-lagari-dark-green rounded-2xl border border-dark-200 flex items-center justify-center">
                      <Image
                        src={activeProject.image}
                        alt={activeProject.name}
                        width={200}
                        height={200}
                        className="opacity-40"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-lagari-orange/20 rounded-full blur-3xl" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Projects Grid */}
        <section className="py-20 bg-lagari-dark-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Tamamlanan Projeler"
              subtitle="Başarıyla tamamladığımız roket projeleri"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {completedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <Card className="h-full group cursor-pointer">
                      {/* Image */}
                      <div className="relative h-48 bg-lagari-black flex items-center justify-center overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={100}
                          height={100}
                          className="opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-2 py-1 rounded-full font-exo text-xs ${
                              statusLabels[project.status].color
                            }`}
                          >
                            {statusLabels[project.status].label}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-cream-300/50 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-exo text-sm">{project.year}</span>
                        </div>

                        <h3 className="font-clash font-bold text-xl text-lagari-cream mb-2 group-hover:text-lagari-orange transition-colors">
                          {project.name}
                        </h3>

                        <p className="font-exo text-cream-300/70 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Quick Specs */}
                        <div className="flex items-center gap-4 text-cream-300/50 text-xs font-exo">
                          <span>{project.specs.height}</span>
                          <span>•</span>
                          <span>{project.specs.weight}</span>
                          <span>•</span>
                          <span>{project.specs.apogee}</span>
                        </div>

                        <div className="mt-4 flex items-center text-lagari-orange opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="font-exo text-sm">Detaylar</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-lagari-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="w-12 h-12 text-lagari-orange mx-auto mb-6" />
              <h2 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-6">
                Projelerimize Katkıda Bulun
              </h2>
              <p className="font-exo text-lg text-cream-300/70 mb-8 max-w-2xl mx-auto">
                Yeni roket projelerimizde yer almak ve deneyim kazanmak için
                takımımıza katıl.
              </p>
              <Link href="/apply">
                <Button size="lg">
                  Takıma Katıl
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

