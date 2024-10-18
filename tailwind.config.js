/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      "gilroy-thin": ["Gilroy Thin"],
      "gilroy-light": ["Gilroy Light"],
      "gilroy-reguler": ["Gilroy Reguler"],
      "gilroy-medium": ["Gilroy Medium"],
      "gilroy-semiBold": ["Gilroy SemiBold"],
      "gilroy-bold": ["Gilroy Bold"],
      "gilroy-extraBold": ["Gilroy ExtraBold"],
      "segoe-ui": ["Segoe UI"],
      "segoe-ui-bold": ["Segoe UI Bold"],
      poppins: ["Poppins", "system-ui"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "registration-bg": "url(/public/images/registretion-bg-image.png)",
      },
      colors: {
        "primary-bg": "#ffffff",
        "secondary-bg": "#f0f2f5",
        "tertiary-bg": "#e4e6e9",
        "primary-text": "#050505",
        "secondary-text": "#65676b",
        "tertiary-text": "#0866ff",
        "primary-button": "#0866ff",
        "secondary-button": "#d8dadf",
        "primary-border": "#ced0d4",
        "secondary-border": "#e4e6eb",
        "input-color": "#f0f2f5",
      },
    },
  },
  plugins: [],
};
