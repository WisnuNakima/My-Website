# NovaGlow Component

WebGL-based animated orb component ported from Framer template.

## Usage

```jsx
import NovaGlow from './components/NovaGlow';

function App() {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <NovaGlow 
        hue={280} 
        hoverIntensity={0.3} 
        rotateOnHover={true} 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hue` | number | 0 | Hue adjustment in degrees (0-360). Changes the color of the orb. |
| `hoverIntensity` | number | 0.2 | Intensity of hover distortion effect (0-2). Higher values create more distortion. |
| `rotateOnHover` | boolean | true | Whether the orb should rotate when hovered. |

## Features

### WebGL Rendering
- Uses WebGL API for high-performance GPU-accelerated rendering
- Custom vertex and fragment shaders written in GLSL
- Efficient geometry with single triangle covering the viewport

### Interactive Effects
- **Hover Detection**: Detects mouse position and applies distortion effect
- **Smooth Transitions**: Lerp-based smooth transitions for hover state
- **Rotation**: Optional rotation effect when hovering over the orb

### Visual Effects
- **Simplex Noise**: 3D simplex noise for organic, flowing animation
- **Color Adjustment**: YIQ color space conversion for hue shifting
- **Lighting**: Multiple light sources with different attenuation models
- **Alpha Blending**: Proper alpha extraction for transparent rendering

## Technical Details

### Shader Pipeline

#### Vertex Shader
- Simple pass-through shader
- Passes UV coordinates to fragment shader
- Renders a single triangle covering the viewport

#### Fragment Shader
- **Color System**: Uses YIQ color space for hue adjustment
- **Noise Function**: 3D simplex noise for animation
- **Lighting Model**: Combines multiple light sources
- **Base Colors**:
  - Color 1: Purple (rgb(156, 67, 254))
  - Color 2: Cyan (rgb(76, 194, 233))
  - Color 3: Deep Blue (rgb(16, 20, 153))

### Animation Loop
- Uses `requestAnimationFrame` for smooth 60fps animation
- Time-based animation for consistent speed across devices
- Smooth interpolation for hover state transitions

### Performance
- Single draw call per frame
- Minimal geometry (3 vertices)
- GPU-accelerated shader computations
- Automatic cleanup on unmount

## Browser Support

Requires WebGL support. Works on:
- Chrome 56+
- Firefox 51+
- Safari 11+
- Edge 79+

Falls back gracefully if WebGL is not available (logs error to console).

## Customization Examples

### Purple Orb (Default-ish)
```jsx
<NovaGlow hue={280} hoverIntensity={0.3} rotateOnHover={true} />
```

### Green Orb
```jsx
<NovaGlow hue={120} hoverIntensity={0.2} rotateOnHover={true} />
```

### Red Orb with High Intensity
```jsx
<NovaGlow hue={0} hoverIntensity={0.5} rotateOnHover={true} />
```

### Static Orb (No Rotation)
```jsx
<NovaGlow hue={280} hoverIntensity={0.3} rotateOnHover={false} />
```

### Subtle Effect
```jsx
<NovaGlow hue={280} hoverIntensity={0.1} rotateOnHover={false} />
```

## Troubleshooting

### Orb not rendering
- Check browser console for WebGL errors
- Ensure container has explicit width and height
- Verify WebGL is supported in your browser

### Performance issues
- Reduce `hoverIntensity` for less computation
- Ensure only one instance is rendered at a time
- Check GPU usage in browser dev tools

### Colors look wrong
- Hue values are in degrees (0-360)
- Try different hue values to find desired color
- Base colors are purple, cyan, and deep blue

## Credits

Original Framer template: Nova Glow by Framer
Ported to React by: Rasya Zildan

## License

MIT License - Free to use in your projects
