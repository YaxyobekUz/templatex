/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4535C1",
        secondary: "#478CCF",
        accent: "#36C2CE",
        lightAccent: "#77E4C8",
        background: "#F6FFFF",
      },
    },
  },
  plugins: [],
};
