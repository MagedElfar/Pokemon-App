import type { ReactNode } from "react";
import ThemModeProvider from "./ThemModeProvider";
import QueryProvider from "./QueryProvider";
import ErrorBoundary from "../components/ErrorBoundary";

interface Props {
    children: ReactNode
}

export default function AppProviders({ children }: Props) {
    return (
        <ErrorBoundary>
            <QueryProvider>
                <ThemModeProvider>
                    {children}
                </ThemModeProvider>
            </QueryProvider>
        </ErrorBoundary>
    )
}
