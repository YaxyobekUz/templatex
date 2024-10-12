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
        background: "#F2F5FC",
        dark: {
          800: "#333333",
        },
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    boxShadow: {
      sm: "0 0 10px 0 rgba(219,227,227,0.7)",
    },

    backgroundImage: {
      "gradient-orange": "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
    },

    screens: {
      xs: "400px",
    },
  },

  plugins: [],
};
