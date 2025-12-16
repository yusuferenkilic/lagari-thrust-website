"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@lagarithrust.com",
    href: "mailto:info@lagarithrust.com",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Üniversite Kampüsü, Türkiye",
    href: null,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 (XXX) XXX XX XX",
    href: "tel:+90XXXXXXXXXX",
  },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simüle edilmiş form gönderimi
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // 5 saniye sonra başarı mesajını kaldır
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                İletişim
              </h1>
              <p className="font-exo text-xl text-cream-300/80 max-w-2xl mx-auto">
                Bizimle iletişime geçmek için aşağıdaki formu doldurun veya
                doğrudan e-posta gönderin.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="font-clash font-bold text-2xl text-lagari-cream mb-6">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-lagari-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-lagari-orange" />
                      </div>
                      <div>
                        <p className="font-exo text-sm text-cream-300/50 mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-exo text-lagari-cream hover:text-lagari-orange transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-exo text-lagari-cream">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-exo font-semibold text-lagari-cream mb-4">
                    Sosyal Medya
                  </h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-dark-300 hover:bg-lagari-orange text-cream-300/70 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="bg-lagari-dark-green border border-dark-200 rounded-2xl p-8">
                  <h2 className="font-clash font-bold text-2xl text-lagari-cream mb-6">
                    Mesaj Gönder
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="font-exo font-bold text-xl text-lagari-cream mb-2">
                        Mesajınız Gönderildi!
                      </h3>
                      <p className="font-exo text-cream-300/70">
                        En kısa sürede size dönüş yapacağız.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block font-exo text-sm text-cream-300/70 mb-2"
                          >
                            Ad Soyad *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all"
                            placeholder="Adınız Soyadınız"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block font-exo text-sm text-cream-300/70 mb-2"
                          >
                            E-posta *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all"
                            placeholder="ornek@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block font-exo text-sm text-cream-300/70 mb-2"
                        >
                          Konu *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all"
                        >
                          <option value="">Konu Seçin</option>
                          <option value="general">Genel Bilgi</option>
                          <option value="sponsorship">Sponsorluk</option>
                          <option value="collaboration">İş Birliği</option>
                          <option value="media">Medya / Basın</option>
                          <option value="other">Diğer</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block font-exo text-sm text-cream-300/70 mb-2"
                        >
                          Mesajınız *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-lagari-black border border-dark-200 rounded-xl text-lagari-cream font-exo placeholder-cream-300/30 focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent transition-all resize-none"
                          placeholder="Mesajınızı buraya yazın..."
                        />
                      </div>

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
                            Mesaj Gönder
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="h-96 bg-lagari-dark-green relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-lagari-orange/30 mx-auto mb-4" />
              <p className="font-exo text-cream-300/50">
                Harita buraya eklenecek
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

