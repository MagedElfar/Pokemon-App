import { createContext } from "react";
import type { ThemeMode } from "../types/them";

type ThemModeContextType = {
    mode: ThemeMode
}

export const ThemModeContext = createContext<ThemModeContextType | null>(null)