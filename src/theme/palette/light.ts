import { createTheme } from "@mui/material";

export const lightThemePallets = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#18181A",
      light: "#C5C5C7"
    },
    background: {
      default: "#E1E9FE",
      paper: "#ffffff",
    },
    brand: {
      main: "#EBF1FF",
      secondary: "#BC51D5",
      accentMuted: "#F7F8FA",
      accentLight: "#F9F1FE",
      accentDark: "#BC51D5",
      danger: "#EF3D3E",
      accentPurple: "#A05DD6"
    },
    text: {
      primary: "#18181A",
      secondary: "#959FA6",
    },
    custom: {
      dark: "#2c2c2c",
      light: "#FFF",
      lighter: "#f5f5f5"
    }
  },
});
