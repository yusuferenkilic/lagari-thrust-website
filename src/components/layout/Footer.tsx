import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Projeler", href: "/projects" },
    { name: "Yarışmalar", href: "/competitions" },
  ],
  teams: [
    { name: "Mekanik Ekibi", href: "/teams/mechanical" },
    { name: "Aviyonik Ekibi", href: "/teams/avionics" },
    { name: "Aerodinamik Ekibi", href: "/teams/aerodynamics" },
    { name: "Simülasyon Ekibi", href: "/teams/simulation" },
  ],
  resources: [
    { name: "Galeri", href: "/gallery" },
    { name: "Sponsorlar", href: "/sponsors" },
    { name: "İletişim", href: "/contact" },
    { name: "Başvur", href: "/apply" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

const quickLinks = [
  { name: "Hakkımızda", href: "/about" },
  { name: "Projeler", href: "/projects" },
  { name: "İletişim", href: "/contact" },
  { name: "Başvur", href: "/apply" },
];

export default function Footer() {
  return (
    <footer className="bg-lagari-black border-t border-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Footer - Minimalist */}
        <div className="lg:hidden py-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/amblem.svg"
                alt="Lagari Thrust"
                width={32}
                height={32}
              />
              <span className="font-clash font-bold text-xl">
                <span className="text-lagari-cream">LAGARİ</span>{" "}
                <span className="text-lagari-orange">THRUST</span>
              </span>
            </Link>
            
            {/* Quick Links - Horizontal */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-cream-300/60 hover:text-lagari-orange bg-dark-300/50 hover:bg-dark-300 rounded-full transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact - Compact */}
            <a
              href="mailto:info@lagarithrust.com"
              className="text-sm text-cream-300/50 hover:text-lagari-orange transition-colors font-exo mb-4"
            >
              info@lagarithrust.com
            </a>

            {/* Copyright */}
            <p className="text-cream-300/40 font-exo text-xs">
              © {new Date().getFullYear()} Lagari Thrust
            </p>
          </div>
        </div>

        {/* Desktop Footer - Full */}
        <div className="hidden lg:block">
          <div className="py-16">
            <div className="grid grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-6">
                  <Image
                    src="/images/amblem.svg"
                    alt="Lagari Thrust"
                    width={40}
                    height={40}
                  />
                  <span className="font-clash font-bold text-2xl">
                    <span className="text-lagari-cream">LAGARİ</span>{" "}
                    <span className="text-lagari-orange">THRUST</span>
                  </span>
                </Link>
                <p className="text-cream-300/70 font-exo mb-6 max-w-sm">
                  Gökyüzüne uzanan yolculuğumuzda bize katılın. İnovasyon,
                  mühendislik ve tutkuyla roket biliminin sınırlarını zorluyoruz.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="mailto:info@lagarithrust.com"
                    className="flex items-center gap-3 text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@lagarithrust.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-cream-300/70 font-exo">
                    <MapPin className="w-5 h-5 mt-0.5" />
                    <span>Üniversite Kampüsü, Türkiye</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h3 className="font-exo font-semibold text-lagari-cream mb-4">
                  Keşfet
                </h3>
                <ul className="space-y-3">
                  {footerLinks.navigation.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teams Links */}
              <div>
                <h3 className="font-exo font-semibold text-lagari-cream mb-4">
                  Birimler
                </h3>
                <ul className="space-y-3">
                  {footerLinks.teams.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="font-exo font-semibold text-lagari-cream mb-4">
                  Kaynaklar
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Desktop */}
          <div className="py-6 border-t border-dark-200">
            <div className="flex items-center justify-between">
              <p className="text-cream-300/50 font-exo text-sm">
                © {new Date().getFullYear()} Lagari Thrust. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-cream-300/50 hover:text-lagari-orange hover:bg-dark-300 rounded-lg transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
