import { Box, Grid, Skeleton, Stack } from "@mui/material";

export default function PokemonDetailsSkeleton() {
    return (
        <Box
            sx={{
                width: { md: "60%", xs: "100%" },
                mx: "auto",
                borderRadius: 2,
                overflow: "hidden"
            }}
        >
            <Stack
                spacing={1}
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    px: 2,
                    py: 2
                }}
            >
                <Skeleton variant="text" width={180} height={40} />
                <Skeleton variant="text" width={80} />
            </Stack>

            <Box sx={{ background: "#fff", p: 2 }}>
                <Grid container spacing={3}>
                    <Grid size={{ md: 12, xs: 6 }}>
                        <Stack spacing={2} alignItems="center">
                            <Skeleton variant="circular" width={150} height={150} />
                            <Skeleton variant="rectangular" width={120} height={30} />
                            <Skeleton variant="rectangular" width="80%" height={60} />
                        </Stack>
                    </Grid>

                    <Grid size={{ md: 12, xs: 6 }}>
                        <Stack spacing={2}>
                            {[...Array(3)].map((_, i) => (
                                <Box key={i}>
                                    <Skeleton width="40%" />
                                    <Skeleton variant="rectangular" height={6} />
                                </Box>
                            ))}

                            <Box>
                                <Skeleton width="40%" />
                                <Skeleton variant="text" width={100} height={40} />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
