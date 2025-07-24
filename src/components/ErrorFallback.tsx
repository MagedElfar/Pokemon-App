import { Box, Button, Typography } from "@mui/material";
interface Props {
    onRetry: () => void;
    error: Error | null;
}

export default function ErrorFallback({ onRetry, error }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "250px",
                p: 4,
                borderRadius: 4,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                gap: 2,
                maxWidth: 700,
                width: { md: "80%", xs: "100%" },
                mx: "auto",
                background: "rgba(164, 113, 106, 0.04)",
            }}
        >
            <Typography variant="h4">
                Something went wrong
            </Typography>
            <Typography variant="body1">
                {error?.message ? (
                    error.message
                ) : (
                    <>
                        Unable to fetch data — <strong>please try again.</strong>
                    </>
                )}
            </Typography>

            <Button
                variant="dark"
                onClick={onRetry}
                sx={{ px: 4, py: 1.5, borderRadius: 2, boxShadow: 2 }}
            >
                Retry
            </Button>
        </Box>
    );
}
