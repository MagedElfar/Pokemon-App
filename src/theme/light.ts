// src/theme/light.ts

import { customShadows } from "./shadows";
import { createTypography } from "./typography";
import { lightThemePallets } from "./palette/light";
import { createTheme } from "@mui/material";
import { createComponentOverrides } from "./components";

const pallets = lightThemePallets.palette

export const lightTheme = createTheme(lightThemePallets, {
    typography: createTypography(pallets),
    shadows: customShadows,
    components: createComponentOverrides(pallets)
});
