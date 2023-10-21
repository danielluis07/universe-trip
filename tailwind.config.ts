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
        light: "hsl(231, 77%, 90%);",
        dark: "hsla(231, 76%, 90%, 0.521)",
        verydark: "hsla(231, 76%, 90%, 0.284)",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        bellefair: ["var(--font-bellefair)"],
      },
      screens: {
        mobile: "375px",
        tablet: "800px",
        desktop: "1440px",
      },
      backgroundImage: {
        home: "url('/images/background-home-desktop.jpg')",
        crew: "url('/images/background-crew-desktop.jpg')",
        destinations: "url('/images/background-destination-desktop.jpg')",
        technology: "url('/images/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
