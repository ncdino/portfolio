/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
        RiaSans: ["var(--font-RiaSans)", "sans-serif"],
        chab: ["var(--font-chab)", "sans-serif"],
        sequantialist: ["var(--font-sequentialist)", "sans-serif"],
        leagueSpartan: ["var(--font-league-spartan)"],
      },
      fontSize: {
        "10xl": "10rem", // 160px (10 * 16px = 160px)
        "11xl": "12rem", // 192px
        "12xl": "15rem", // 240px
        "custom-huge": "20rem", //320px, text-custom-huge
        "half-xl": "1.35rem",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
        10: "10px",
        14: "14px",
        15: "15px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {
        textWhite: "#F9F8F6",
        textRed: "#E10600",
        primary: "#FFF7E9",
      },
    },
  },
  plugins: [],
};
