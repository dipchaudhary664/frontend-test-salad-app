import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "custom-tl": "10% 0 0 0", // Top-left rounded
        "custom-tr": "0 50% 0 0", // Top-right rounded
        "custom-br": "0 0 30% 0", // Bottom-right rounded
        "custom-bl": "0 0 0 40%", // Bottom-left rounded
      },
    },
  },
  plugins: [],
};
export default config;
