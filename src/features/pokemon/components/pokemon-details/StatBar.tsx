import { Box, Typography, useTheme } from "@mui/material";

export default function StatBar({ label, value }: { label: string, value: number }) {
    const theme = useTheme();
    return (
        <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="caption" color="primary.main" mb={0.5} textTransform="capitalize">
                    {label}
                </Typography>
                <Typography variant="caption" color="primary.main" mb={0.5}>
                    {value}%
                </Typography>
            </Box>
            <Box
                sx={{
                    height: "4px",
                    position: "relative",
                    width: "100%",
                    backgroundColor: theme.palette.custom.lighter,
                    borderRadius: 1,
                    overflow: "hidden",
                    "&::before": {
                        content: "''",
                        position: "absolute",
                        width: `${value}%`,
                        height: "100%",
                        backgroundColor: theme.palette.primary.main
                    }
                }}
            />
        </Box>
    );
}