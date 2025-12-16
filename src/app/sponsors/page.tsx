"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SectionTitle, Button } from "@/components/ui";
import {
  Handshake,
  ExternalLink,
  Mail,
  ArrowRight,
  Star,
  Award,
  Diamond,
  Gem,
} from "lucide-react";

// Örnek sponsor verileri (ileride veritabanından gelecek)
const sponsors = {
  platinum: [
    {
      id: "1",
      name: "Ana Sponsor A",
      logo: "/images/amblem.svg",
      website: "https://example.com",
      description: "Roket projelerimizin ana destekçisi",
    },
  ],
  gold: [
    {
      id: "2",
      name: "Altın Sponsor B",
      logo: "/images/amblem.svg",
      website: "https://example.com",
      description: "Aviyonik sistemler sponsoru",
    },
    {
      id: "3",
      name: "Altın Sponsor C",
      logo: "/images/amblem.svg",
      website: "https://example.com",
      description: "Malzeme tedarik sponsoru",
    },
  ],
  silver: [
    {
      id: "4",
      name: "Gümüş Sponsor D",
      logo: "/images/amblem.svg",
      website: "https://example.com",
    },
    {
      id: "5",
      name: "Gümüş Sponsor E",
      logo: "/images/amblem.svg",
      website: "https://example.com",
    },
    {
      id: "6",
      name: "Gümüş Sponsor F",
      logo: "/images/amblem.svg",
      website: "https://example.com",
    },
  ],
  bronze: [
    {
      id: "7",
      name: "Bronz Sponsor G",
      logo: "/images/amblem.svg",
      website: "https://example.com",
    },
    {
      id: "8",
      name: "Bronz Sponsor H",
      logo: "/images/amblem.svg",
      website: "https://example.com",
    },
    {
      id: "9",
      name: "Bronz Sponsor I",
      logo: "/images/amblem.svg",
      website: "https://example.com",
    },
    {
      id: "10",
      name: "Bronz Sponsor J",
      logo: "/images/amblem.svg",
      website: "https://example.com",
    },
  ],
};

const tierConfig = {
  platinum: {
    label: "Platin Sponsor",
    icon: Diamond,
    color: "from-slate-300 to-slate-400",
    textColor: "text-slate-300",
    borderColor: "border-slate-400/30",
    bgColor: "bg-slate-400/10",
    size: "large",
  },
  gold: {
    label: "Altın Sponsor",
    icon: Star,
    color: "from-yellow-400 to-yellow-500",
    textColor: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    bgColor: "bg-yellow-400/10",
    size: "medium",
  },
  silver: {
    label: "Gümüş Sponsor",
    icon: Award,
    color: "from-gray-300 to-gray-400",
    textColor: "text-gray-300",
    borderColor: "border-gray-400/30",
    bgColor: "bg-gray-400/10",
    size: "small",
  },
  bronze: {
    label: "Bronz Sponsor",
    icon: Gem,
    color: "from-amber-600 to-amber-700",
    textColor: "text-amber-600",
    borderColor: "border-amber-600/30",
    bgColor: "bg-amber-600/10",
    size: "small",
  },
};

const sponsorshipBenefits = [
  {
    title: "Marka Görünürlüğü",
    description: "Roketlerimiz, ekipmanlarımız ve tüm etkinliklerde logo kullanımı",
  },
  {
    title: "Sosyal Medya",
    description: "Tüm sosyal medya platformlarında düzenli paylaşımlar",
  },
  {
    title: "Etkinlik Katılımı",
    description: "TEKNOFEST ve diğer yarışmalarda VIP misafir hakları",
  },
  {
    title: "Teknik Raporlar",
    description: "Proje gelişmeleri hakkında düzenli raporlama",
  },
];

// Sponsor sayısına göre dinamik grid class'ları oluştur
const getGridClasses = (count: number, maxCols: { mobile: number; tablet: number; desktop: number }) => {
  const cols = Math.min(count, maxCols.desktop);
  const tabletCols = Math.min(count, maxCols.tablet);
  const mobileCols = Math.min(count, maxCols.mobile);
  
  // Tüm olası grid class kombinasyonları (Tailwind purge için)
  const gridClasses: Record<string, string> = {
    "1-1-1": "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1",
    "1-1-2": "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2",
    "1-2-2": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
    "1-2-3": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "1-3-3": "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3",
    "1-3-4": "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4",
    "2-2-2": "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2",
    "2-2-3": "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3",
    "2-2-4": "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
    "2-3-3": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3",
    "2-3-4": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    "2-4-4": "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4",
    "2-4-5": "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5",
    "2-4-6": "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6",
    "3-3-3": "grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3",
    "3-3-4": "grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4",
    "3-4-4": "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4",
    "4-4-4": "grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4",
    "4-4-5": "grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-5",
    "4-4-6": "grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6",
  };
  
  const key = `${mobileCols}-${tabletCols}-${cols}`;
  // Eğer kombinasyon bulunamazsa, en yakın kombinasyonu kullan
  if (gridClasses[key]) {
    return gridClasses[key];
  }
  // Fallback: En yakın kombinasyonu bul
  const fallbackKey = Object.keys(gridClasses).find(k => {
    const [m, t, d] = k.split('-').map(Number);
    return m >= mobileCols && t >= tabletCols && d >= cols;
  });
  return fallbackKey ? gridClasses[fallbackKey] : "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1";
};

export default function SponsorsPage() {
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
                Sponsorlarımız
              </h1>
              <p className="font-exo text-xl text-cream-300/80 max-w-3xl mx-auto">
                Projelerimizi destekleyen ve bu yolculukta yanımızda olan değerli iş ortaklarımız.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section className="py-20 bg-lagari-black min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Platinum Sponsors */}
            {sponsors.platinum.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Diamond className="w-6 h-6 text-slate-300" />
                  <h2 className="font-clash font-bold text-2xl text-slate-300">
                    Platin Sponsorlar
                  </h2>
                </div>
                <div className={`${getGridClasses(sponsors.platinum.length, { mobile: 1, tablet: 2, desktop: 2 })} gap-8 max-w-4xl mx-auto`}>
                  {sponsors.platinum.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-slate-400/10 to-transparent border border-slate-400/30 rounded-2xl p-8 hover:border-slate-300/50 transition-all duration-300 flex flex-col justify-center items-center min-h-[280px]"
                    >
                      <div className="flex items-center justify-center flex-1 mb-6">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={120}
                          height={120}
                          className="opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <h3 className="font-exo font-bold text-xl text-lagari-cream text-center mb-2">
                        {sponsor.name}
                      </h3>
                      {sponsor.description && (
                        <p className="font-exo text-cream-300/60 text-center text-sm">
                          {sponsor.description}
                        </p>
                      )}
                      <div className="flex items-center justify-center gap-1 mt-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-exo text-sm">Ziyaret Et</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gold Sponsors */}
            {sponsors.gold.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <h2 className="font-clash font-bold text-2xl text-yellow-400">
                    Altın Sponsorlar
                  </h2>
                </div>
                <div className={`${getGridClasses(sponsors.gold.length, { mobile: 1, tablet: 2, desktop: 3 })} gap-6 max-w-5xl mx-auto`}>
                  {sponsors.gold.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/40 transition-all duration-300 flex flex-col justify-center items-center min-h-[200px]"
                    >
                      <div className="flex items-center justify-center flex-1 mb-4">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={80}
                          height={80}
                          className="opacity-50 group-hover:opacity-80 transition-opacity"
                        />
                      </div>
                      <h3 className="font-exo font-semibold text-lagari-cream text-center">
                        {sponsor.name}
                      </h3>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Silver Sponsors */}
            {sponsors.silver.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Award className="w-5 h-5 text-gray-300" />
                  <h2 className="font-clash font-bold text-xl text-gray-300">
                    Gümüş Sponsorlar
                  </h2>
                </div>
                <div className={`${getGridClasses(sponsors.silver.length, { mobile: 2, tablet: 3, desktop: 4 })} gap-4 max-w-4xl mx-auto`}>
                  {sponsors.silver.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gray-400/5 border border-gray-400/20 rounded-lg p-4 hover:border-gray-300/40 transition-all duration-300 flex flex-col justify-center items-center min-h-[150px]"
                    >
                      <div className="flex items-center justify-center flex-1 mb-2">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={50}
                          height={50}
                          className="opacity-40 group-hover:opacity-70 transition-opacity"
                        />
                      </div>
                      <p className="font-exo text-sm text-cream-300/70 text-center">
                        {sponsor.name}
                      </p>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Bronze Sponsors */}
            {sponsors.bronze.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Gem className="w-5 h-5 text-amber-600" />
                  <h2 className="font-clash font-bold text-xl text-amber-600">
                    Bronz Sponsorlar
                  </h2>
                </div>
                <div className={`${getGridClasses(sponsors.bronze.length, { mobile: 2, tablet: 4, desktop: 6 })} gap-4 max-w-5xl mx-auto`}>
                  {sponsors.bronze.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-amber-600/5 border border-amber-600/20 rounded-lg p-3 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-center min-h-[120px]"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={40}
                        height={40}
                        className="opacity-30 group-hover:opacity-60 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Become a Sponsor */}
        <section className="py-20 bg-lagari-dark-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-6">
                  Sponsor Olmak İster misiniz?
                </h2>
                <p className="font-exo text-lg text-cream-300/80 mb-8">
                  Lagari Thrust ile iş birliği yaparak Türkiye'nin uzay teknolojileri
                  yolculuğuna katkıda bulunun. Sponsorluk paketlerimiz hakkında
                  detaylı bilgi almak için bizimle iletişime geçin.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {sponsorshipBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-lagari-black/50 border border-dark-200 rounded-xl p-4"
                    >
                      <h3 className="font-exo font-semibold text-lagari-cream mb-1">
                        {benefit.title}
                      </h3>
                      <p className="font-exo text-sm text-cream-300/60">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg">
                      <Mail className="w-5 h-5 mr-2" />
                      İletişime Geç
                    </Button>
                  </Link>
                  <a
                    href="mailto:sponsorship@lagarithrust.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-200 rounded-lg text-cream-300/70 hover:text-lagari-orange hover:border-lagari-orange/50 transition-all font-exo"
                  >
                    <Handshake className="w-5 h-5" />
                    sponsorship@lagarithrust.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-lagari-black rounded-3xl border border-dark-200 flex items-center justify-center">
                  <Handshake className="w-32 h-32 text-lagari-orange/20" />
                </div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-lagari-orange/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

