import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'body': ['"El Messiri"', 'sans-serif'],
        'display': ['Cairo', 'sans-serif'],
        'headline': ['Cairo', 'El Messiri', 'sans-serif'],
        'amiri-quran': ['"Amiri Quran"', 'serif'],
      },
      colors: {
        // الألوان الملكية الصريحة (تثبيت الهوية)
        'royal-gold': {
          light: '#F3E5AB', // ذهبي فاتح للمساحات
          DEFAULT: '#D4AF37', // الذهب الملكي الأساسي
          dark: '#996515',  // ذهبي عميق للظلال
        },
        'nile-blue': {
          light: '#1E3A8A',
          DEFAULT: '#002366', // أزرق نيلي عميق
          dark: '#001233',
        },
        // الحفاظ على نظام المتغيرات مع تحسينه
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4AF37", // جعل الذهب هو اللون الأساسي للموقع
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#002366", // جعل النيلي هو اللون الثانوي
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#F3E5AB",
          foreground: "#002366",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gold-shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer": "gold-shimmer 3s infinite linear",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
