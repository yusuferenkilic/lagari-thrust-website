# Lagari Thrust - Teknoloji Detayları

## 🔧 Teknoloji Seçim Gerekçeleri

### Neden Next.js 14?
1. **SEO Uyumlu:** Server-Side Rendering (SSR) ile arama motorlarında görünürlük
2. **Performans:** Otomatik kod bölme ve optimizasyon
3. **Fullstack:** API routes ile backend ihtiyacını karşılama
4. **TypeScript Desteği:** Kurumsal projelerde tip güvenliği
5. **Vercel Entegrasyonu:** Kolay deployment

### Neden PostgreSQL?
1. **Güvenilirlik:** Kurumsal düzeyde veritabanı
2. **SQL Uyumu:** Kullanıcının SQL isteğine uygun
3. **Prisma Uyumu:** ORM ile mükemmel entegrasyon
4. **Ölçeklenebilirlik:** Gelecekteki büyüme için

### Neden Prisma?
1. **Type-Safe:** TypeScript ile tam uyum
2. **Kolay Migration:** Şema değişikliklerini kolayca yönetme
3. **Prisma Studio:** Görsel veritabanı yönetimi
4. **Modern:** En güncel ORM çözümü

### Neden Tailwind CSS?
1. **Hız:** Hızlı geliştirme süreci
2. **Tutarlılık:** Design token sistemi
3. **Responsive:** Kolay mobil uyum
4. **Customization:** Kolay tema özelleştirme

---

## 📦 Paket Listesi

### Core Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.0.0"
}
```

### Styling
```json
{
  "tailwindcss": "^3.4.0",
  "postcss": "^8.0.0",
  "autoprefixer": "^10.0.0"
}
```

### Database
```json
{
  "@prisma/client": "^5.0.0",
  "prisma": "^5.0.0"
}
```

### UI & Animation
```json
{
  "framer-motion": "^10.0.0",
  "lucide-react": "^0.300.0",
  "@headlessui/react": "^1.7.0"
}
```

### Forms & Validation
```json
{
  "react-hook-form": "^7.0.0",
  "zod": "^3.0.0",
  "@hookform/resolvers": "^3.0.0"
}
```

### Email
```json
{
  "resend": "^2.0.0"
}
```

### Authentication (Admin Panel)
```json
{
  "next-auth": "^4.24.0",
  "bcryptjs": "^2.4.3",
  "@types/bcryptjs": "^2.4.0"
}
```

### File Upload
```json
{
  "uploadthing": "^6.0.0",
  "@uploadthing/react": "^6.0.0"
}
```

---

## 🗄️ Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Projeler
model Project {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String
  image       String?
  specs       Json?    // Teknik özellikler
  status      String   // active, completed, upcoming
  year        Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Yarışmalar
model Competition {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String
  date        DateTime
  location    String
  result      String?  // Derece/sonuç
  images      String[] // Görsel URL'leri
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Sponsorlar
model Sponsor {
  id          String   @id @default(cuid())
  name        String
  logo        String
  website     String?
  tier        String   // platinum, gold, silver, bronze
  description String?
  isActive    Boolean  @default(true)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Takım Üyeleri
model TeamMember {
  id           String   @id @default(cuid())
  name         String
  role         String
  departmentId String
  department   Department @relation(fields: [departmentId], references: [id])
  image        String?
  linkedin     String?
  email        String?
  isActive     Boolean  @default(true)
  order        Int      @default(0)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

// Birimler/Departmanlar
model Department {
  id               String   @id @default(cuid())
  name             String
  slug             String   @unique
  description      String
  image            String?
  responsibilities String[] // Sorumluluk alanları
  members          TeamMember[]
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

// Galeri
model GalleryItem {
  id          String   @id @default(cuid())
  title       String
  type        String   // image, video
  url         String
  thumbnail   String?
  category    String   // rocket, competition, team, event
  date        DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Başvurular
model Application {
  id           String   @id @default(cuid())
  name         String
  email        String
  phone        String?
  departmentId String
  university   String?
  grade        String?  // Sınıf
  motivation   String
  portfolio    String?  // LinkedIn/GitHub/Portfolio linki
  status       String   @default("pending") // pending, reviewed, accepted, rejected
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

// İletişim Mesajları
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
}

// Admin Kullanıcıları
model Admin {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String   // bcrypt ile hashlenmiş
  name      String
  role      String   @default("admin") // admin, superadmin
  lastLogin DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Site Ayarları
model SiteSetting {
  id    String @id @default(cuid())
  key   String @unique
  value String
  type  String @default("string") // string, number, boolean, json
}
```

---

## 🌐 API Endpoints

### Public Endpoints
```
GET  /api/projects          - Tüm projeleri getir
GET  /api/projects/[slug]   - Tek proje detayı
GET  /api/competitions      - Tüm yarışmaları getir
GET  /api/competitions/[slug] - Yarışma detayı
GET  /api/sponsors          - Aktif sponsorları getir
GET  /api/gallery           - Galeri öğelerini getir
GET  /api/departments       - Birimleri getir
GET  /api/departments/[slug] - Birim detayı ve üyeleri
```

### Form Endpoints
```
POST /api/applications      - Yeni başvuru gönder
POST /api/contact           - İletişim mesajı gönder
```

### Auth Endpoints
```
POST /api/auth/signin       - Admin girişi (NextAuth)
POST /api/auth/signout      - Çıkış
GET  /api/auth/session      - Session kontrolü
```

### Admin Endpoints (Protected)
```
# Projeler
GET    /api/admin/projects         - Tüm projeleri listele
POST   /api/admin/projects         - Proje ekle
PUT    /api/admin/projects/[id]    - Proje güncelle
DELETE /api/admin/projects/[id]    - Proje sil

# Yarışmalar
GET    /api/admin/competitions     - Tüm yarışmaları listele
POST   /api/admin/competitions     - Yarışma ekle
PUT    /api/admin/competitions/[id] - Yarışma güncelle
DELETE /api/admin/competitions/[id] - Yarışma sil

# Sponsorlar
GET    /api/admin/sponsors         - Tüm sponsorları listele
POST   /api/admin/sponsors         - Sponsor ekle
PUT    /api/admin/sponsors/[id]    - Sponsor güncelle
DELETE /api/admin/sponsors/[id]    - Sponsor sil

# Takım Üyeleri
GET    /api/admin/team             - Tüm üyeleri listele
POST   /api/admin/team             - Üye ekle
PUT    /api/admin/team/[id]        - Üye güncelle
DELETE /api/admin/team/[id]        - Üye sil

# Galeri
GET    /api/admin/gallery          - Tüm görselleri listele
POST   /api/admin/gallery          - Görsel ekle
PUT    /api/admin/gallery/[id]     - Görsel güncelle
DELETE /api/admin/gallery/[id]     - Görsel sil

# Başvurular
GET    /api/admin/applications     - Tüm başvuruları listele
GET    /api/admin/applications/[id] - Başvuru detayı
PUT    /api/admin/applications/[id] - Başvuru durumu güncelle

# Mesajlar
GET    /api/admin/messages         - Tüm mesajları listele
GET    /api/admin/messages/[id]    - Mesaj detayı
PUT    /api/admin/messages/[id]    - Okundu işaretle

# Dashboard
GET    /api/admin/dashboard/stats  - İstatistikler

# Ayarlar
GET    /api/admin/settings         - Tüm ayarlar
PUT    /api/admin/settings         - Ayarları güncelle
```

---

## 🔐 Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/lagari_db"

# App
NEXT_PUBLIC_SITE_URL="https://lagarithrust.com"
NEXT_PUBLIC_SITE_NAME="Lagari Thrust"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="super-secret-key-change-in-production"

# Email (Resend)
RESEND_API_KEY="re_xxxxx"
EMAIL_FROM="noreply@lagarithrust.com"
EMAIL_TO="info@lagarithrust.com"

# File Upload (UploadThing)
UPLOADTHING_SECRET="sk_xxxxx"
UPLOADTHING_APP_ID="xxxxx"

# Analytics (Opsiyonel)
NEXT_PUBLIC_GA_ID="G-XXXXXXX"
```

---

## 📱 Responsive Breakpoints

```css
/* Tailwind defaults */
sm: 640px   /* Mobil yatay */
md: 768px   /* Tablet */
lg: 1024px  /* Laptop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Geniş ekran */
```

