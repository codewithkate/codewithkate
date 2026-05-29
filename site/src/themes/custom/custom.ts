// Custom Theme Template
// Rename this file to custom-theme.ts (or any name you prefer)
// Then set theme: "custom" in src/config.ts - it will work automatically!

export const customTheme = {
  primary: {
    50: "#ffffff",   // Pure white
    100: "#f8f8f8",
    200: "#e8e8e8",
    300: "#d0d0d0",
    400: "#a0a0a0",
    500: "#808080",  // Base gray
    600: "#606060",
    700: "#404040",
    800: "#202020",
    900: "#101010",
    950: "#000000"   // Pure black
  },
  highlight: {
    50: "#ffeef2",   // Very light blue
    100: "#fae0e4",
    200: "#f7cad0",
    300: "#f9bec7",
    400: "#fbb1bd",
    500: "#ff99ac",  // Base light blue
    600: "#ff85a1",
    700: "#ff7096",
    800: "#ff5c8a",
    900: "#ff477e",
    950: "#ff0a54"
  }
};

// Usage in src/config.ts:
// theme: "custom",
// customTheme: customTheme
