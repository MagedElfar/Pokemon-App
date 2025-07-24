import type { Palette, TypographyVariantsOptions } from "@mui/material";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export const createTypography = (palette: Palette): TypographyVariantsOptions => ({
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: {
        fontSize: "2rem",
        fontWeight: 700,
        color: palette.primary.main,
    },
    h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
        color: palette.primary.dark,
    },
    h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
        color: palette.primary.dark,
    },
    h4: {
        fontSize: "1.25rem",
        fontWeight: 600,
        color: palette.text.primary,
    },
    subtitle1: {
        fontSize: "1rem",
        fontWeight: 500,
        color: palette.text.secondary,
    },
    subtitle2: {
        fontSize: "0.95rem",
        fontWeight: 400,
        color: palette.text.secondary,
    },
    body1: {
        fontSize: "0.95rem",
        fontWeight: 400,
        color: palette.text.primary,
    },
    body2: {
        fontSize: "0.8rem",
        fontWeight: 500,
        color: palette.text.secondary,
    },
    button: {
        fontWeight: 600,
        textTransform: "none",
        color: palette.getContrastText(palette.primary.main),
    },
    caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        color: palette.text.secondary,
    },
    overline: {
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        color: palette.secondary.main,
    },
});
