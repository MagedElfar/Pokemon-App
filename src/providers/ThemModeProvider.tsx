import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemModeContext } from "../contexts/ThemModeContext"
import { lightTheme } from "../theme";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}


export default function ThemModeProvider({ children }: Props) {

    return (
        <ThemModeContext.Provider
            value={{
                mode: "light",
            }}
        >
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemModeContext.Provider>
    )
}
