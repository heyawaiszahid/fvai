/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.3rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6787E7",
          dark: "#4B66C6",
          light: "#8CA8F0",
        },
        secondary: {
          DEFAULT: "#8958FE",
          dark: "#6940DA",
          light: "#AA81FE",
        },
        success: {
          DEFAULT: "#33BC40",
          dark: "#25A13C",
          light: "#61D661",
        },
        info: {
          DEFAULT: "#4169E1",
          dark: "#2F50C1",
          light: "#6E91EC",
        },
        warning: {
          DEFAULT: "#FFDC00",
          dark: "#DBBA00",
          light: "#FFE73F",
        },
        error: {
          DEFAULT: "#FF4235",
          dark: "#DB262A",
          light: "#FF7D67",
        },
        text: {
          primary: "#0A112D",
          secondary: "#354681",
          disabled: "#5A71BA",
        },
        grey: {
          100: "#FCFCFD",
          200: "#F9F9F9",
          300: "#F5F5F5",
          400: "#F0F0F0",
          500: "#EDEDED",
          600: "#EAEAEA",
          700: "#E7E7E7",
          800: "#E4E4E4",
          900: "#DBDBDB",
        },
        background: {
          paper: "#FFFFFF",
          default: "rgba(255, 255, 255, 0.50)",
        },
        others: {
          backdropOverlay: "rgba(0, 0, 0, 0.50)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
