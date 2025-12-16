# Lagari Thrust - Roket Takımı Web Sitesi

## 🚀 Proje Özeti

**Takım Adı:** Lagari Thrust  
**Proje Türü:** Roket Takımı Kurumsal Web Sitesi  
**Başlangıç Tarihi:** 14 Aralık 2025

### Proje Amacı
Lagari Thrust roket takımının projelerini, katıldığı yarışmaları, sponsorlarını, ekip birimlerini ve başarılarını dünyaya tanıtan, modern ve etkileyici bir web sitesi oluşturmak. Site, potansiyel sponsorlara, takım adaylarına ve roket tutkunlarına hitap edecek şekilde tasarlanacaktır.

---

## 📋 Site Yapısı ve Sayfalar

### Ana Sayfalar
1. **Ana Sayfa (Home)** - Hero section, kısa tanıtım, öne çıkan projeler/yarışmalar
2. **Hakkımızda (About)** - Takım tarihi, misyon, vizyon, değerler
3. **Yarışmalar (Competitions)** - Katılınan yarışmalar ve başarılar
4. **Projeler (Projects)** - Geliştirilen roketler ve teknik detayları
5. **Sponsorlar (Sponsors)** - Sponsor şirketler ve ortaklar
6. **Galeri (Gallery)** - Fotoğraflar ve videolar
7. **İletişim (Contact)** - İletişim formu ve bilgileri
8. **Başvuru (Apply)** - Takıma katılım başvuru formu

### Admin Panel Sayfaları
1. **Dashboard** - Genel istatistikler, son başvurular, mesajlar
2. **Projeler Yönetimi** - Proje ekleme, düzenleme, silme
3. **Yarışmalar Yönetimi** - Yarışma ekleme, düzenleme, silme
4. **Sponsorlar Yönetimi** - Sponsor ekleme, düzenleme, silme
5. **Takım Üyeleri Yönetimi** - Üye ekleme, düzenleme, silme
6. **Birimler Yönetimi** - Birim bilgilerini düzenleme
7. **Galeri Yönetimi** - Görsel/video ekleme, düzenleme, silme
8. **Başvurular** - Başvuruları görüntüleme, durum güncelleme
9. **Mesajlar** - İletişim mesajlarını okuma, yanıtlama
10. **Ayarlar** - Site ayarları, şifre değiştirme

### Birim Sayfaları (Teams/Departments)
1. **Mekanik Ekibi** - Roket yapısal tasarım ve üretim
2. **Aviyonik Ekibi** - Elektronik sistemler ve yazılım
3. **Aerodinamik Ekibi** - Aerodinamik analiz ve optimizasyon
4. **3-DOF ve Uçuş Benzetim Ekibi** - Simülasyon ve modelleme
5. **Sponsorluk Ekibi** - Sponsor ilişkileri ve iş geliştirme
6. **Sosyal Medya Ekibi** - İletişim ve medya yönetimi

---

## 🛠️ Teknoloji Stack

### Frontend
| Teknoloji | Amaç |
|-----------|------|
| **Next.js 14** | React tabanlı fullstack framework (App Router) |
| **TypeScript** | Tip güvenli JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | Animasyonlar ve geçişler |
| **Lucide Icons** | Modern ikonlar |

### Backend
| Teknoloji | Amaç |
|-----------|------|
| **Next.js API Routes** | RESTful API endpoints |
| **Prisma ORM** | Veritabanı yönetimi ve sorguları |

### Veritabanı
| Teknoloji | Amaç |
|-----------|------|
| **PostgreSQL** | İlişkisel veritabanı (SQL) |

### Deployment & Araçlar
| Teknoloji | Amaç |
|-----------|------|
| **Vercel** | Hosting ve CI/CD |
| **Cloudinary** | Görsel yönetimi (opsiyonel) |
| **Resend/Nodemailer** | E-posta gönderimi |

---

## 💾 Veritabanı Şeması (Taslak)

### Tablolar

```
┌─────────────────────────────────────────────────────────────┐
│                        PROJECTS                              │
├─────────────────────────────────────────────────────────────┤
│ id, name, slug, description, image, specs, status, date     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      COMPETITIONS                            │
├─────────────────────────────────────────────────────────────┤
│ id, name, slug, description, date, location, result, images │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        SPONSORS                              │
├─────────────────────────────────────────────────────────────┤
│ id, name, logo, website, tier, description, isActive        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      TEAM_MEMBERS                            │
├─────────────────────────────────────────────────────────────┤
│ id, name, role, department, image, linkedin, isActive       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       DEPARTMENTS                            │
├─────────────────────────────────────────────────────────────┤
│ id, name, slug, description, image, responsibilities        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      GALLERY_ITEMS                           │
├─────────────────────────────────────────────────────────────┤
│ id, title, type, url, thumbnail, category, date             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      APPLICATIONS                            │
├─────────────────────────────────────────────────────────────┤
│ id, name, email, phone, department, motivation, status, date│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    CONTACT_MESSAGES                          │
├─────────────────────────────────────────────────────────────┤
│ id, name, email, subject, message, isRead, date             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         ADMINS                               │
├─────────────────────────────────────────────────────────────┤
│ id, email, password (hashed), name, role, lastLogin, date   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      SITE_SETTINGS                           │
├─────────────────────────────────────────────────────────────┤
│ id, key, value, type                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Tasarım Konsepti

### Kurumsal Renk Paleti
| Renk | Hex | Kullanım |
|------|-----|----------|
| **Lagari Orange** | `#D95523` | Ana vurgu rengi, butonlar, CTA, linkler |
| **Lagari Cream** | `#F9F5D8` | Açık metin, başlıklar |
| **Lagari Dark Green** | `#202917` | Ana arka plan |
| **Lagari Black** | `#272727` | Kartlar, ikincil arka plan |

### Kurumsal Fontlar
| Font | Kullanım |
|------|----------|
| **Clash Display** | Logo, hero başlıklar, özel vurgular |
| **Exo 2** | Genel başlıklar, navigasyon, paragraflar |

### Tasarım İlkeleri
- Modern, minimalist ve profesyonel görünüm
- Roket/uzay temalı animasyonlar ve efektler
- Responsive tasarım (mobile-first)
- Karanlık tema (kurumsal renklerle uyumlu)
- Paralaks efektler ve smooth scrolling
- Turuncu vurgu rengi ile dikkat çekici CTA'lar

---

## 📅 Geliştirme Yol Haritası

### Faz 1: Temel Kurulum (1-2 gün)
- [x] Proje planlaması ve memory-bank oluşturma
- [ ] Next.js projesi kurulumu
- [ ] Tailwind CSS ve temel yapılandırma
- [ ] Prisma ve veritabanı şeması
- [ ] Temel layout ve navigasyon

### Faz 2: Statik Sayfalar (3-4 gün)
- [ ] Ana sayfa tasarımı
- [ ] Hakkımızda sayfası
- [ ] Birim sayfaları (6 adet)
- [ ] İletişim sayfası
- [ ] Footer ve genel bileşenler

### Faz 3: Dinamik İçerik (3-4 gün)
- [ ] Projeler sayfası ve detay sayfaları
- [ ] Yarışmalar sayfası ve detay sayfaları
- [ ] Sponsorlar sayfası
- [ ] Galeri sayfası

### Faz 4: Formlar ve Backend (2-3 gün)
- [ ] Başvuru formu ve API
- [ ] İletişim formu ve API
- [ ] E-posta entegrasyonu

### Faz 5: Admin Panel (3-4 gün)
- [ ] NextAuth.js ile authentication kurulumu
- [ ] Admin login sayfası
- [ ] Dashboard sayfası
- [ ] CRUD sayfaları (Projeler, Yarışmalar, Sponsorlar, vb.)
- [ ] Başvuru ve mesaj yönetimi
- [ ] Görsel yükleme sistemi

### Faz 6: Son Rötuşlar (1-2 gün)
- [ ] Animasyonlar ve geçişler
- [ ] SEO optimizasyonu
- [ ] Performans optimizasyonu
- [ ] Test ve hata düzeltme
- [ ] Deployment

---

## 📁 Proje Klasör Yapısı

```
lagari-site/
├── app/
│   ├── (pages)/
│   │   ├── about/
│   │   ├── competitions/
│   │   ├── projects/
│   │   ├── sponsors/
│   │   ├── gallery/
│   │   ├── contact/
│   │   ├── apply/
│   │   └── teams/
│   │       ├── mechanical/
│   │       ├── avionics/
│   │       ├── aerodynamics/
│   │       ├── simulation/
│   │       ├── sponsorship/
│   │       └── social-media/
│   ├── admin/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── projects/
│   │   ├── competitions/
│   │   ├── sponsors/
│   │   ├── team/
│   │   ├── gallery/
│   │   ├── applications/
│   │   ├── messages/
│   │   └── settings/
│   ├── api/
│   │   ├── auth/
│   │   ├── admin/
│   │   ├── applications/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── ...
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
├── lib/
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── memory-bank/
│   ├── projectbrief.md
│   ├── techstack.md
│   └── progress.md
└── package.json
```

---

## 🔗 Referans Siteler

- [ITU AUV Team](https://auv.itu.edu.tr) - İTÜ Otonom Su Altı Aracı Takımı
- Modern roket takımı siteleri

---

## 📝 Notlar

- Tüm içerikler Türkçe ve İngilizce olarak sunulabilir (i18n desteği eklenebilir)
- Admin paneli ile içerik yönetimi sağlanabilir
- Blog/Haber bölümü ileride eklenebilir

