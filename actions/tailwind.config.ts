import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["var(--font-mono)", ...fontFamily.serif],
    },
  },
  plugins: [forms],
};
export default config;
