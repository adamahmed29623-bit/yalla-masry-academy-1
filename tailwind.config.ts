import type { Config } from "tailwindcss";

const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        royal: "#050a14",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // هذه هي القطعة التي كانت ناقصة
};
export default config;
