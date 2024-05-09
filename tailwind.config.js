/** @type {import('tailwindcss').Config} */
module.exports = {
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        seccion: '#F3F5F9',
        info: '#1BC3EA',
        main: '#FFFBF2',
        white: '#FFFFFf',
        red: '#F94848'
      },
      text: {
        blackText: '#151515'
      },
      secondary: {
        font: '#1A71AB',
        button: '#1A71AB',
        icon: '#8190b5',
        card: '#1A71AB',
        dash: '#0f2246',
        dash2: '#E8F0FF'
      }
    },
  },
  plugins: [],
};
