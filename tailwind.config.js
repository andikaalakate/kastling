/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'tablet-l': '992px',
        'hp': '576px',
        'hmin': '425px',
        'minni': '375px',
        'mini': '320px',
      },
      fontFamily: {
        poppins: ['Poppins'],
        firaMono: ['Fira Mono'],
        firaSans: ['Fira Sans'],
        firaCode: ['Fira Code'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
}

