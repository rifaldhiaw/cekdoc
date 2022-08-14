import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const gray = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
};

const theme = extendTheme({
  colors: {
    bg: {
      0: "#fff",
      ...gray,
    },
    brand: { ...baseTheme.colors.teal },
    text: {
      normal: gray[600],
      muted: gray[500],
      invert: "#fff",
    },
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: "none" } } },
    Text: {
      baseStyle: {
        color: "text.normal",
      },
    },
  },
});

export { theme };
