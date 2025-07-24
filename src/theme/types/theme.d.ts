import "@mui/material/styles";
import "@mui/material/Button";
import {
    Palette as MuiPalette,
    PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';




declare module '@mui/material/styles' {
    interface Palette extends MuiPalette {
        brand: {
            main: string,
            secondary: string,
            accentMuted: string,
            accentLight: string,
            accentDark: string,
            danger: string,
            accentPurple: string
        },
        custom: {
            dark: string,
            light: string,
            lighter: string
        }
    }

    interface PaletteOptions extends MuiPaletteOptions {
        brand: {
            main?: string,
            secondary?: string,
            accentMuted?: string,
            accentLight?: string,
            accentDark?: string,
            danger?: string,
            accentPurple?: string
        },
        custom: {
            dark?: string,
            light?: string,
            lighter?: string
        }
    }

    interface TypographyVariants {
        topBar: React.CSSProperties;
        dialogTitle: React.CSSProperties;
        dialogDescription: React.CSSProperties;
        searchText: React.CSSProperties;
        navItem: React.CSSProperties
    }


}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        dark: true;
        light: true;
    }
}