/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0874e4", // Removi as aspas ao redor da chave 'blue'
      },
    },
  },
  plugins: [],
};
