/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'blueText' : '#0866FF',
        'bgBlue' : '#233950',
       
        mainBg : {
          dark : '#252627',
          dark2 : '#18191A',
          light : '#FFFFFF',
          light2 : '#F0F2F5',
        },
        btnBg : {
          dark : '#3A3B3C',
          light : '#F0F2F5',
        },
        greyText : {
          light: '#65676B',
          dark: '#B0B3B3',
        },
        mainText : {
          light : '#050505',
          dark : '#E4E6EB',
        },
        
      }
    },
  },
  plugins: [],
};
