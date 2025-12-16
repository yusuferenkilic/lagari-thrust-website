"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { SectionTitle, Card } from "@/components/ui";
import {
  Trophy,
  Calendar,
  MapPin,
  Medal,
  Award,
  Star,
} from "lucide-react";

// Örnek yarışma verileri (ileride veritabanından gelecek)
const competitions = [
  {
    id: "1",
    name: "TEKNOFEST 2024 Roket Yarışması",
    date: "2024-09-15",
    location: "Adana, Türkiye",
    result: "3. lük",
    category: "Orta İrtifa",
    description: "TEKNOFEST Havacılık, Uzay ve Teknoloji Festivali kapsamında düzenlenen roket yarışmasında Orta İrtifa kategorisinde yarıştık.",
    highlights: [
      "2500m hedef irtifaya başarılı ulaşım",
      "Başarılı kurtarma operasyonu",
      "En iyi aviyonik ödülü finalistliği",
    ],
    image: "/images/amblem.svg",
  },
  {
    id: "2",
    name: "TEKNOFEST 2023 Roket Yarışması",
    date: "2023-09-10",
    location: "Ankara, Türkiye",
    result: "5. lik",
    category: "Orta İrtifa",
    description: "2023 yılındaki TEKNOFEST yarışmasında ilk kez Orta İrtifa kategorisinde yer aldık.",
    highlights: [
      "Tüm uçuş testlerini başarıyla tamamlama",
      "1800m irtifa başarısı",
      "Takım çalışması ödülü",
    ],
    image: "/images/amblem.svg",
  },
  {
    id: "3",
    name: "TEKNOFEST 2022 Roket Yarışması",
    date: "2022-09-05",
    location: "İstanbul, Türkiye",
    result: "Katılım",
    category: "Düşük İrtifa",
    description: "Takım olarak ilk TEKNOFEST deneyimimiz. Düşük İrtifa kategorisinde yarışarak değerli tecrübeler edindik.",
    highlights: [
      "İlk resmi yarışma deneyimi",
      "Başarılı roket fırlatma",
      "Teknik değerlendirme geçişi",
    ],
    image: "/images/amblem.svg",
  },
  {
    id: "4",
    name: "Spaceport America Cup 2024",
    date: "2024-06-20",
    location: "New Mexico, ABD",
    result: "Top 20",
    category: "10K COTS",
    description: "Dünyanın en büyük öğrenci roket yarışmasında Türkiye'yi temsil ettik.",
    highlights: [
      "Uluslararası yarışma deneyimi",
      "30.000ft hedef irtifa",
      "150+ ülkeden takımlarla rekabet",
    ],
    image: "/images/amblem.svg",
  },
];

const upcomingCompetitions = [
  {
    id: "5",
    name: "TEKNOFEST 2025 Roket Yarışması",
    date: "2025-09-01",
    location: "İstanbul, Türkiye",
    category: "Yüksek İrtifa",
    description: "5000m irtifa hedefi ile Yüksek İrtifa kategorisinde yarışacağız.",
  },
  {
    id: "6",
    name: "European Rocketry Challenge 2025",
    date: "2025-10-15",
    location: "Portekiz",
    category: "3km Apogee",
    description: "Avrupa'nın prestijli roket yarışmasında yer almayı hedefliyoruz.",
  },
];

const resultIcons: Record<string, { icon: typeof Trophy; color: string }> = {
  "1. lik": { icon: Trophy, color: "text-yellow-400" },
  "2. lik": { icon: Medal, color: "text-gray-300" },
  "3. lük": { icon: Medal, color: "text-amber-600" },
  "Top 20": { icon: Award, color: "text-lagari-orange" },
};

export default function CompetitionsPage() {
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
                Yarışmalar
              </h1>
              <p className="font-exo text-xl text-cream-300/80 max-w-3xl mx-auto">
                Ulusal ve uluslararası yarışmalarda Türkiye'yi temsil ediyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "15+", label: "Yarışma Katılımı" },
                { value: "5", label: "Derece/Ödül" },
                { value: "3", label: "Uluslararası Yarışma" },
                { value: "100%", label: "Başarılı Uçuş" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center py-6 bg-lagari-dark-green/50 border border-dark-200 rounded-xl"
                >
                  <div className="font-clash font-bold text-3xl text-lagari-orange mb-1">
                    {stat.value}
                  </div>
                  <div className="font-exo text-sm text-cream-300/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Competitions */}
        <section className="py-20 bg-lagari-dark-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Geçmiş Yarışmalar"
              subtitle="Katıldığımız yarışmalar ve elde ettiğimiz başarılar"
            />

            <div className="space-y-8 mt-12">
              {competitions.map((competition, index) => (
                <motion.div
                  key={competition.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Image */}
                      <div className="lg:col-span-1">
                        <div className="aspect-video lg:aspect-square bg-lagari-dark-green rounded-xl flex items-center justify-center">
                          <Image
                            src={competition.image}
                            alt={competition.name}
                            width={80}
                            height={80}
                            className="opacity-30"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-3">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-clash font-bold text-xl md:text-2xl text-lagari-cream mb-2">
                              {competition.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-cream-300/60 font-exo text-sm">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(competition.date).toLocaleDateString("tr-TR", {
                                  year: "numeric",
                                  month: "long",
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {competition.location}
                              </span>
                              <span className="px-2 py-0.5 bg-dark-300 rounded text-cream-300/80">
                                {competition.category}
                              </span>
                            </div>
                          </div>

                          {/* Result Badge */}
                          <div className="flex items-center gap-2">
                            {resultIcons[competition.result] ? (
                              <>
                                {(() => {
                                  const ResultIcon = resultIcons[competition.result].icon;
                                  return (
                                    <ResultIcon
                                      className={`w-6 h-6 ${resultIcons[competition.result].color}`}
                                    />
                                  );
                                })()}
                              </>
                            ) : (
                              <Star className="w-6 h-6 text-cream-300/50" />
                            )}
                            <span className="font-exo font-semibold text-lagari-cream">
                              {competition.result}
                            </span>
                          </div>
                        </div>

                        <p className="font-exo text-cream-300/70 mb-4">
                          {competition.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2">
                          {competition.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-lagari-orange/10 text-lagari-orange rounded-lg font-exo text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Competitions */}
        <section className="py-20 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Yaklaşan Yarışmalar"
              subtitle="Hazırlandığımız ve katılmayı planladığımız yarışmalar"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {upcomingCompetitions.map((competition, index) => (
                <motion.div
                  key={competition.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-lagari-orange/10 to-transparent border border-lagari-orange/30 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-lagari-orange/20 text-lagari-orange rounded-full font-exo text-xs font-medium">
                        Yaklaşan
                      </span>
                      <span className="px-2 py-1 bg-dark-300 text-cream-300/80 rounded font-exo text-xs">
                        {competition.category}
                      </span>
                    </div>

                    <h3 className="font-clash font-bold text-xl text-lagari-cream mb-2">
                      {competition.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-cream-300/60 font-exo text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(competition.date).toLocaleDateString("tr-TR", {
                          year: "numeric",
                          month: "long",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {competition.location}
                      </span>
                    </div>

                    <p className="font-exo text-cream-300/70 text-sm">
                      {competition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

