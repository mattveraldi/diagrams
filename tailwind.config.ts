import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/**/*.html", "./app/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
