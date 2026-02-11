import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir Next", "Nunito Sans", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      colors: {
        ink: "#0f172a",
        mist: "#f8fafc",
        accent: "#0284c7",
        sand: "#f1f5f9"
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
