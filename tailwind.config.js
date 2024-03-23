/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blueText' : '#0866FF',
        'bgBlue' : '#233950',
        greyText : {
          light: '#65676B',
          dark: '#B0B3B3',
        },
        mainText : {
          light : '#050505',
          dark : '#E4E6EB',
        }
      }
    },
  },
  plugins: [],
};
