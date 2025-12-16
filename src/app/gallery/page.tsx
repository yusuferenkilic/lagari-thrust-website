"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { SectionTitle } from "@/components/ui";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ImageIcon,
  Video,
  Filter,
} from "lucide-react";

// Örnek galeri verileri (ileride veritabanından gelecek)
const galleryItems = [
  {
    id: "1",
    title: "Lagari-IV Fırlatma Anı",
    type: "image",
    category: "rocket",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-09-15",
  },
  {
    id: "2",
    title: "TEKNOFEST 2024 Takım Fotoğrafı",
    type: "image",
    category: "team",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-09-14",
  },
  {
    id: "3",
    title: "Aviyonik Sistem Montajı",
    type: "image",
    category: "workshop",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-08-20",
  },
  {
    id: "4",
    title: "Roket Gövde Üretimi",
    type: "image",
    category: "workshop",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-07-15",
  },
  {
    id: "5",
    title: "Paraşüt Testi",
    type: "image",
    category: "rocket",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-06-10",
  },
  {
    id: "6",
    title: "Takım Toplantısı",
    type: "image",
    category: "team",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-05-20",
  },
  {
    id: "7",
    title: "Motor Test Videosu",
    type: "video",
    category: "rocket",
    url: "https://youtube.com",
    thumbnail: "/images/amblem.svg",
    date: "2024-04-15",
  },
  {
    id: "8",
    title: "Spaceport America Cup 2024",
    type: "image",
    category: "competition",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-06-22",
  },
  {
    id: "9",
    title: "CFD Simülasyon Çalışması",
    type: "image",
    category: "workshop",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-03-10",
  },
  {
    id: "10",
    title: "Yarışma Hazırlık Süreci",
    type: "video",
    category: "competition",
    url: "https://youtube.com",
    thumbnail: "/images/amblem.svg",
    date: "2024-09-01",
  },
  {
    id: "11",
    title: "Yeni Üye Oryantasyonu",
    type: "image",
    category: "team",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2024-02-15",
  },
  {
    id: "12",
    title: "Lagari-III Fırlatma",
    type: "image",
    category: "rocket",
    url: "/images/amblem.svg",
    thumbnail: "/images/amblem.svg",
    date: "2023-09-12",
  },
];

const categories = [
  { value: "all", label: "Tümü", icon: Filter },
  { value: "rocket", label: "Roketler", icon: ImageIcon },
  { value: "competition", label: "Yarışmalar", icon: ImageIcon },
  { value: "team", label: "Takım", icon: ImageIcon },
  { value: "workshop", label: "Atölye", icon: ImageIcon },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setLightboxIndex(filteredItems.findIndex((i) => i.id === item.id));
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
        : (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
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
                Galeri
              </h1>
              <p className="font-exo text-xl text-cream-300/80 max-w-3xl mx-auto">
                Projelerimizden, yarışmalardan ve atölye çalışmalarımızdan kareler.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-lagari-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full font-exo text-sm transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-lagari-orange text-white"
                      : "bg-dark-300 text-cream-300/70 hover:bg-dark-200 hover:text-lagari-cream"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative aspect-square group cursor-pointer overflow-hidden rounded-xl bg-lagari-dark-green"
                    onClick={() => openLightbox(item)}
                  >
                    {/* Thumbnail */}
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-lagari-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Video Badge */}
                    {item.type === "video" && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-lagari-orange rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                    )}

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-exo text-sm text-lagari-cream line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <ImageIcon className="w-16 h-16 text-cream-300/30 mx-auto mb-4" />
                <p className="font-exo text-cream-300/50">
                  Bu kategoride henüz görsel bulunmuyor.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
                className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
                className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              {/* Content */}
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="max-w-5xl max-h-[80vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === "image" ? (
                  <div className="relative">
                    <Image
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      width={1200}
                      height={800}
                      className="max-h-[70vh] w-auto object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-lagari-dark-green rounded-lg flex items-center justify-center">
                    <a
                      href={selectedItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-lagari-orange rounded-lg text-white font-exo"
                    >
                      <Play className="w-5 h-5" />
                      Videoyu İzle
                    </a>
                  </div>
                )}

                {/* Caption */}
                <div className="mt-4 text-center">
                  <h3 className="font-exo text-lg text-white mb-1">
                    {selectedItem.title}
                  </h3>
                  <p className="font-exo text-sm text-white/50">
                    {new Date(selectedItem.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-exo text-white/50 text-sm">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

