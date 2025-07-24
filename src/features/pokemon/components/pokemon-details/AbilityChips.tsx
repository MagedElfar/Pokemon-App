import { Box, Chip, Stack, Typography } from "@mui/material";
import type { PokemonDetails } from "../../../../types/pokemon";

export default function AbilityChips({ abilities }: { abilities: PokemonDetails['abilities'] }) {
    return (
        <Stack width="100%" gap={1}>
            {abilities.map((abilitie) => (
                <Box key={abilitie.ability.name} display="flex" gap={0.5} alignItems="center">
                    <Chip
                        label={abilitie.ability.name}
                        size="small"
                        variant={abilitie.is_hidden ? "filled" : "outlined"}
                        sx={{ textTransform: "capitalize" }}
                    />
                    {abilitie.is_hidden && <Typography variant="caption">(Hidden)</Typography>}
                </Box>
            ))}
        </Stack>
    );
}