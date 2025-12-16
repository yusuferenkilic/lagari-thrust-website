"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Ruler,
  Weight,
  Gauge,
  Target,
  Rocket,
  CheckCircle,
  Clock,
} from "lucide-react";

// Proje verileri (ileride veritabanından gelecek)
const projectsData: Record<string, {
  name: string;
  year: number;
  status: string;
  description: string;
  longDescription: string;
  image: string;
  specs: {
    height: string;
    diameter: string;
    weight: string;
    apogee: string;
    motor: string;
    recovery: string;
  };
  features: string[];
  gallery: string[];
}> = {
  "lagari-1": {
    name: "Lagari-I",
    year: 2021,
    status: "completed",
    description: "İlk roketimiz. Temel roket tasarım prensiplerini öğrendiğimiz ve uyguladığımız proje.",
    longDescription: `Lagari-I, takımımızın ilk roket projesidir. Bu proje ile roket tasarımının temel prensiplerini öğrendik ve uyguladık. 
    
    Basit bir katı yakıtlı motor kullanarak tasarlanan bu roket, takımımızın roket bilimi yolculuğunun başlangıç noktası oldu. Paraşüt kurtarma sistemi, temel aviyonik ve yapısal tasarım konularında değerli deneyimler kazandık.`,
    image: "/images/amblem.svg",
    specs: {
      height: "1.2m",
      diameter: "75mm",
      weight: "3.5kg",
      apogee: "500m",
      motor: "I-serisi Katı Yakıtlı",
      recovery: "Tek Paraşüt",
    },
    features: [
      "Fiberglas gövde",
      "Tek aşamalı kurtarma sistemi",
      "Temel altimetre",
      "Manuel paraşüt açma",
    ],
    gallery: [],
  },
  "lagari-2": {
    name: "Lagari-II",
    year: 2022,
    status: "completed",
    description: "Geliştirilmiş aviyonik sistemler ve kurtarma mekanizması ile ikinci roketimiz.",
    longDescription: `Lagari-II, ilk roketimizden aldığımız derslerle tasarlanan geliştirilmiş bir versiyondur. 
    
    Bu projede ilk kez kendi tasarladığımız uçuş bilgisayarını kullandık. Çift aşamalı kurtarma sistemi ve telemetri özelliklerini ekleyerek roketimizin güvenilirliğini artırdık.`,
    image: "/images/amblem.svg",
    specs: {
      height: "1.5m",
      diameter: "98mm",
      weight: "5.2kg",
      apogee: "1200m",
      motor: "J-serisi Katı Yakıtlı",
      recovery: "Çift Aşamalı (Drogue + Ana)",
    },
    features: [
      "Özel tasarım uçuş bilgisayarı",
      "Çift aşamalı kurtarma sistemi",
      "Temel telemetri (LoRa)",
      "Fiberglas + Karbon fiber gövde",
    ],
    gallery: [],
  },
  "lagari-3": {
    name: "Lagari-III",
    year: 2023,
    status: "completed",
    description: "TEKNOFEST yarışması için tasarlanan, çift aşamalı kurtarma sistemine sahip roket.",
    longDescription: `Lagari-III, TEKNOFEST Roket Yarışması için özel olarak tasarlandı. 
    
    Bu roket, yarışma gereksinimlerini karşılamak için optimize edildi. Gelişmiş aviyonik sistemler, hassas irtifa kontrolü ve güvenilir kurtarma mekanizmaları ile donatıldı.`,
    image: "/images/amblem.svg",
    specs: {
      height: "1.8m",
      diameter: "98mm",
      weight: "6.8kg",
      apogee: "2500m",
      motor: "K-serisi Katı Yakıtlı",
      recovery: "Çift Aşamalı + Yedek",
    },
    features: [
      "TEKNOFEST uyumlu tasarım",
      "Gelişmiş uçuş bilgisayarı v2",
      "GPS destekli telemetri",
      "Yedek kurtarma sistemi",
      "Gerçek zamanlı veri aktarımı",
    ],
    gallery: [],
  },
  "lagari-4": {
    name: "Lagari-IV",
    year: 2024,
    status: "completed",
    description: "Kompozit malzeme gövde ve gelişmiş telemetri sistemi ile en başarılı roketimiz.",
    longDescription: `Lagari-IV, şu ana kadarki en gelişmiş roketimizdir. 
    
    Tam karbon fiber gövde, gelişmiş aviyonik sistemler ve yüksek performanslı motor ile 3500m irtifaya ulaştı. Bu proje ile ulusal yarışmalarda önemli başarılar elde ettik.`,
    image: "/images/amblem.svg",
    specs: {
      height: "2.1m",
      diameter: "114mm",
      weight: "8.5kg",
      apogee: "3500m",
      motor: "L-serisi Katı Yakıtlı",
      recovery: "Akıllı Çift Aşamalı",
    },
    features: [
      "Tam karbon fiber gövde",
      "Akıllı kurtarma algoritması",
      "900MHz uzun menzil telemetri",
      "IMU sensör füzyonu",
      "Yer istasyonu entegrasyonu",
      "Video telemetri",
    ],
    gallery: [],
  },
  "lagari-5": {
    name: "Lagari-V",
    year: 2025,
    status: "active",
    description: "Şu an geliştirmekte olduğumuz, 5000m irtifa hedefli yeni nesil roketimiz.",
    longDescription: `Lagari-V, şu anda aktif olarak geliştirdiğimiz en iddialı projemizdir. 
    
    5000m irtifa hedefi ile tasarlanan bu roket, önceki tüm projelerimizden edindiğimiz deneyimleri bir araya getiriyor. Modüler tasarım, gelişmiş aviyonik ve yeni nesil kompozit malzemeler kullanılıyor.`,
    image: "/images/amblem.svg",
    specs: {
      height: "2.4m",
      diameter: "127mm",
      weight: "10kg",
      apogee: "5000m (hedef)",
      motor: "M-serisi Katı Yakıtlı",
      recovery: "Aktif Kontrollü",
    },
    features: [
      "Modüler gövde tasarımı",
      "Aktif kontrollü kurtarma",
      "Çoklu yedeklemeli aviyonik",
      "Yüksek hız telemetri",
      "Otomatik fren sistemi",
      "Gelişmiş yer istasyonu",
    ],
    gallery: [],
  },
};

const statusLabels: Record<string, { label: string; color: string; icon: typeof CheckCircle }> = {
  completed: { label: "Tamamlandı", color: "bg-green-500/20 text-green-400", icon: CheckCircle },
  active: { label: "Geliştiriliyor", color: "bg-lagari-orange/20 text-lagari-orange", icon: Clock },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-clash font-bold text-4xl text-lagari-cream mb-4">
              Proje Bulunamadı
            </h1>
            <Link href="/projects">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Projelere Dön
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const StatusIcon = statusLabels[project.status]?.icon || CheckCircle;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-lagari-gradient" />
          <div className="absolute inset-0 bg-hero-glow opacity-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                href="/projects"
                className="inline-flex items-center text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tüm Projeler
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-exo text-sm ${
                      statusLabels[project.status].color
                    }`}
                  >
                    <StatusIcon className="w-4 h-4" />
                    {statusLabels[project.status].label}
                  </span>
                  <span className="flex items-center gap-2 text-cream-300/50 font-exo text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </span>
                </div>

                <h1 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-lagari-cream mb-6">
                  {project.name}
                </h1>

                <p className="font-exo text-xl text-cream-300/80 mb-8">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-lagari-black rounded-3xl border border-dark-200 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={250}
                    height={250}
                    className="opacity-40"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-lagari-orange/20 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specs Section */}
        <section className="py-16 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-clash font-bold text-2xl text-lagari-cream mb-8 text-center">
                Teknik Özellikler
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { icon: Ruler, label: "Yükseklik", value: project.specs.height },
                  { icon: Gauge, label: "Çap", value: project.specs.diameter },
                  { icon: Weight, label: "Ağırlık", value: project.specs.weight },
                  { icon: Target, label: "İrtifa", value: project.specs.apogee },
                  { icon: Rocket, label: "Motor", value: project.specs.motor },
                  { icon: CheckCircle, label: "Kurtarma", value: project.specs.recovery },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="bg-lagari-dark-green border border-dark-200 rounded-xl p-4 text-center"
                  >
                    <spec.icon className="w-6 h-6 text-lagari-orange mx-auto mb-2" />
                    <p className="font-exo text-xs text-cream-300/50 mb-1">{spec.label}</p>
                    <p className="font-exo text-sm text-lagari-cream font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description & Features */}
        <section className="py-20 bg-lagari-dark-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-clash font-bold text-2xl text-lagari-cream mb-6">
                  Proje Hakkında
                </h2>
                <div className="prose prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="font-exo text-cream-300/80 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-clash font-bold text-2xl text-lagari-cream mb-6">
                  Özellikler
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-exo text-cream-300/80"
                    >
                      <CheckCircle className="w-5 h-5 text-lagari-orange flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
              <h2 className="font-clash font-bold text-3xl text-lagari-cream mb-6">
                Bu Projede Yer Almak İster misin?
              </h2>
              <p className="font-exo text-lg text-cream-300/70 mb-8">
                Roket projelerimizde aktif rol alarak deneyim kazan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/apply">
                  <Button size="lg">
                    Başvur
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="secondary" size="lg">
                    Diğer Projeler
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

