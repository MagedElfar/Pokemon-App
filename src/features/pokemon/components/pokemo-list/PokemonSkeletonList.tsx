import { Grid } from "@mui/material";
import { POKEMON_LIMIT } from "../../constant";
import PokemonSkeletonCard from "./PokemonSkeletonCard";


export default function PokemonSkeletonList() {

    const list = Array.from({ length: POKEMON_LIMIT }, (_, i) => i);

    return (
        <Grid container spacing={3}>
            {list.map((_, index) => {
                return (
                    <Grid size={{ md: 3, sm: 6, xs: 12 }} key={index}>
                        <PokemonSkeletonCard />
                    </Grid>
                );
            })}
        </Grid>
    )
}