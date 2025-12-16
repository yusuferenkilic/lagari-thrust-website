"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import {
  Rocket,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";

// Form kodu yorum satırında - ileride ihtiyaç olabilir
/*
const departments = [
  { value: "mechanical", label: "Mekanik Ekibi", icon: Wrench },
  { value: "avionics", label: "Aviyonik Ekibi", icon: Cpu },
  { value: "aerodynamics", label: "Aerodinamik Ekibi", icon: Wind },
  { value: "simulation", label: "3-DOF ve Uçuş Benzetim Ekibi", icon: LineChart },
  { value: "sponsorship", label: "Sponsorluk Ekibi", icon: Handshake },
  { value: "social-media", label: "Sosyal Medya Ekibi", icon: Share2 },
];

const grades = [
  { value: "hazirlik", label: "Hazırlık" },
  { value: "1", label: "1. Sınıf" },
  { value: "2", label: "2. Sınıf" },
  { value: "3", label: "3. Sınıf" },
  { value: "4", label: "4. Sınıf" },
  { value: "yuksek-lisans", label: "Yüksek Lisans" },
  { value: "doktora", label: "Doktora" },
];
*/

export default function ApplyPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lagari-orange/10 border border-lagari-orange/30 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-lagari-orange" />
                <span className="font-exo text-sm text-lagari-orange">
                  Başvuru Süreci
                </span>
              </div>
              <h1 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-lagari-cream mb-6">
                Başvuru Formu
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Completed Message */}
        <section className="py-20 bg-lagari-black min-h-[60vh] flex items-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-lagari-dark-green border border-dark-200 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 bg-lagari-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-lagari-orange" />
              </div>
              
              <h2 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-4">
                2026 Ekibimiz İçin Başvuru Süreci Tamamlanmıştır
              </h2>
              
              <p className="font-exo text-lg text-cream-300/80 mb-8 max-w-2xl mx-auto">
                Lagari Thrust 2026 ekibi için başvuru sürecimiz sona ermiştir. 
                Başvurularınızı değerlendirdik ve seçilen adaylarla iletişime geçtik.
              </p>

              <p className="font-exo text-base text-cream-300/60 mb-8">
                Gelecek dönem başvuruları için bizi takip etmeye devam edin!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/">
                  <Button size="lg">
                    <Rocket className="w-5 h-5 mr-2" />
                    Ana Sayfaya Dön
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

/* 
  FORM KODU - İLERİDE İHTİYAÇ OLURSA KULLANILABİLİR
  
  Aşağıdaki kod, başvuru formunun tam kodudur. 
  İleride başvuru süreci tekrar açıldığında bu kodu kullanabilirsiniz.
  
  Form kodunu aktif etmek için:
  1. Yukarıdaki "Completed Message" section'ını yorum satırına alın
  2. Aşağıdaki form kodunu aktif edin
  3. Gerekli import'ları ekleyin (Wrench, Cpu, Wind, LineChart, Handshake, Share2, Send, Loader2, AlertCircle)
*/

/*
import { useState } from "react";
import {
  Wrench,
  Cpu,
  Wind,
  LineChart,
  Handshake,
  Share2,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";

const departments = [
  { value: "mechanical", label: "Mekanik Ekibi", icon: Wrench },
  { value: "avionics", label: "Aviyonik Ekibi", icon: Cpu },
  { value: "aerodynamics", label: "Aerodinamik Ekibi", icon: Wind },
  { value: "simulation", label: "3-DOF ve Uçuş Benzetim Ekibi", icon: LineChart },
  { value: "sponsorship", label: "Sponsorluk Ekibi", icon: Handshake },
  { value: "social-media", label: "Sosyal Medya Ekibi", icon: Share2 },
];

const grades = [
  { value: "hazirlik", label: "Hazırlık" },
  { value: "1", label: "1. Sınıf" },
  { value: "2", label: "2. Sınıf" },
  { value: "3", label: "3. Sınıf" },
  { value: "4", label: "4. Sınıf" },
  { value: "yuksek-lisans", label: "Yüksek Lisans" },
  { value: "doktora", label: "Doktora" },
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    faculty: "",
    grade: "",
    department: "",
    experience: "",
    motivation: "",
    portfolio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Ad Soyad gerekli";
    if (!formData.email.trim()) newErrors.email = "E-posta gerekli";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Geçerli bir e-posta girin";
    if (!formData.university.trim()) newErrors.university = "Üniversite gerekli";
    if (!formData.grade) newErrors.grade = "Sınıf seçin";
    if (!formData.department) newErrors.department = "Birim seçin";
    if (!formData.motivation.trim())
      newErrors.motivation = "Motivasyon metni gerekli";
    else if (formData.motivation.trim().length < 100)
      newErrors.motivation = "En az 100 karakter yazın";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simüle edilmiş form gönderimi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Hata mesajını temizle
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center bg-lagari-gradient">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto px-4 text-center"
          >
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="font-clash font-bold text-3xl md:text-4xl text-lagari-cream mb-4">
              Başvurunuz Alındı!
            </h1>
            <p className="font-exo text-lg text-cream-300/80 mb-8">
              Başvurunuz başarıyla gönderildi. Ekibimiz en kısa sürede sizinle
              iletişime geçecektir.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button variant="secondary">Ana Sayfaya Dön</Button>
              </Link>
              <Link href="/teams">
                <Button>
                  Birimleri İncele
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-lagari-gradient" />
          <div className="absolute inset-0 bg-hero-glow opacity-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lagari-orange/10 border border-lagari-orange/30 rounded-full mb-6">
                <Rocket className="w-4 h-4 text-lagari-orange" />
                <span className="font-exo text-sm text-lagari-orange">
                  Takıma Katıl
                </span>
              </div>
              <h1 className="font-clash font-bold text-4xl md:text-5xl text-lagari-cream mb-4">
                Başvuru Formu
              </h1>
              <p className="font-exo text-lg text-cream-300/80 max-w-2xl mx-auto">
                Lagari Thrust ailesine katılmak için aşağıdaki formu doldurun.
                Deneyiminiz ne olursa olsun, tutkuyla öğrenmeye hazırsanız sizi
                bekliyoruz!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-lagari-black">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-lagari-dark-green border border-dark-200 rounded-2xl p-6 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-exo font-bold text-lg text-lagari-cream mb-6 pb-2 border-b border-dark-200">
                    Kişisel Bilgiler
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-lagari-black border ${
                          errors.name ? "border-red-500" : "border-dark-200"
                        } rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all`}
                        placeholder="Adınız Soyadınız"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500 font-exo flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-lagari-black border ${
                          errors.email ? "border-red-500" : "border-dark-200"
                        } rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all`}
                        placeholder="ornek@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 font-exo flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-exo font-bold text-lg text-lagari-cream mb-6 pb-2 border-b border-dark-200">
                    Eğitim Bilgileri
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        Üniversite *
                      </label>
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-lagari-black border ${
                          errors.university ? "border-red-500" : "border-dark-200"
                        } rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all`}
                        placeholder="Üniversite Adı"
                      />
                      {errors.university && (
                        <p className="mt-1 text-sm text-red-500 font-exo flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.university}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        Fakülte / Bölüm
                      </label>
                      <input
                        type="text"
                        name="faculty"
                        value={formData.faculty}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all"
                        placeholder="Mühendislik Fakültesi / Makine Müh."
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        Sınıf *
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-lagari-black border ${
                          errors.grade ? "border-red-500" : "border-dark-200"
                        } rounded-xl text-lagari-cream font-exo focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all`}
                      >
                        <option value="">Sınıf Seçin</option>
                        {grades.map((grade) => (
                          <option key={grade.value} value={grade.value}>
                            {grade.label}
                          </option>
                        ))}
                      </select>
                      {errors.grade && (
                        <p className="mt-1 text-sm text-red-500 font-exo flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.grade}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-exo font-bold text-lg text-lagari-cream mb-6 pb-2 border-b border-dark-200">
                    Başvuru Detayları
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-3">
                        Başvurmak İstediğiniz Birim *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {departments.map((dept) => {
                          const Icon = dept.icon;
                          return (
                            <label
                              key={dept.value}
                              className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                                formData.department === dept.value
                                  ? "border-lagari-orange bg-lagari-orange/10"
                                  : "border-dark-200 hover:border-dark-100"
                              }`}
                            >
                              <input
                                type="radio"
                                name="department"
                                value={dept.value}
                                checked={formData.department === dept.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <Icon
                                className={`w-5 h-5 ${
                                  formData.department === dept.value
                                    ? "text-lagari-orange"
                                    : "text-cream-300/50"
                                }`}
                              />
                              <span
                                className={`font-exo text-sm ${
                                  formData.department === dept.value
                                    ? "text-lagari-cream"
                                    : "text-cream-300/70"
                                }`}
                              >
                                {dept.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      {errors.department && (
                        <p className="mt-2 text-sm text-red-500 font-exo flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.department}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        İlgili Deneyimleriniz
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all resize-none"
                        placeholder="Varsa ilgili proje, staj, kurs deneyimlerinizi yazın..."
                      />
                    </div>

                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        Motivasyon *
                        <span className="text-cream-300/40 ml-2">
                          (en az 100 karakter)
                        </span>
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-lagari-black border ${
                          errors.motivation ? "border-red-500" : "border-dark-200"
                        } rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all resize-none`}
                        placeholder="Neden Lagari Thrust'a katılmak istiyorsunuz? Bu birimde neler yapmak istiyorsunuz?"
                      />
                      <div className="flex justify-between mt-1">
                        {errors.motivation ? (
                          <p className="text-sm text-red-500 font-exo flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.motivation}
                          </p>
                        ) : (
                          <span />
                        )}
                        <span className="text-sm text-cream-300/40 font-exo">
                          {formData.motivation.length} karakter
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-exo text-sm text-cream-300/70 mb-2">
                        Portfolio / LinkedIn / GitHub
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all"
                        placeholder="https://linkedin.com/in/kullaniciadi"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Başvuruyu Gönder
                      </>
                    )}
                  </Button>
                  <p className="text-center text-sm text-cream-300/50 font-exo mt-4">
                    Başvurunuz gönderildikten sonra en kısa sürede sizinle
                    iletişime geçeceğiz.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
*/
