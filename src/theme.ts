import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const gray = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
};

const theme = extendTheme({
  colors: {
    bg: {
      0: "#fff",
      ...gray,
    },
    brand: baseTheme.colors.facebook,
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
