import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#0a0a0e",
        primaryAccent: "#A7D2B2",
        secondaryAccent: "#53212F",
        lightBackground: '#f5f5f5',
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
export default config;
