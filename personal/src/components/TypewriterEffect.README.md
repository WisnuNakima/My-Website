# TypewriterEffect Component

Dynamic typing animation component ported from Framer template.

## Usage

```jsx
import TypewriterEffect from './components/TypewriterEffect';

function App() {
  return (
    <div>
      <TypewriterEffect 
        words={['Hello', 'World', 'Framer']}
        typingSpeed={100}
        deletingSpeed={60}
        pauseDuration={2000}
        cursorColor="#1a1a1a"
        cursorWidth={2}
        cursorHeight={100}
        fontSize="2rem"
        fontWeight="700"
        textColor="#1a1a1a"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `words` | string[] | `['Hello', 'World', 'Framer']` | Array of words to cycle through |
| `typingSpeed` | number | 100 | Speed of typing in milliseconds per character |
| `deletingSpeed` | number | 60 | Speed of deleting in milliseconds per character |
| `pauseDuration` | number | 1000 | Pause duration at end of word before deleting (ms) |
| `cursorColor` | string | '#1a1a1a' | Color of the blinking cursor |
| `cursorWidth` | number | 2 | Width of cursor in pixels |
| `cursorHeight` | number | 100 | Height of cursor as percentage of font size |
| `fontSize` | string | '1.2rem' | Font size (can be px, rem, em, or 'inherit') |
| `fontWeight` | string | '400' | Font weight |
| `textColor` | string | '#666' | Color of the text |
| `className` | string | '' | Additional CSS class name |

## Features

### Typing Animation
- Types out each word character by character
- Smooth typing effect with customizable speed
- Natural pause at the end of each word

### Deleting Animation
- Deletes characters one by one
- Faster deleting speed for better UX
- Smooth transition between words

### Blinking Cursor
- Animated blinking cursor
- Customizable color, width, and height
- Syncs with typing animation

### Responsive
- Works with any font size
- Cursor height automatically adjusts to font size
- Can inherit parent styles with `fontSize="inherit"`

## Examples

### Basic Usage
```jsx
<TypewriterEffect 
  words={['Developer', 'Designer', 'Creator']}
/>
```

### Custom Styling
```jsx
<TypewriterEffect 
  words={['Hello', 'World']}
  fontSize="3rem"
  fontWeight="bold"
  textColor="#ff0000"
  cursorColor="#ff0000"
/>
```

### Inherit Parent Styles
```jsx
<h1 style={{ fontSize: '4rem', fontWeight: 700, color: '#1a1a1a' }}>
  <TypewriterEffect 
    words={['Interested in Frontend', 'Interested in Backend']}
    fontSize="inherit"
    fontWeight="inherit"
    textColor="inherit"
  />
</h1>
```

### Slow Typing
```jsx
<TypewriterEffect 
  words={['Slow', 'Typing', 'Effect']}
  typingSpeed={200}
  deletingSpeed={100}
  pauseDuration={3000}
/>
```

### Fast Typing
```jsx
<TypewriterEffect 
  words={['Fast', 'Typing', 'Effect']}
  typingSpeed={50}
  deletingSpeed={30}
  pauseDuration={500}
/>
```

### No Cursor
```jsx
<TypewriterEffect 
  words={['No', 'Cursor']}
  cursorWidth={0}
/>
```

### Thick Cursor
```jsx
<TypewriterEffect 
  words={['Thick', 'Cursor']}
  cursorWidth={5}
  cursorHeight={120}
/>
```

## Animation Cycle

1. **Typing Phase**: Types out the current word character by character
2. **Pause Phase**: Pauses at the end of the word
3. **Deleting Phase**: Deletes the word character by character
4. **Pause Phase**: Brief pause before next word
5. **Repeat**: Cycles to the next word and repeats

## Performance

- Uses `setTimeout` for precise timing control
- Efficient re-renders with proper cleanup
- Minimal DOM updates
- Smooth 60fps cursor blinking

## Accessibility

- Uses `aria-live="polite"` for screen reader support
- Cursor is marked as `aria-hidden="true"`
- Semantic HTML structure

## Browser Support

Works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Tips

1. **Responsive Design**: Use `fontSize="inherit"` to inherit parent font size
2. **Performance**: Keep word count reasonable (< 10 words)
3. **Timing**: Adjust speeds based on word length
4. **Cursor**: Match cursor color with text color for consistency

## Credits

Original Framer template: TypewriterEffect
Ported to React by: Rasya Zildan

## License

MIT License - Free to use in your projects
