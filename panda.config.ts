import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "{colors.teal.900}" },
          secondary: { value: "{colors.orange.900}" },
        },
      },
      semanticTokens: {
        colors: {
          danger: {
            value: { base: "{colors.red.400}", _dark: "{colors.green.900}" },
          },
          success: {
            value: { base: "{colors.green.400}", _dark: "{colors.green.900}" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
