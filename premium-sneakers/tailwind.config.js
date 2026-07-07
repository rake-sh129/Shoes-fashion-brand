/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0B0B0B",
          secondary: "#141414",
          glass: "#1A1A1A",
          gold: {
            DEFAULT: "#F5C451",
            muted: "#CFA15A",
          },
          gray: {
            muted: "#A1A1AA",
          },
        },
        fontFamily: {
          sans: ["Space Grotesk", "sans-serif"],
          display: ["Clash Display", "sans-serif"],
        },
        backgroundImage: {
          "glass-gradient":
            "linear-gradient(145deg, rgba(26,26,26,0.8) 0%, rgba(20,20,20,0.4) 100%)",
        },
        borderColor: {
          "glass-border": "rgba(255, 255, 255, 0.08)",
        },
      },
    },
    plugins: [],
  };