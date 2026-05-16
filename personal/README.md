# Personal Branding Website

Website personal branding dengan desain modern dan interaktif menggunakan React JS.

## 🎨 Fitur

- **Navbar Modern**: Navigasi dengan menu Home, About, Works, dan tombol Contact
- **Nova Glow WebGL Animation**: Animasi 3D orb interaktif menggunakan WebGL shader dari Framer
  - Efek hover yang responsif
  - Rotasi otomatis saat hover
  - Perubahan warna dinamis dengan hue adjustment
  - Noise-based animation yang smooth
- **TypewriterEffect**: Animasi typing dinamis untuk teks hero
  - Typing dan deleting animation yang smooth
  - Blinking cursor yang customizable
  - Multiple words cycling
  - Fully responsive
- **Social Media Sidebar**: Akses cepat ke LinkedIn, WhatsApp, dan GitHub di pojok kiri bawah
- **Responsive Design**: Tampilan optimal di semua ukuran layar
- **Clean UI/UX**: Desain minimalis dan profesional

## 🚀 Teknologi

- React 19.2.6
- Vite 8.0.12
- CSS3 dengan animasi modern
- ESLint untuk code quality

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

Setelah menjalankan `npm run dev`, buka browser dan akses:
```
http://localhost:5173/
```

## 📁 Struktur Folder

```
personal/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── NovaGlow.jsx           # WebGL animated orb component
│   │   ├── TypewriterEffect.jsx   # Typing animation component
│   │   └── README.md              # Components documentation
│   ├── App.jsx                     # Komponen utama
│   ├── App.css                     # Styling komponen
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Komponen Utama

### Navbar
- Logo di kiri
- Menu navigasi di tengah (Home, About, Works)
- Tombol Contact dan Theme Toggle di kanan

### Hero Section
- Nova Glow WebGL orb dengan animasi interaktif
- TypewriterEffect untuk teks dinamis
- Teks greeting "Hi! I'm Rasya"
- Animated title dengan cycling text

### TypewriterEffect Component
- Dynamic typing animation dengan multiple words
- Smooth typing dan deleting transitions
- Blinking cursor yang customizable
- Fully responsive dengan inherit font styles
- Words: "Interested in UI/UX" ↔ "Interested in Coding"

### Nova Glow Component
- WebGL-based animated orb menggunakan custom shaders
- Interactive hover effects dengan distortion
- Automatic rotation saat hover
- Customizable hue (0-360°)
- Adjustable hover intensity
- Smooth noise-based animation

### Social Sidebar
- Icon LinkedIn, WhatsApp, dan GitHub
- Hover effect yang smooth
- Vertical line sebagai dekorasi

## 🎨 Customization

### Mengubah Nova Glow Properties
Edit file `src/App.jsx` pada komponen NovaGlow:
```jsx
<NovaGlow 
  hue={280}              // 0-360, mengubah warna orb
  hoverIntensity={0.3}   // 0-2, intensitas efek hover
  rotateOnHover={true}   // true/false, rotasi saat hover
/>
```

### Mengubah Warna
Edit file `src/App.css` pada bagian:
- Background: `.app { background-color: #f5f5f5; }`
- Navbar: `.navbar { background-color: rgba(245, 245, 245, 0.95); }`
- Button: `.contact-btn { background-color: #1a1a1a; }`

### Mengubah Teks
Edit file `src/App.jsx` pada bagian:
- Greeting: `<p className="greeting">Hi! I'm Rasya</p>`
- Title: `<h1 className="title">Full-stack Developer<br/>Mobile Developer.</h1>`

### Mengubah Social Media Links
Edit file `src/App.jsx` pada bagian social sidebar:
```jsx
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
<a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
```

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## 🔧 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Menjalankan ESLint

## 📄 License

MIT License - Feel free to use this project for your personal branding!

## 🎨 Nova Glow Component

Nova Glow adalah komponen WebGL yang menggunakan custom GLSL shaders untuk membuat animasi orb yang interaktif dan dinamis. Komponen ini di-port dari Framer template dan dioptimalkan untuk React.

### Fitur Nova Glow:
- **WebGL Rendering**: Performa tinggi dengan GPU acceleration
- **Interactive Hover**: Distortion effect saat mouse hover
- **Smooth Animation**: Noise-based animation yang organic
- **Customizable Colors**: Hue adjustment untuk mengubah warna
- **Rotation Effect**: Rotasi otomatis saat hover
- **Responsive**: Menyesuaikan dengan ukuran container

### Technical Details:
- Menggunakan WebGL API untuk rendering
- Custom vertex dan fragment shaders (GLSL)
- Simplex noise untuk animasi organic
- YIQ color space untuk hue adjustment
- RequestAnimationFrame untuk smooth animation loop

## 👨‍💻 Author

Rasya Zildan - Full-stack Developer & Mobile Developer

---

Made with ❤️ using React + Vite + WebGL
