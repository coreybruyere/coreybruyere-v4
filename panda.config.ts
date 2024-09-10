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
  // conditions: {
  //   light: "[data-color-mode=light] &",
  //   dark: "[data-color-mode=dark] &",
  //   pinkTheme: "[data-theme=pink] &",
  //   blueTheme: "[data-theme=blue] &",
  // },

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
          text: {
            value: {
              _pinkTheme: {
                base: "{colors.pink.500}",
                _dark: "{colors.pink.300}",
              },
              _blueTheme: {
                base: "{colors.blue.500}",
                _dark: "{colors.blue.300}",
              },
            },
          },
        },
      },
    },
  },

  utilities: {
    paginationButtonBase: {
      transform(props) {
        return {
          description: "Base styles for pagination buttons",
          className: "pagination-button-base",
          properties: {
            marginX: { value: "1" },
            paddingX: { value: "3" },
            paddingY: { value: "2" },
            background: { value: "green" },
            borderRadius: { value: "md" },
            cursor: "pointer",
            _hover: { bg: "gray" },
          },
        };
      },
    },
    paginationActiveClass: {
      transform(props) {
        return {
          backgroundColor: "blue",
          color: "white",
        };
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
