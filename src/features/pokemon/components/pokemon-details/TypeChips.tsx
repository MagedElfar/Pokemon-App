import { Stack, Chip } from "@mui/material";
import type { PokemonDetails } from "../../../../types/pokemon";

export default function TypeChips({ types }: { types: PokemonDetails['types'] }) {
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" flexWrap="wrap" gap={1}>
            {types.map((t) => (
                <Chip
                    label={t.type.name}
                    key={t.type.name}
                    size="small"
                    color="error"
                    sx={{ px: 1, textTransform: "capitalize" }}
                />
            ))}
        </Stack>
    );
}
