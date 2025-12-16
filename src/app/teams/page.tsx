"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SectionTitle, Card, Button } from "@/components/ui";
import {
  Wrench,
  Cpu,
  Wind,
  LineChart,
  Handshake,
  Share2,
  ArrowRight,
  Users,
} from "lucide-react";

const teams = [
  {
    name: "Mekanik Ekibi",
    slug: "mechanical",
    icon: Wrench,
    description: "Roket yapısal tasarımı, üretim süreçleri ve malzeme seçimi",
    longDescription:
      "Roketlerimizin gövde, kanat ve motor montaj sistemlerinin tasarımı ve üretiminden sorumlu ekibimiz.",
    color: "from-blue-500 to-blue-600",
    members: 12,
  },
  {
    name: "Aviyonik Ekibi",
    slug: "avionics",
    icon: Cpu,
    description: "Elektronik sistemler, sensörler ve uçuş yazılımı",
    longDescription:
      "Uçuş bilgisayarı, telemetri, kurtarma sistemleri ve yer istasyonu yazılımlarını geliştiren ekibimiz.",
    color: "from-green-500 to-green-600",
    members: 10,
  },
  {
    name: "Aerodinamik Ekibi",
    slug: "aerodynamics",
    icon: Wind,
    description: "Aerodinamik analiz, CFD simülasyonları ve optimizasyon",
    longDescription:
      "Roket aerodinamiğini analiz eden, CFD simülasyonları yapan ve performansı optimize eden ekibimiz.",
    color: "from-purple-500 to-purple-600",
    members: 8,
  },
  {
    name: "3-DOF ve Uçuş Benzetim",
    slug: "simulation",
    icon: LineChart,
    description: "Uçuş simülasyonu, 3-DOF modelleme ve trajektori analizi",
    longDescription:
      "Roket uçuş dinamiklerini modelleyen, simülasyonlar yapan ve uçuş profillerini optimize eden ekibimiz.",
    color: "from-yellow-500 to-yellow-600",
    members: 6,
  },
  {
    name: "Sponsorluk Ekibi",
    slug: "sponsorship",
    icon: Handshake,
    description: "Sponsor ilişkileri, iş geliştirme ve kurumsal iletişim",
    longDescription:
      "Takımımızın mali sürdürülebilirliğini sağlayan, sponsor ilişkilerini yöneten ekibimiz.",
    color: "from-pink-500 to-pink-600",
    members: 5,
  },
  {
    name: "Sosyal Medya Ekibi",
    slug: "social-media",
    icon: Share2,
    description: "İçerik üretimi, sosyal medya yönetimi ve tanıtım",
    longDescription:
      "Takımımızın görünürlüğünü artıran, içerik üreten ve sosyal medya hesaplarını yöneten ekibimiz.",
    color: "from-cyan-500 to-cyan-600",
    members: 4,
  },
];

export default function TeamsPage() {
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
                Birimlerimiz
              </h1>
              <p className="font-exo text-xl text-cream-300/80 max-w-3xl mx-auto">
                Her biri kendi alanında uzmanlaşmış, tutkulu mühendislerden oluşan
                ekiplerimizle projelerimizi hayata geçiriyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Teams Grid */}
        <section className="py-20 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.map((team, index) => (
                <motion.div
                  key={team.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/teams/${team.slug}`}>
                    <Card className="p-8 h-full group cursor-pointer">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <team.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="font-exo font-bold text-xl text-lagari-cream mb-3 group-hover:text-lagari-orange transition-colors">
                        {team.name}
                      </h3>

                      <p className="font-exo text-cream-300/70 mb-6 leading-relaxed">
                        {team.longDescription}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-cream-300/50">
                          <Users className="w-4 h-4" />
                          <span className="font-exo text-sm">
                            {team.members} Üye
                          </span>
                        </div>

                        <div className="flex items-center text-lagari-orange opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="font-exo text-sm mr-1">İncele</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-lagari-dark-green">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-6">
                Hangi Birimde Yer Almak İstersin?
              </h2>
              <p className="font-exo text-lg text-cream-300/70 mb-8 max-w-2xl mx-auto">
                Deneyimin ne olursa olsun, öğrenmeye ve gelişmeye açıksan seni
                aramızda görmekten mutluluk duyarız.
              </p>
              <Link href="/apply">
                <Button size="lg">
                  Hemen Başvur
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

