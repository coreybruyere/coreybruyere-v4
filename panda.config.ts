import { defineConfig } from "@pandacss/dev";

export const tokens = {
  colors: {
    primary: { value: "#006157" }, // Primary color for links, logo, buttons
    secondary: { value: "#AE6300" }, // Secondary color
    accent: { value: "#00C7B2" }, // Link underline color
    background: { value: "#F6FFFE" }, // Body background
    text: { value: "#515554" }, // Text color
    // Dark mode colors
    dark: {
      background: { value: "#0A0A0A" }, // Dark background
      text: { value: "#F5F5F5" }, // Light text for dark mode
      primary: { value: "#00C7B2" }, // Teal for primary in dark mode
      secondary: { value: "#FFB74D" }, // Orange for secondary in dark mode
    },
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
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  ":root": {
    colorScheme: "light dark",
  },
  ".dark": {
    colorScheme: "dark",
  },
};

export const semanticTokens = {
  colors: {
    surfaceBg: {
      value: {
        base: "{colors.background}",
        _dark: "{colors.dark.background}",
      },
    },
    surfaceText: {
      value: {
        base: "{colors.text}",
        _dark: "{colors.dark.text}",
      },
    },
    interactivePrimary: {
      value: {
        base: "{colors.primary}",
        _dark: "{colors.dark.primary}",
      },
    },
    interactiveSecondary: {
      value: {
        base: "{colors.secondary}",
        _dark: "{colors.dark.secondary}",
      },
    },
    buttonBg: {
      value: {
        base: "{colors.primary}",
        _dark: "{colors.dark.primary}",
      },
    },
    buttonBgHover: {
      value: {
        base: "{colors.secondary}",
        _dark: "{colors.dark.secondary}",
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
  conditions: {
    dark: ".dark &",
  },
  globalCss: {
    "html, body": {
      backgroundColor: "{colors.surfaceBg}",
      color: "{colors.surfaceText}",
      fontFamily: "system-ui, sans-serif",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    ":root": {
      colorScheme: "light dark",
    },
    ".dark": {
      colorScheme: "dark",
    },
  },
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],
  outdir: "styled-system",
});
