# Mieszkancom Website - User Guide

## Overview
A modern, SEO-optimized one-page website for Mieszkancom, a Polish interior design company specializing in ergonomic space optimization.

## Key Features

### Design
- **Modern & Clean**: Professional design with Outfit and Inter fonts
- **Color Palette**: Primary Blue (#2f79ff), Accent Green (#b2fc00), professional greys
- **Fully Responsive**: Perfect display on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Scroll animations, fade-ins, and smooth transitions
- **WCAG Compliant**: Proper contrast ratios and accessibility features

### Sections

1. **Hero Section**
   - Rotating catchphrases with smooth transitions
   - Prominent CTA button
   - Animated scroll indicator
   - Floating gradient backgrounds

2. **Metr po metrze (Process)**
   - 6-step process visualization
   - Cards with hover effects
   - Scroll-triggered animations
   - Clear step-by-step explanation

3. **Rozważania (Philosophy)**
   - Company values and approach
   - Fade-in animations on scroll
   - Clean, readable typography

4. **Pytania (FAQ)**
   - Accordion-style questions
   - Smooth expand/collapse animations
   - 7 common questions answered

5. **Zeznania (Testimonials)**
   - Carousel with 4 client testimonials
   - Auto-play with pause on hover
   - Navigation arrows and dots
   - Beautiful quote styling

6. **Bez wahania (Contact)**
   - Clean contact cards
   - Icon-based information
   - Email, phone, and location

### Navigation
- **Fixed Header**: Always accessible navigation
- **Smooth Scroll**: Smooth scrolling to sections
- **Mobile Menu**: Animated hamburger menu for mobile devices
- **Active States**: Visual feedback on all interactive elements

## Content Management

All content can be easily edited through the `content/` folder structure:

### Text Content
- `content/sections/` - Hero, Idea, and other section texts
- `content/faq/` - FAQ questions and answers
- `content/testimonials/` - Client testimonials
- `content/contact/` - Contact information

### Projects
- `content/projects/YYYYMMDD--Project-Name/` - Each project in its own folder
- Format: `20241015--Modern-Apartment`
- Description in `.txt` file
- Images numbered: `001-Title.jpg`, `002-Title.jpg`, etc.

### Detailed instructions
See `content/README.md` for complete content management guide.

## SEO Optimization

### Implemented Features
- Semantic HTML5 structure (header, nav, main, section, article, footer)
- Proper heading hierarchy (H1-H3)
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Polish language declaration
- Fast load times and optimized assets
- Mobile-first responsive design

### Key Meta Tags
- Title: "Mieszkancom: Funkcjonalność w przestrzeni, na czas"
- Description: Ergonomic space design services
- Keywords: projektowanie ergonomiczne, architektura wnętrz, optymalizacja przestrzeni
- Language: Polish (pl)

## Technical Details

### Technologies
- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No heavy frameworks
- **Modern CSS** - CSS Variables, Grid, Flexbox
- **Google Fonts** - Outfit and Inter fonts

### File Structure
```
project/
├── index.html          # Main HTML structure
├── style.css           # All styles and animations
├── main.js            # All JavaScript functionality
├── content/           # Editable content
│   ├── sections/      # Section texts
│   ├── projects/      # Project portfolio
│   ├── testimonials/  # Client testimonials
│   ├── faq/          # Questions and answers
│   └── contact/      # Contact info
├── package.json       # Dependencies
└── .npmrc            # NPM configuration
```

### Scripts
- `npm run dev` - Start development server (auto-started)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized CSS with minimal specificity
- Efficient JavaScript with event delegation
- Lazy loading for scroll animations
- Smooth 60fps animations
- Small bundle size (~15KB total)

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## Future Enhancements
- Dynamic content loading from `content/` folder
- Image gallery for projects
- Contact form with validation
- Blog/news section
- Multi-language support (Polish/English)

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-blue: #2f79ff;
  --accent-green: #b2fc00;
  --white: #ffffff;
  --grey-light: #fafafa;
  --grey-medium: #d4d4d4;
  --grey-dark: #333333;
}
```

### Fonts
Change fonts in `index.html` (Google Fonts link) and `style.css`:
```css
body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
}
```

### Content
All text content can be edited directly in `index.html` or better yet, use the content management system in the `content/` folder for future dynamic updates.

## Deployment
The website is static and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and upload the `dist/` folder.

## Support
For any questions about content updates or customization, refer to:
- `content/README.md` - Content management guide
- Polish characters: ą, ć, ę, ł, ń, ó, ś, ź, ż are fully supported
