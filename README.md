# Helcon Cleaning Service - Hero Section Demo

A modern, professional hero section for **Helcon Cleaning Service** — a premium cleaning company targeting commercial and residential clients.

## 🎨 Design Features

✨ **Modern & Professional Design**
- Clean, corporate aesthetic with light blue, white, and navy color scheme
- High-converting landing page layout
- Responsive design (mobile, tablet, desktop)

🎯 **Key Components**
- Bold headline: "Professional Cleaning You Can Trust"
- Engaging subheadline focused on commercial cleaning services
- Dual CTA buttons: "Request a Quote" (primary) & "View Services" (secondary)
- Trust indicators showing 500+ clients, 24/7 support, 99% satisfaction
- Abstract illustration with floating shapes and clean workspace visual
- Subtle animations for a premium feel

🏢 **Target Audience**
- Offices and commercial spaces
- Property managers and facility directors
- Business owners seeking professional cleaning contracts

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project:
```bash
cd "REACT LESSON NEW/Helcon"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📁 Project Structure

```
src/
├── App.jsx                      # Main app component
├── App.css                      # App styling
├── index.css                    # Global styles
├── components/
│   ├── HeroSection.jsx         # Hero section component
│   └── HeroSection.css         # Hero section styling
└── main.jsx                     # React entry point

index.html                       # HTML template
package.json                     # Dependencies & scripts
vite.config.js                  # Vite configuration
```

## 🎨 Customization

### Colors
Edit the color values in `src/components/HeroSection.css`:
- Primary Blue: `#0066cc`
- Dark Navy: `#001a4d`
- Light Background: `#f0f7ff`
- Text Gray: `#334d6e`

### Text Content
Update headlines and copy in `src/components/HeroSection.jsx`:
- Main headline (line 15)
- Subheadline (line 19)
- Button labels (line 25, 28)
- Trust indicators (lines 33-41)

### Button Actions
Add click handlers in `HeroSection.jsx`:
```jsx
const handleQuoteClick = () => {
  // Add your quote request logic
}

const handleServicesClick = () => {
  // Add your services navigation logic
}
```

Then update buttons:
```jsx
<button className="btn btn-primary" onClick={handleQuoteClick}>
  Request a Quote
</button>
```

## 📱 Responsive Features

- **Desktop** (1024px+): Full two-column layout with animations
- **Tablet** (768px-1024px): Single column, adjusted spacing
- **Mobile** (480px-768px): Stacked layout, optimized touch targets
- **Small Mobile** (<480px): Minimized sizing, full-width buttons

## 🔧 Technologies Used

- **React 18** - UI framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with animations and gradients
- **JavaScript** - Interactive functionality

## 📄 License

Free to use for the Helcon Cleaning Service project.

## 💡 Next Steps

1. **Add interactivity** - Connect buttons to forms or booking systems
2. **Add images** - Replace the abstract illustration with actual photos
3. **Analytics** - Track CTA button clicks and user engagement
4. **A/B Testing** - Test different headlines and CTAs
5. **Services Page** - Create detailed service listings
6. **Contact Form** - Add quote request form
7. **Testimonials** - Add client testimonials section

---

**Happy coding! 🚀**
