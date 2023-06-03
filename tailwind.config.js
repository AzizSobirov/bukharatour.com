module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F3F4F5",
          200: "#D7D8DA",
          400: "#616266",
          500: "#F9FAFC",
        },
        primary: "#00A307",
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1180px",
        xl: "1440px",
        "2xl": "1536px",
      },
      boxShadow: {
        sidebar: "0px 0px 18px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
