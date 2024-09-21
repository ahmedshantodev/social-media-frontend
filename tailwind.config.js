/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "main_bg": "var(--main_bg)",
      "primary_bg": "var(--primary_bg)",
      "secondary_bg": "var(--secondary_bg)",
      "page_color": "var(--page_color)",
      "text_color": "var(--text_color)",
      "primary_color": "var(--primary_color)",
      "secondary_color": "var(--secondary_color)",
      "title_color": "var(--title_color)",
      "input_color": "var(--input_color)",
      "border_color": "var(--border_color)",
      "single_color": "var(--single_color)",
      "hover_color": "var(--hover_color)",
      "blur": "var(--blur)",
      "black": "var(--black)",
      "white": "var(--white)",
      "green": "var(--green)",
      "blue": "var(--blue)",
      "red": "var(--red)",
      "yellow": "var(--yellow)",
      "purple-100": "var(--purple-100)",
      "pink-100": "var(--pink-100)",
      "cyan-100": "var(--cyan-100)",
    },
    fontFamily: {
      "gilroy-thin": ["Gilroy Thin"],
      "gilroy-light": ["Gilroy Light"],
      "gilroy-reguler": ["Gilroy Reguler"],
      "gilroy-medium": ["Gilroy Medium"],
      "gilroy-semiBold": ["Gilroy SemiBold"],
      "gilroy-bold": ["Gilroy Bold"],
      "gilroy-extraBold": ["Gilroy ExtraBold"],
      "poppins": ["Poppins", "system-ui"],
      "inter": ["Inter", "sans-serif"]
    },
    extend: {
      screens: {
        "xs": "320px",
        "sm": "576px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "registration-bg": "url(/public/images/registretion-bg-image.png)",
      },
    },
  },
  plugins: [],
}