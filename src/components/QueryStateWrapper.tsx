import type { ReactNode } from "react";
import ErrorFallback from "./ErrorFallback";
import { Box } from "@mui/material";

interface Props {
    isLoading: boolean;
    isError: boolean;
    error?: Error | null;
    onRetry: () => void;
    children: ReactNode;
    skeleton?: ReactNode;
}

export default function QueryStateWrapper({
    isLoading,
    isError,
    error,
    onRetry,
    children,
    skeleton,
}: Props) {
    if (isLoading) return <>{skeleton}</>;

    if (isError) {
        return (
            <Box mt={3} width="100%">
                <ErrorFallback error={error ?? null} onRetry={onRetry} />
            </Box>
        );
    }

    return <>{children}</>;
}
