"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SectionTitle, Button, Card } from "@/components/ui";
import {
  Wrench,
  Cpu,
  Wind,
  LineChart,
  Handshake,
  Share2,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Users,
  Mail,
} from "lucide-react";

// Birim verileri
const teamsData: Record<string, {
  name: string;
  icon: typeof Wrench;
  color: string;
  description: string;
  longDescription: string;
  responsibilities: string[];
  skills: string[];
  projects: string[];
  leadName: string;
  leadRole: string;
  memberCount: number;
}> = {
  mechanical: {
    name: "Mekanik Ekibi",
    icon: Wrench,
    color: "from-blue-500 to-blue-600",
    description: "Roket yapısal tasarımı ve üretim süreçleri",
    longDescription:
      "Mekanik Ekibi, roketlerimizin yapısal bütünlüğünden ve üretim süreçlerinden sorumludur. Gövde tasarımından kanat profiline, motor montaj sisteminden kurtarma mekanizmalarına kadar tüm mekanik bileşenleri tasarlar ve üretir.",
    responsibilities: [
      "Roket gövde tasarımı ve üretimi",
      "Kanat ve stabilizatör sistemleri",
      "Motor montaj ve tutma sistemleri",
      "Paraşüt bölmesi ve kurtarma mekanizmaları",
      "Malzeme seçimi ve mukavemet analizleri",
      "CAD modelleme ve teknik çizimler",
    ],
    skills: [
      "SolidWorks / Fusion 360",
      "ANSYS / FEA Analizi",
      "CNC ve 3D Baskı",
      "Kompozit malzeme işleme",
      "Teknik çizim okuma",
    ],
    projects: [
      "Lagari-1 Gövde Tasarımı",
      "Karbon Fiber Kanat Üretimi",
      "Modüler Motor Montaj Sistemi",
    ],
    leadName: "Takım Lideri",
    leadRole: "Mekanik Mühendisliği",
    memberCount: 12,
  },
  avionics: {
    name: "Aviyonik Ekibi",
    icon: Cpu,
    color: "from-green-500 to-green-600",
    description: "Elektronik sistemler ve uçuş yazılımı",
    longDescription:
      "Aviyonik Ekibi, roketlerimizin 'beynini' oluşturur. Uçuş bilgisayarı, sensör sistemleri, telemetri, kurtarma tetikleme ve yer istasyonu yazılımları bu ekibin sorumluluk alanındadır.",
    responsibilities: [
      "Uçuş bilgisayarı tasarımı ve programlama",
      "Sensör entegrasyonu (IMU, barometre, GPS)",
      "Telemetri sistemi geliştirme",
      "Kurtarma sistemi elektroniği",
      "Yer istasyonu yazılımı",
      "PCB tasarımı ve üretimi",
    ],
    skills: [
      "C/C++ ve Python",
      "Embedded sistemler",
      "PCB tasarımı (KiCad/Altium)",
      "RF iletişim",
      "Sensör füzyonu",
    ],
    projects: [
      "Lagari Uçuş Bilgisayarı v2",
      "900MHz Telemetri Sistemi",
      "Yer İstasyonu Yazılımı",
    ],
    leadName: "Takım Lideri",
    leadRole: "Elektrik-Elektronik Mühendisliği",
    memberCount: 10,
  },
  aerodynamics: {
    name: "Aerodinamik Ekibi",
    icon: Wind,
    color: "from-purple-500 to-purple-600",
    description: "Aerodinamik analiz ve optimizasyon",
    longDescription:
      "Aerodinamik Ekibi, roketlerimizin hava içindeki davranışını analiz eder ve optimize eder. CFD simülasyonları, rüzgar tüneli testleri ve aerodinamik performans iyileştirmeleri bu ekibin uzmanlık alanıdır.",
    responsibilities: [
      "CFD (Hesaplamalı Akışkanlar Dinamiği) analizleri",
      "Sürükleme ve kaldırma katsayısı optimizasyonu",
      "Kanat profili tasarımı",
      "Stabilite analizi",
      "Rüzgar tüneli test planlaması",
      "Aerodinamik ısınma analizi",
    ],
    skills: [
      "ANSYS Fluent / OpenFOAM",
      "MATLAB/Python",
      "OpenRocket / RASAero",
      "Akışkanlar mekaniği",
      "Veri analizi",
    ],
    projects: [
      "Lagari-2 Kanat Optimizasyonu",
      "Transonik Burun Koni Tasarımı",
      "CFD Validasyon Çalışması",
    ],
    leadName: "Takım Lideri",
    leadRole: "Havacılık Mühendisliği",
    memberCount: 8,
  },
  simulation: {
    name: "3-DOF ve Uçuş Benzetim Ekibi",
    icon: LineChart,
    color: "from-yellow-500 to-yellow-600",
    description: "Uçuş simülasyonu ve trajektori analizi",
    longDescription:
      "Simülasyon Ekibi, roketlerimizin uçuş öncesi performansını tahmin eden modeller geliştirir. 3-DOF ve 6-DOF simülasyonları, Monte Carlo analizleri ve trajektori optimizasyonu bu ekibin sorumluluk alanıdır.",
    responsibilities: [
      "3-DOF ve 6-DOF uçuş modelleri",
      "Trajektori simülasyonu ve optimizasyonu",
      "Monte Carlo analizi",
      "Rüzgar etkisi modelleme",
      "Apogee tahmini",
      "Uçuş verileri analizi",
    ],
    skills: [
      "MATLAB/Simulink",
      "Python (NumPy, SciPy)",
      "OpenRocket",
      "Diferansiyel denklemler",
      "İstatistiksel analiz",
    ],
    projects: [
      "Lagari Simülasyon Platformu",
      "Monte Carlo Analiz Aracı",
      "Gerçek Zamanlı Trajektori Tahmini",
    ],
    leadName: "Takım Lideri",
    leadRole: "Makine Mühendisliği",
    memberCount: 6,
  },
  sponsorship: {
    name: "Sponsorluk Ekibi",
    icon: Handshake,
    color: "from-pink-500 to-pink-600",
    description: "Sponsor ilişkileri ve iş geliştirme",
    longDescription:
      "Sponsorluk Ekibi, takımımızın mali sürdürülebilirliğini sağlar. Sponsor arayışı, kurumsal iletişim, sponsorluk paketleri hazırlama ve sponsor ilişkilerini yönetme bu ekibin görevleri arasındadır.",
    responsibilities: [
      "Potansiyel sponsor araştırması",
      "Sponsorluk paketleri hazırlama",
      "Sponsor sunumları ve toplantıları",
      "Kurumsal iletişim",
      "Sponsor ilişkileri yönetimi",
      "Bütçe planlaması desteği",
    ],
    skills: [
      "İş geliştirme",
      "Sunum ve iletişim",
      "Microsoft Office",
      "CRM araçları",
      "Pazarlama temelleri",
    ],
    projects: [
      "2024 Sponsor Portfolyosu",
      "Kurumsal Tanıtım Kitapçığı",
      "Sponsor İlişkileri CRM",
    ],
    leadName: "Takım Lideri",
    leadRole: "İşletme / Mühendislik",
    memberCount: 5,
  },
  "social-media": {
    name: "Sosyal Medya Ekibi",
    icon: Share2,
    color: "from-cyan-500 to-cyan-600",
    description: "İçerik üretimi ve sosyal medya yönetimi",
    longDescription:
      "Sosyal Medya Ekibi, takımımızın görünürlüğünü artırır ve topluluğumuzu büyütür. İçerik üretimi, sosyal medya yönetimi, fotoğraf/video çekimleri ve etkinlik duyuruları bu ekibin sorumluluk alanındadır.",
    responsibilities: [
      "Sosyal medya içerik planlaması",
      "Fotoğraf ve video çekimleri",
      "Grafik tasarım",
      "Blog yazıları ve haberler",
      "Etkinlik duyuruları",
      "Topluluk yönetimi",
    ],
    skills: [
      "Adobe Creative Suite",
      "Canva / Figma",
      "Video düzenleme",
      "Fotoğrafçılık",
      "Copywriting",
    ],
    projects: [
      "Instagram İçerik Stratejisi",
      "YouTube Belgesel Serisi",
      "Takım Tanıtım Videosu",
    ],
    leadName: "Takım Lideri",
    leadRole: "İletişim / Tasarım",
    memberCount: 4,
  },
};

export default function TeamDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const team = teamsData[slug];

  if (!team) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-clash font-bold text-4xl text-lagari-cream mb-4">
              Birim Bulunamadı
            </h1>
            <Link href="/teams">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Birimlere Dön
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = team.icon;

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
                href="/teams"
                className="inline-flex items-center text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tüm Birimler
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
            >
              <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${team.color} flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="w-12 h-12 text-white" />
              </div>

              <div>
                <h1 className="font-clash font-bold text-4xl md:text-5xl text-lagari-cream mb-4">
                  {team.name}
                </h1>
                <p className="font-exo text-xl text-cream-300/80 max-w-2xl">
                  {team.longDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-lagari-black border-b border-dark-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-lagari-orange" />
                <span className="font-exo text-lagari-cream">
                  <strong>{team.memberCount}</strong> Aktif Üye
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-lagari-orange" />
                <span className="font-exo text-lagari-cream">
                  <strong>{team.projects.length}</strong> Aktif Proje
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-lagari-dark-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* Responsibilities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-clash font-bold text-2xl text-lagari-cream mb-6">
                    Sorumluluk Alanları
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {team.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 font-exo text-cream-300/80"
                      >
                        <CheckCircle className="w-5 h-5 text-lagari-orange flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Projects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="font-clash font-bold text-2xl text-lagari-cream mb-6">
                    Güncel Projeler
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {team.projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-lagari-black border border-dark-200 rounded-xl p-4"
                      >
                        <p className="font-exo text-lagari-cream">{project}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-lagari-black border border-dark-200 rounded-2xl p-6"
                >
                  <h3 className="font-exo font-bold text-lg text-lagari-cream mb-4">
                    Aranan Yetenekler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-lagari-orange/10 text-lagari-orange rounded-lg font-exo text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Join CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-br from-lagari-orange/20 to-transparent border border-lagari-orange/30 rounded-2xl p-6"
                >
                  <h3 className="font-exo font-bold text-lg text-lagari-cream mb-2">
                    Bu Birime Katıl
                  </h3>
                  <p className="font-exo text-cream-300/70 text-sm mb-4">
                    {team.name} ekibinde yer almak ister misin? Hemen başvur!
                  </p>
                  <Link href="/apply">
                    <Button className="w-full">
                      Başvur
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-lagari-black border border-dark-200 rounded-2xl p-6"
                >
                  <h3 className="font-exo font-bold text-lg text-lagari-cream mb-4">
                    İletişim
                  </h3>
                  <a
                    href="mailto:info@lagarithrust.com"
                    className="flex items-center gap-3 text-cream-300/70 hover:text-lagari-orange transition-colors font-exo text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    info@lagarithrust.com
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Teams */}
        <section className="py-20 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Diğer Birimler"
              subtitle="Tüm birimlerimizi keşfet"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {Object.entries(teamsData)
                .filter(([key]) => key !== slug)
                .map(([key, t], index) => {
                  const TeamIcon = t.icon;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={`/teams/${key}`}
                        className="block p-4 bg-lagari-dark-green border border-dark-200 rounded-xl hover:border-lagari-orange/30 transition-colors text-center group"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                        >
                          <TeamIcon className="w-5 h-5 text-white" />
                        </div>
                        <p className="font-exo text-sm text-cream-300/80 group-hover:text-lagari-cream transition-colors">
                          {t.name}
                        </p>
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

