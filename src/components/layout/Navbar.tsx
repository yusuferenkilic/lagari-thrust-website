"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/about" },
  {
    name: "Birimler",
    href: "/teams",
    children: [
      { name: "Mekanik Ekibi", href: "/teams/mechanical" },
      { name: "Aviyonik Ekibi", href: "/teams/avionics" },
      { name: "Aerodinamik Ekibi", href: "/teams/aerodynamics" },
      { name: "3-DOF ve Uçuş Benzetim", href: "/teams/simulation" },
      { name: "Sponsorluk Ekibi", href: "/teams/sponsorship" },
      { name: "Sosyal Medya Ekibi", href: "/teams/social-media" },
    ],
  },
  { name: "Projeler", href: "/projects" },
  { name: "Yarışmalar", href: "/competitions" },
  { name: "Sponsorlar", href: "/sponsors" },
  { name: "Galeri", href: "/gallery" },
  { name: "İletişim", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-lagari-dark-green/95 backdrop-blur-md border-b border-dark-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/amblem.svg"
              alt="Lagari Thrust"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-clash font-bold text-xl sm:text-2xl">
              <span className="text-lagari-cream">LAGARİ</span>{" "}
              <span className="text-lagari-orange">THRUST</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-cream-200 hover:text-lagari-orange transition-colors font-exo font-medium"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-lagari-black border border-dark-200 rounded-xl shadow-xl overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-cream-200 hover:text-lagari-cream hover:bg-dark-300 transition-colors font-exo"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/apply"
              className="ml-4 bg-lagari-orange hover:bg-orange-600 text-white font-exo font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-lagari-orange/30"
            >
              Başvur
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-lagari-cream hover:text-lagari-orange transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-lagari-black border-t border-dark-200"
          >
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setIsOpen(false)}
                    className="block px-4 py-3 text-cream-200 hover:text-lagari-orange hover:bg-dark-300 rounded-lg transition-colors font-exo font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-cream-300/70 hover:text-lagari-orange transition-colors font-exo"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-lagari-orange hover:bg-orange-600 text-white font-exo font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Takıma Katıl
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

