import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#4CC8FF",
          skyDark: "#3996BF",
          skyLight: "#70D3FF",
          cloud: "#F0FCFE",
          mist: "#C8F1FB",
          ink: "#0A0C0E",
          green: "#098609",
          red: "#871112",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
