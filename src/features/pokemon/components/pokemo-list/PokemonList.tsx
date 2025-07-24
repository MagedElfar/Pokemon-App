import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import paths from "../../../../routes/paths";
import type { NamedAPIResource } from "../../../../types/pokemon";
import { getPokemonIdFromUrl, getPokemonImageUrl } from "../../utils/extract";
import PokemonCard from "./PokemonCard";


interface Props {
    list: NamedAPIResource[],
}

export default function PokemonList({ list }: Props) {

    if (list.filter(item => item !== undefined).length === 0)
        return <Box
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
            <Typography variant="h5" gutterBottom>
                No Pokémon found.
            </Typography>

        </Box>
    return (

        < Grid width="100%" container spacing={3} justifyContent="center" >
            {
                list.map((poke) => {
                    const { name, url } = poke
                    const id = getPokemonIdFromUrl(url);
                    const imageUrl = getPokemonImageUrl(id);
                    return (
                        <Grid size={{ md: 3, sm: 6, xs: 12 }} key={name}>
                            <Link to={paths.details(id)}>
                                <PokemonCard name={poke.name} imageUrl={imageUrl} id={id} />
                            </Link>
                        </Grid>
                    );
                })
            }
        </Grid >


    )
}