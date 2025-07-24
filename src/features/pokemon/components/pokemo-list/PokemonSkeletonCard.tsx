import { Card, Skeleton, Stack } from "@mui/material";


export default function PokemonSkeletonCard() {

    return (
        <Card
            sx={{
                p: 2,
                borderRadius: 2
            }}>
            <Stack spacing={2}>
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{
                        height: { md: "150px", sm: "150px", xs: "170px" }
                    }}
                />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" width="60%" />

            </Stack>

        </Card>
    )
}

