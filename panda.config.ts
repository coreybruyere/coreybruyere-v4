import { defineConfig } from "@pandacss/dev";

export const tokens = {
  colors: {
    primary: { value: "#1E40AF" }, // Blue-800
    secondary: { value: "#9333EA" }, // Purple-600
    accent: { value: "#FACC15" }, // Yellow-400
    background: { value: "#F3F4F6" }, // Gray-200
    text: { value: "#111827" }, // Gray-900
  },
  spacing: {
    sm: { value: "8px" },
    md: { value: "16px" },
    lg: { value: "32px" },
  },
};

export const globalCss = {
  "html, body": {
    backgroundColor: "{colors.background}",
    color: "{colors.text}",
    fontFamily: "system-ui, sans-serif",
  },
};

export const semanticTokens = {
  colors: {
    buttonBg: {
      value: {
        base: "{colors.primary}",
        _hover: "{colors.secondary}",
      },
    },
  },
};

export const textStyles = {
  heading: {
    description: "Heading style",
    value: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
  },
};

export const recipes = {};

export default defineConfig({
  theme: {
    extend: { tokens, semanticTokens, textStyles },
  },
  globalCss,
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],
  outdir: "styled-system",
});
