import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Lexend Deca, sans-serif",
    heading: "Lexend Deca, sans-serif",
  },
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    red: "#D93A31",
    gray: {
      100: "#FFE7E5",
      200: "#DEE3EE",
      300: "#D1D6E0",
      400: "#B5B5C2",
      500: "#9497A8",
      800: "#2C2D36",
      900: "#2B2B35",
    },
  },
});
