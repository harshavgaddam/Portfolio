# Modern Software Engineer Portfolio

A stunning, modern portfolio website built with Next.js, featuring glass morphism design, physics-based animations, and seamless light/dark mode support.

## ✨ Features

- **Glass Morphism Design** - Beautiful backdrop blur effects and glass-like components
- **Physics-Based Animations** - Smooth, realistic animations using Framer Motion
- **Light/Dark Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern Tech Stack** - Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized** - Fast loading times and smooth interactions

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glass effects
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section**: `components/hero.tsx` - Update name, title, and description
- **About Section**: `components/about.tsx` - Update personal details and stats
- **Experience**: `components/experience.tsx` - Add your work history
- **Projects**: `components/projects.tsx` - Add your projects
- **Contact**: `components/contact.tsx` - Update contact information

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Animations**: Adjust animation parameters in component files
- **Glass Effects**: Customize glass morphism styles in `app/globals.css`

### Theme
- **Light/Dark Mode**: Configure theme options in `components/theme-provider.tsx`
- **System Preference**: Automatically detects user's system theme preference

## 📱 Sections

1. **Hero** - Introduction with animated text and call-to-action
2. **About** - Personal information with animated stats
3. **Skills** - Technical skills with progress bars
4. **Experience** - Work history with timeline design
5. **Projects** - Portfolio showcase with interactive cards
6. **Contact** - Contact form and social links

## 🎯 Key Features Explained

### Glass Morphism
- Uses `backdrop-blur-md` for the glass effect
- Semi-transparent backgrounds with borders
- Smooth transitions between states

### Physics Animations
- Spring animations for natural movement
- Staggered animations for sequential reveals
- Hover effects with realistic physics

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized navigation for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Supports Next.js out of the box
- **AWS Amplify**: Full-stack deployment solution

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 