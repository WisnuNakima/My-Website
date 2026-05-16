# Nova Glow Integration Guide

## 🎯 Apa itu Nova Glow?

Nova Glow adalah komponen WebGL yang membuat animasi orb 3D interaktif dengan efek visual yang menakjubkan. Komponen ini menggunakan GPU acceleration untuk performa optimal dan memberikan pengalaman visual yang smooth dan menarik.

## ✨ Fitur Utama

1. **WebGL Rendering** - Menggunakan GPU untuk rendering yang cepat dan smooth
2. **Interactive Hover** - Orb bereaksi terhadap posisi mouse dengan efek distortion
3. **Smooth Animation** - Animasi berbasis noise yang terlihat organic dan natural
4. **Customizable** - Mudah disesuaikan dengan kebutuhan desain Anda
5. **Responsive** - Otomatis menyesuaikan dengan ukuran container

## 🚀 Cara Menggunakan

### Basic Usage

```jsx
import NovaGlow from './components/NovaGlow';

function MyComponent() {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <NovaGlow />
    </div>
  );
}
```

### With Custom Props

```jsx
<NovaGlow 
  hue={280}              // Warna orb (0-360 derajat)
  hoverIntensity={0.3}   // Intensitas efek hover (0-2)
  rotateOnHover={true}   // Rotasi saat hover (true/false)
/>
```

## 🎨 Customization Guide

### 1. Mengubah Warna (Hue)

Parameter `hue` mengontrol warna dasar orb. Nilai dalam derajat (0-360):

```jsx
// Purple/Violet (default-ish)
<NovaGlow hue={280} />

// Red
<NovaGlow hue={0} />

// Orange
<NovaGlow hue={30} />

// Yellow
<NovaGlow hue={60} />

// Green
<NovaGlow hue={120} />

// Cyan
<NovaGlow hue={180} />

// Blue
<NovaGlow hue={240} />

// Magenta
<NovaGlow hue={300} />
```

### 2. Mengatur Intensitas Hover

Parameter `hoverIntensity` mengontrol seberapa kuat efek distortion saat hover:

```jsx
// Subtle effect
<NovaGlow hoverIntensity={0.1} />

// Medium effect (recommended)
<NovaGlow hoverIntensity={0.3} />

// Strong effect
<NovaGlow hoverIntensity={0.5} />

// Very strong effect
<NovaGlow hoverIntensity={1.0} />
```

### 3. Mengontrol Rotasi

Parameter `rotateOnHover` mengaktifkan/menonaktifkan rotasi saat hover:

```jsx
// Dengan rotasi (default)
<NovaGlow rotateOnHover={true} />

// Tanpa rotasi
<NovaGlow rotateOnHover={false} />
```

## 💡 Tips & Best Practices

### 1. Container Size
Pastikan container memiliki ukuran yang jelas:

```jsx
// ✅ Good
<div style={{ width: '400px', height: '400px' }}>
  <NovaGlow />
</div>

// ❌ Bad - container tidak memiliki ukuran
<div>
  <NovaGlow />
</div>
```

### 2. Performance
- Gunakan hanya satu instance NovaGlow per halaman untuk performa optimal
- Jika perlu multiple instances, pertimbangkan untuk lazy load
- Monitor GPU usage di browser dev tools

### 3. Responsive Design
NovaGlow otomatis menyesuaikan dengan ukuran container:

```jsx
<div style={{ 
  width: '100%', 
  maxWidth: '500px', 
  aspectRatio: '1/1' 
}}>
  <NovaGlow />
</div>
```

### 4. Dark/Light Mode
Sesuaikan hue berdasarkan theme:

```jsx
function ThemedOrb() {
  const isDark = useTheme(); // your theme hook
  
  return (
    <NovaGlow 
      hue={isDark ? 280 : 200} 
      hoverIntensity={0.3}
    />
  );
}
```

## 🎭 Use Cases

### 1. Hero Section (Current Implementation)
```jsx
<div className="hero-section">
  <div className="sphere-container">
    <NovaGlow hue={280} hoverIntensity={0.3} rotateOnHover={true} />
  </div>
  <h1>Your Title</h1>
</div>
```

### 2. Loading Indicator
```jsx
<div className="loading-screen">
  <NovaGlow hue={240} hoverIntensity={0.1} rotateOnHover={false} />
  <p>Loading...</p>
</div>
```

### 3. Background Element
```jsx
<div style={{ position: 'relative' }}>
  <div style={{ 
    position: 'absolute', 
    width: '600px', 
    height: '600px',
    opacity: 0.3,
    filter: 'blur(40px)'
  }}>
    <NovaGlow hue={180} hoverIntensity={0} rotateOnHover={false} />
  </div>
  <div style={{ position: 'relative', zIndex: 1 }}>
    Your content here
  </div>
</div>
```

### 4. Interactive Card
```jsx
<div className="card">
  <div style={{ width: '200px', height: '200px' }}>
    <NovaGlow hue={120} hoverIntensity={0.4} rotateOnHover={true} />
  </div>
  <h3>Card Title</h3>
  <p>Card description</p>
</div>
```

## 🔧 Troubleshooting

### Orb tidak muncul
1. Pastikan container memiliki width dan height
2. Check browser console untuk error WebGL
3. Verifikasi browser support WebGL

### Performa lambat
1. Kurangi `hoverIntensity`
2. Pastikan hanya ada satu instance
3. Check GPU usage di dev tools

### Warna tidak sesuai
1. Coba berbagai nilai `hue` (0-360)
2. Ingat base colors: purple, cyan, deep blue
3. Gunakan color wheel untuk referensi

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 56+ | ✅ Full |
| Firefox | 51+ | ✅ Full |
| Safari | 11+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE | Any | ❌ No WebGL |

## 📚 Technical Deep Dive

### How It Works

1. **WebGL Context**: Membuat canvas dan WebGL context
2. **Shader Compilation**: Compile vertex dan fragment shaders
3. **Geometry Setup**: Membuat single triangle yang cover viewport
4. **Animation Loop**: RequestAnimationFrame untuk smooth animation
5. **Interaction**: Mouse tracking untuk hover effects

### Shader Magic

Fragment shader menggunakan:
- **Simplex Noise**: Untuk animasi organic
- **YIQ Color Space**: Untuk hue adjustment yang smooth
- **Multiple Lights**: Untuk depth dan dimension
- **Distance Fields**: Untuk shape definition

## 🎓 Learning Resources

- [WebGL Fundamentals](https://webglfundamentals.org/)
- [The Book of Shaders](https://thebookofshaders.com/)
- [Shadertoy](https://www.shadertoy.com/) - Untuk inspirasi shader

## 📝 Credits

- Original Framer Template: Nova Glow
- Ported to React: Rasya Zildan
- WebGL Implementation: Custom shader pipeline

## 📄 License

MIT License - Free to use and modify for your projects!

---

Happy coding! 🚀✨
