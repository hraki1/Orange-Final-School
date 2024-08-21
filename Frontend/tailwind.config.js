// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#fff', // لون الثانوي
        primary: '#0F2B43', // لون الرئيسي
      },
      animation: {
        'loop-scroll-y': 'loop-scroll-y 10s linear infinite', // حركة التمرير العمودي
        'bounceVertical': 'bounceVertical 2s infinite' // حركة النط العمودية
      },
      fontFamily: {
        abc: ["Playfair Display", "serif"] // خط مخصص
      },
      keyframes: {
        'loop-scroll-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-400%)' },
        },
        bounceVertical: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
