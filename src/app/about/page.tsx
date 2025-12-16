"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SectionTitle, Button } from "@/components/ui";
import {
  Target,
  Eye,
  Heart,
  Rocket,
  Users,
  Trophy,
  Calendar,
  ArrowRight,
} from "lucide-react";

const stats = [
  { icon: Calendar, value: "2020", label: "Kuruluş Yılı" },
  { icon: Users, value: "50+", label: "Aktif Üye" },
  { icon: Rocket, value: "10+", label: "Proje" },
  { icon: Trophy, value: "15+", label: "Yarışma" },
];

const values = [
  {
    icon: Target,
    title: "Misyon",
    description:
      "Roket bilimi ve uzay teknolojileri alanında Türkiye'yi temsil eden, yenilikçi projeler geliştiren, ulusal ve uluslararası yarışmalarda başarıyla yer alan bir takım olmak.",
  },
  {
    icon: Eye,
    title: "Vizyon",
    description:
      "Uzay teknolojilerinde öncü bir ekip olarak, Türkiye'nin uzay yolculuğuna katkıda bulunmak ve gelecek nesil mühendisleri yetiştirmek.",
  },
  {
    icon: Heart,
    title: "Değerler",
    description:
      "Takım çalışması, sürekli öğrenme, yenilikçilik, mühendislik mükemmelliği ve tutku temel değerlerimizdir. Her projede bu değerleri yaşatıyoruz.",
  },
];

export default function AboutPage() {
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
                Hakkımızda
              </h1>
              <p className="font-exo text-xl text-cream-300/80 max-w-3xl mx-auto">
                Lagari Thrust, gökyüzüne uzanan hayalleri gerçeğe dönüştürmek için
                bir araya gelen tutkulu mühendislik öğrencilerinden oluşan bir roket takımıdır.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-lagari-orange/10 rounded-xl mb-4">
                    <stat.icon className="w-7 h-7 text-lagari-orange" />
                  </div>
                  <div className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-1">
                    {stat.value}
                  </div>
                  <div className="font-exo text-cream-300/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-32 bg-lagari-dark-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-6">
                  Hikayemiz
                </h2>
                <div className="space-y-4 text-cream-300/80 font-exo">
                  <p>
                    Lagari Thrust, 2020 yılında bir grup mühendislik öğrencisinin
                    ortak tutkusu olan roket bilimi etrafında şekillendi. İsmimizi,
                    tarihteki ilk roket uçuşunu gerçekleştirdiği rivayet edilen
                    Osmanlı mucidi Lagari Hasan Çelebi'den alıyoruz.
                  </p>
                  <p>
                    Küçük bir ekip olarak başladığımız yolculuğumuzda, bugün 50'den
                    fazla aktif üyeyle çalışıyoruz. Mekanik, aviyonik, aerodinamik
                    ve simülasyon alanlarında uzmanlaşmış birimlerimizle projelerimizi
                    hayata geçiriyoruz.
                  </p>
                  <p>
                    Her yıl TEKNOFEST ve uluslararası roket yarışmalarına katılarak
                    kendimizi geliştiriyor, Türkiye'yi en iyi şekilde temsil etmeye
                    çalışıyoruz.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-lagari-black rounded-2xl border border-dark-200 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/amblem.svg"
                    alt="Lagari Thrust"
                    width={200}
                    height={200}
                    className="opacity-30"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-lagari-orange/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lagari-orange/5 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Değerlerimiz"
              subtitle="Bizi bir arada tutan ve ileriye taşıyan temel prensiplerimiz"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-lagari-dark-green/50 border border-dark-200 rounded-2xl p-8 hover:border-lagari-orange/30 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-lagari-orange/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-lagari-orange" />
                  </div>
                  <h3 className="font-exo font-bold text-xl text-lagari-cream mb-4">
                    {value.title}
                  </h3>
                  <p className="font-exo text-cream-300/70 leading-relaxed">
                    {value.description}
                  </p>
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
              <h2 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-6">
                Ekibimize Katılmak İster misin?
              </h2>
              <p className="font-exo text-lg text-cream-300/70 mb-8 max-w-2xl mx-auto">
                Roket bilimine tutkuyla bağlı, öğrenmeye ve gelişmeye açık
                takım arkadaşları arıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/apply">
                  <Button size="lg">
                    <Rocket className="w-5 h-5 mr-2" />
                    Başvur
                  </Button>
                </Link>
                <Link href="/teams">
                  <Button variant="secondary" size="lg">
                    Birimleri İncele
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

