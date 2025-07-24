import { Box, Card, Stack, Typography, useTheme } from "@mui/material";

interface Props {
    name: string;
    imageUrl: string;
    id: string | number
}

export default function PokemonCard({ name, imageUrl, id }: Props) {

    const theme = useTheme()
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: 2,
                height: "100%"
            }}>
            <Stack spacing={2}>
                <Box
                    sx={{
                        backgroundColor: theme.palette.custom.lighter,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: { md: "150px", sm: "150px", xs: "170px" }
                    }}
                >
                    <Box
                        maxWidth="100%"

                        height="auto"
                        component="img"
                        src={imageUrl}
                        alt={`${name}-image`}
                        loading="lazy"
                        mx="auto"
                        sx={{
                            objectFit: "cover",
                        }}
                    />
                </Box>
                <Typography variant="h4" textAlign="center">{name}</Typography>
                <Typography variant="body2" textAlign="center" ># {id}</Typography>
            </Stack>

        </Card>
    )
}

