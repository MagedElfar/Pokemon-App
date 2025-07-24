import type { Components, Palette } from "@mui/material";

export const buttons = (palette: Palette): Components => ({
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 8,
                fontWeight: 600,
                textTransform: "none",
            },
        },
        variants: [
            {
                props: { variant: "dark" },
                style: {
                    backgroundColor: palette?.primary?.main,
                    color: palette.primary.light,
                    minWidth: "120px",
                    "&:hover": {
                        backgroundColor: palette.custom.dark,
                    },
                },
            },
            {
                props: { variant: "light" },
                style: {
                    minWidth: "120px",
                    backgroundColor: palette?.custom.light,
                    color: palette.text.primary,
                    border: "1px solid #ddd",
                    "&:hover": {
                        backgroundColor: palette.custom.lighter,
                    },
                },
            },
        ],
    },

});
