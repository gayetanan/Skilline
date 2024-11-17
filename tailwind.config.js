export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans serif",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      colors: {
        primary: "#2F327D",
        secondary: "#29B9E7",
        leading: "#252641",
        purple: "#5B72EE",
        "leading-300": "#696984",
        accent: "#F48C06",
        pink: "#D8587E",
      },
    },
  },
  plugins: [],
};
