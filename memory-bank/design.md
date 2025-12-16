# Lagari Thrust - Tasarım Rehberi

## 🎨 Kurumsal Kimlik

### Marka Renkleri
| Renk | Hex | Kullanım |
|------|-----|----------|
| **Lagari Orange** | `#D95523` | Ana vurgu rengi, butonlar, CTA |
| **Lagari Cream** | `#F9F5D8` | Açık metin, hover efektleri |
| **Lagari Dark Green** | `#202917` | Ana arka plan |
| **Lagari Black** | `#272727` | İkincil arka plan, kartlar |

### Marka Fontları
| Font | Kullanım |
|------|----------|
| **Clash Display** | Logo, hero başlıklar, özel vurgular |
| **Exo 2** | Başlıklar, navigasyon, butonlar, metin |

---

## 🎨 Renk Sistemi

### CSS Değişkenleri
```css
:root {
  /* Lagari Thrust Kurumsal Renkler */
  --lagari-orange: #D95523;
  --lagari-cream: #F9F5D8;
  --lagari-dark-green: #202917;
  --lagari-black: #272727;
  
  /* Orange Tonları */
  --orange-50: #fef3ed;
  --orange-100: #fce4d6;
  --orange-200: #f9c5a8;
  --orange-300: #f5a274;
  --orange-400: #e87a3e;
  --orange-500: #D95523;  /* Ana turuncu */
  --orange-600: #c44a1d;
  --orange-700: #a33d18;
  --orange-800: #833114;
  --orange-900: #6b2912;

  /* Cream Tonları */
  --cream-50: #fdfcf7;
  --cream-100: #fbf9f0;
  --cream-200: #F9F5D8;   /* Ana krem */
  --cream-300: #f0e9bc;
  --cream-400: #e5d99a;
  --cream-500: #d9c878;

  /* Dark Tonları */
  --dark-50: #4a4d42;
  --dark-100: #3d4036;
  --dark-200: #31342b;
  --dark-300: #272a21;
  --dark-400: #202917;    /* Ana koyu yeşil */
  --dark-500: #1a2112;
  --dark-600: #151a0e;
  --dark-700: #10130a;
  --dark-800: #0b0d07;
  --dark-900: #060704;

  /* Nötr (Black tonları) */
  --neutral-50: #f5f5f5;
  --neutral-100: #e5e5e5;
  --neutral-200: #cccccc;
  --neutral-300: #b3b3b3;
  --neutral-400: #808080;
  --neutral-500: #4d4d4d;
  --neutral-600: #3d3d3d;
  --neutral-700: #333333;
  --neutral-800: #272727;  /* Ana siyah */
  --neutral-900: #1a1a1a;
}
```

### Tailwind Config
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        lagari: {
          orange: '#D95523',
          cream: '#F9F5D8',
          'dark-green': '#202917',
          black: '#272727',
        },
        orange: {
          50: '#fef3ed',
          100: '#fce4d6',
          200: '#f9c5a8',
          300: '#f5a274',
          400: '#e87a3e',
          500: '#D95523',
          600: '#c44a1d',
          700: '#a33d18',
          800: '#833114',
          900: '#6b2912',
        },
        cream: {
          50: '#fdfcf7',
          100: '#fbf9f0',
          200: '#F9F5D8',
          300: '#f0e9bc',
          400: '#e5d99a',
          500: '#d9c878',
        },
        dark: {
          50: '#4a4d42',
          100: '#3d4036',
          200: '#31342b',
          300: '#272a21',
          400: '#202917',
          500: '#1a2112',
          600: '#151a0e',
          700: '#10130a',
          800: '#0b0d07',
          900: '#060704',
        },
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      backgroundImage: {
        'lagari-gradient': 'linear-gradient(to bottom, #202917, #0b0d07)',
        'fire-gradient': 'linear-gradient(to top, #D95523, #e87a3e, #F9F5D8)',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(217, 85, 35, 0.15) 0%, transparent 70%)',
      },
    },
  },
}
```

---

## 🔤 Tipografi

### Font Ailesi
```css
/* Hero ve özel başlıklar - Dikkat çekici */
--font-display: 'Clash Display', sans-serif;

/* Genel başlıklar ve metin - Modern, okunabilir */
--font-primary: 'Exo 2', sans-serif;

/* Kod ve teknik içerik */
--font-mono: 'JetBrains Mono', monospace;
```

### Google Fonts Import
```html
<!-- HTML head içine -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Clash Display için (fontshare.com) -->
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet">
```

### CSS Import
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap');
```

### Font Kullanım Rehberi
| Element | Font | Ağırlık | Örnek Class |
|---------|------|---------|-------------|
| Hero Başlık | Clash Display | 700 | `font-clash font-bold` |
| Logo Text | Clash Display | 600 | `font-clash font-semibold` |
| Sayfa Başlıkları | Exo 2 | 700 | `font-exo font-bold` |
| Alt Başlıklar | Exo 2 | 600 | `font-exo font-semibold` |
| Navigasyon | Exo 2 | 500 | `font-exo font-medium` |
| Butonlar | Exo 2 | 600 | `font-exo font-semibold` |
| Paragraf | Exo 2 | 400 | `font-exo font-normal` |
| Küçük metin | Exo 2 | 400 | `font-exo text-sm` |

### Font Boyutları
```css
/* Tailwind class'ları */
text-xs:   0.75rem   /* 12px - Küçük etiketler */
text-sm:   0.875rem  /* 14px - Açıklamalar */
text-base: 1rem      /* 16px - Paragraf */
text-lg:   1.125rem  /* 18px - Büyük paragraf */
text-xl:   1.25rem   /* 20px - Alt başlık */
text-2xl:  1.5rem    /* 24px - Kart başlığı */
text-3xl:  1.875rem  /* 30px - Bölüm başlığı */
text-4xl:  2.25rem   /* 36px - Sayfa başlığı */
text-5xl:  3rem      /* 48px - Hero alt başlık */
text-6xl:  3.75rem   /* 60px - Hero başlık */
text-7xl:  4.5rem    /* 72px - Büyük hero */
text-8xl:  6rem      /* 96px - Ekstra büyük */
```

---

## 🧩 UI Bileşenleri

### Butonlar

```jsx
// Primary Button - Lagari Orange
<button className="
  bg-lagari-orange
  hover:bg-orange-600
  text-white font-exo font-semibold
  px-6 py-3 rounded-lg
  transition-all duration-300
  hover:shadow-lg hover:shadow-lagari-orange/30
  transform hover:-translate-y-0.5
">
  Başvur
</button>

// Secondary Button - Outline
<button className="
  border-2 border-lagari-orange
  text-lagari-orange
  hover:bg-lagari-orange hover:text-white
  font-exo font-semibold
  px-6 py-3 rounded-lg
  transition-all duration-300
">
  Daha Fazla
</button>

// Ghost Button - Cream
<button className="
  text-cream-200
  hover:text-lagari-cream
  hover:bg-cream-200/10
  font-exo font-medium
  px-4 py-2 rounded-lg
  transition-all duration-300
">
  İletişim
</button>

// CTA Button - Gradient
<button className="
  bg-gradient-to-r from-lagari-orange to-orange-600
  hover:from-orange-600 hover:to-orange-700
  text-white font-exo font-bold
  px-8 py-4 rounded-xl
  transition-all duration-300
  hover:shadow-xl hover:shadow-lagari-orange/40
  transform hover:-translate-y-1
">
  Takıma Katıl
</button>
```

### Kartlar

```jsx
// Proje Kartı
<div className="
  bg-lagari-black
  border border-dark-200
  rounded-2xl
  overflow-hidden
  hover:border-lagari-orange/50
  transition-all duration-300
  group
">
  <div className="relative h-48 overflow-hidden">
    <img 
      className="w-full h-full object-cover 
        group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-lagari-black" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-exo font-bold text-lagari-cream mb-2">Proje Adı</h3>
    <p className="text-cream-300/70 font-exo">Açıklama...</p>
  </div>
</div>

// Sponsor Kartı
<div className="
  bg-lagari-black/50
  border border-dark-200
  rounded-xl p-6
  hover:border-lagari-orange/30
  hover:bg-lagari-black
  transition-all duration-300
  flex items-center justify-center
">
  <img src="/sponsor-logo.png" alt="Sponsor" className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
</div>

// Takım Üyesi Kartı
<div className="
  bg-lagari-black
  rounded-2xl overflow-hidden
  border border-dark-200
  hover:border-lagari-orange/50
  transition-all duration-300
  group
">
  <div className="aspect-square overflow-hidden">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </div>
  <div className="p-4 text-center">
    <h4 className="font-exo font-semibold text-lagari-cream">İsim Soyisim</h4>
    <p className="text-sm text-lagari-orange font-exo">Pozisyon</p>
  </div>
</div>
```

### Navigasyon

```jsx
// Navbar
<nav className="
  fixed top-0 left-0 right-0
  bg-lagari-dark-green/90 backdrop-blur-md
  border-b border-dark-200
  z-50
">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <a href="/" className="font-clash font-bold text-2xl text-lagari-cream">
        LAGARI <span className="text-lagari-orange">THRUST</span>
      </a>
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="/about" className="font-exo font-medium text-cream-200 hover:text-lagari-orange transition-colors">
          Hakkımızda
        </a>
        <a href="/projects" className="font-exo font-medium text-cream-200 hover:text-lagari-orange transition-colors">
          Projeler
        </a>
        {/* ... */}
        <a href="/apply" className="
          bg-lagari-orange hover:bg-orange-600
          text-white font-exo font-semibold
          px-5 py-2.5 rounded-lg
          transition-all duration-300
        ">
          Başvur
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-lagari-cream">
        <MenuIcon className="w-6 h-6" />
      </button>
    </div>
  </div>
</nav>

// Footer
<footer className="bg-lagari-black border-t border-dark-200">
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo & Description */}
      <div>
        <h3 className="font-clash font-bold text-xl text-lagari-cream mb-4">
          LAGARI <span className="text-lagari-orange">THRUST</span>
        </h3>
        <p className="text-cream-300/70 font-exo text-sm">
          Gökyüzüne uzanan yolculuğumuzda bize katılın.
        </p>
      </div>
      {/* Links columns */}
    </div>
    <div className="border-t border-dark-200 mt-8 pt-8 text-center">
      <p className="text-cream-300/50 font-exo text-sm">
        © 2025 Lagari Thrust. Tüm hakları saklıdır.
      </p>
    </div>
  </div>
</footer>
```

---

## 🎭 Animasyonlar

### Framer Motion Variants

```jsx
// Fade In Up
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Stagger Children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale on Hover
const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

// Roket Fırlatma Animasyonu
const rocketLaunch = {
  initial: { y: 100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};
```

### CSS Animasyonları

```css
/* Yıldız parıltısı */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Roket titreşimi */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

/* Alev efekti */
@keyframes flame {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.2); }
}
```

---

## 📐 Layout Sistemi

### Grid Sistem
```jsx
// Projeler Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Proje kartları */}
</div>

// Sponsorlar Grid (tier'a göre)
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
  {/* Sponsor logoları */}
</div>

// Takım Üyeleri Grid
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {/* Üye kartları */}
</div>
```

### Section Spacing
```jsx
// Standart section
<section className="py-16 md:py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* İçerik */}
  </div>
</section>
```

---

## 🖼️ Görsel Rehberi

### Görsel Boyutları
| Kullanım | Boyut | Format |
|----------|-------|--------|
| Hero Background | 1920x1080 | WebP |
| Proje Kartı | 800x600 | WebP |
| Takım Üyesi | 400x400 | WebP |
| Sponsor Logo | 200x100 | PNG/SVG |
| Galeri Thumbnail | 400x300 | WebP |
| Galeri Full | 1600x1200 | WebP |

### Placeholder
```jsx
// Görsel yüklenirken
<div className="
  bg-neutral-800 
  animate-pulse 
  rounded-lg
  w-full h-full
"/>
```

---

## 📱 Mobil Öncelikli Tasarım

### Breakpoint Stratejisi
1. Önce mobil tasarla (base classes)
2. Tablet için md: prefix
3. Desktop için lg: prefix
4. Geniş ekran için xl: prefix

### Mobil Menü
- Hamburger menü ikonu
- Tam ekran overlay menü
- Smooth açılış animasyonu
- Dışarı tıklama ile kapanma

---

## 🔐 Admin Panel Tasarımı

### Admin Renk Paleti (Kurumsal Karanlık Tema)
```css
:root {
  /* Admin tema - Lagari kurumsal renklerle */
  --admin-bg: #202917;            /* Lagari dark green */
  --admin-sidebar: #272727;       /* Lagari black */
  --admin-card: #272727;          /* Lagari black */
  --admin-card-hover: #31342b;
  --admin-border: #3d4036;        /* Dark border */
  --admin-text: #F9F5D8;          /* Lagari cream */
  --admin-text-muted: #a8a393;    /* Muted cream */
  --admin-primary: #D95523;       /* Lagari orange */
  --admin-success: #10b981;       /* Yeşil */
  --admin-warning: #f59e0b;       /* Turuncu */
  --admin-danger: #ef4444;        /* Kırmızı */
}
```

### Admin Layout
```jsx
// Admin Layout Yapısı - Lagari Kurumsal
<div className="min-h-screen bg-lagari-dark-green">
  {/* Sidebar - Sol Menü */}
  <aside className="fixed left-0 top-0 h-full w-64 bg-lagari-black border-r border-dark-200">
    <div className="p-6 border-b border-dark-200">
      <h1 className="font-clash font-bold text-xl text-lagari-cream">
        LAGARI <span className="text-lagari-orange">ADMIN</span>
      </h1>
    </div>
    <Navigation />
    <UserInfo />
  </aside>
  
  {/* Main Content */}
  <main className="ml-64 p-6">
    <Header />
    <PageContent />
  </main>
</div>
```

### Admin Bileşenleri (Kurumsal Tema)

```jsx
// Dashboard Stat Card
<div className="bg-lagari-black rounded-xl p-6 border border-dark-200 hover:border-lagari-orange/30 transition-colors">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-cream-300/70 font-exo">Toplam Başvuru</p>
      <p className="text-3xl font-exo font-bold text-lagari-cream">124</p>
    </div>
    <div className="p-3 bg-lagari-orange/20 rounded-full">
      <UsersIcon className="w-6 h-6 text-lagari-orange" />
    </div>
  </div>
</div>

// Data Table
<table className="w-full">
  <thead className="bg-dark-300/50 border-b border-dark-200">
    <tr>
      <th className="text-left p-4 font-exo font-medium text-cream-200">İsim</th>
      <th className="text-left p-4 font-exo font-medium text-cream-200">Durum</th>
      <th className="text-right p-4 font-exo font-medium text-cream-200">İşlemler</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-dark-200">
    <tr className="hover:bg-dark-300/30 transition-colors">
      <td className="p-4 text-lagari-cream font-exo">Örnek Veri</td>
      {/* ... */}
    </tr>
  </tbody>
</table>

// Status Badge
<span className="px-3 py-1 text-xs font-exo font-medium rounded-full bg-green-500/20 text-green-400">
  Kabul Edildi
</span>
<span className="px-3 py-1 text-xs font-exo font-medium rounded-full bg-lagari-orange/20 text-lagari-orange">
  Beklemede
</span>
<span className="px-3 py-1 text-xs font-exo font-medium rounded-full bg-red-500/20 text-red-400">
  Reddedildi
</span>

// Action Buttons
<div className="flex gap-2">
  <button className="p-2 hover:bg-dark-200 rounded-lg transition-colors">
    <EditIcon className="w-4 h-4 text-cream-300" />
  </button>
  <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors">
    <TrashIcon className="w-4 h-4 text-red-400" />
  </button>
</div>

// Input
<input 
  type="text"
  className="w-full px-4 py-2.5 bg-dark-300 border border-dark-200 rounded-lg 
    text-lagari-cream font-exo placeholder-cream-300/50
    focus:outline-none focus:ring-2 focus:ring-lagari-orange focus:border-transparent"
  placeholder="Ara..."
/>

// Select
<select className="px-4 py-2.5 bg-dark-300 border border-dark-200 rounded-lg text-lagari-cream font-exo">
  <option>Seçiniz</option>
</select>

// Primary Button (Admin)
<button className="
  bg-lagari-orange hover:bg-orange-600
  text-white font-exo font-semibold
  px-5 py-2.5 rounded-lg
  transition-all duration-300
">
  Kaydet
</button>

// Secondary Button (Admin)
<button className="
  border border-dark-200 hover:border-lagari-orange
  text-cream-200 hover:text-lagari-orange
  font-exo font-medium
  px-5 py-2.5 rounded-lg
  transition-all duration-300
">
  İptal
</button>
```

### Admin Sidebar Menü Yapısı
```
📊 Dashboard
📁 İçerik Yönetimi
   ├── 🚀 Projeler
   ├── 🏆 Yarışmalar
   ├── 🤝 Sponsorlar
   └── 🖼️ Galeri
👥 Takım
   ├── 👤 Üyeler
   └── 🏢 Birimler
📬 İletişim
   ├── 📝 Başvurular
   └── 💬 Mesajlar
⚙️ Ayarlar
```

