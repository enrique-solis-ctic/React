export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "custom-blue": "#646cff",
        "hover-blue": "#535bf2",
        "light-hover-blue": "#747bff",
        "custom-dark": "#242424",
        "custom-light": "#f9fafb",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        roboto: ["Roboto", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        "page-dark": "#242424",
        "page-light": "#f9fafb",
      },
      borderColor: {
        default: "#646cff",
      },
    },
  },
  plugins: [],
};
