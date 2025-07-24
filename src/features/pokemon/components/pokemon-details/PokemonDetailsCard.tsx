import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import StraightenIcon from '@mui/icons-material/Straighten';
import ScaleIcon from '@mui/icons-material/Scale';
import type { PokemonDetails } from '../../../../types/pokemon';
import { getPokemonImageUrl } from '../../utils/extract';
import AbilityChips from './AbilityChips';
import StatBar from './StatBar';
import TypeChips from './TypeChips';

interface Props {
    pokemon: PokemonDetails
}

export default function PokemonDetailsCard({ pokemon }: Props) {
    const theme = useTheme();

    return (
        <Box sx={{ width: { md: "60%", xs: "100%" }, mx: "auto", borderRadius: 2, overflow: "hidden" }}>
            <Stack spacing={1} alignItems="center" justifyContent="center" bgcolor={theme.palette.brand.secondary} px={2} py={2}>
                <Typography textAlign="center" variant='h1' color="custom.light">
                    <ElectricBoltOutlinedIcon sx={{ color: "custom.light", mr: 1 }} />
                    {pokemon.name}
                </Typography>
                <Typography variant="body2" textAlign="center" color="custom.light"># {pokemon.id}</Typography>
            </Stack>

            <Box sx={{ background: theme.palette.custom.light, p: 2 }}>
                <Grid container spacing={3}>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <Stack alignItems="center" justifyContent="center" spacing={2} width="100%">
                            <Box
                                sx={{
                                    backgroundColor: theme.palette.custom.lighter,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: { md: "200px", sm: "150px", xs: "170px" },
                                    width: { md: "200px", sm: "150px", xs: "170px" },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={getPokemonImageUrl(pokemon.id)}
                                    alt={`${pokemon.name}-image`}
                                    loading="lazy"
                                    sx={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
                                />
                            </Box>

                            {pokemon.types.length > 0 && <TypeChips types={pokemon.types} />}

                            <Box display="flex" alignItems="center" justifyItems="center" gap={1.5} width="100%">
                                <Box flex={1} p={1} bgcolor={theme.palette.custom.lighter}>
                                    <Typography variant='body2' textAlign="center" borderRadius={4}>
                                        <StraightenIcon sx={{ transform: "rotate(45deg) translateY(10px)" }} /> Height
                                    </Typography>
                                    <Typography mt={1} variant='h4' textAlign="center">
                                        {pokemon.height} m
                                    </Typography>
                                </Box>

                                <Box flex={1} p={1} bgcolor={theme.palette.custom.lighter}>
                                    <Typography variant='body2' textAlign="center" borderRadius={4}>
                                        <ScaleIcon /> Weight
                                    </Typography>
                                    <Typography mt={1} variant='h4' textAlign="center">
                                        {pokemon.weight} kg
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid size={{ md: 6, xs: 12 }} >
                        <Stack spacing={2} width="100%">
                            {pokemon.stats?.length > 0 && (
                                <>
                                    <Typography variant='h4'>Base Stats</Typography>
                                    <Stack width="100%" gap={1}>
                                        {pokemon.stats.map((state) => (
                                            <StatBar
                                                key={state.stat.name}
                                                label={state.stat.name}
                                                value={state.base_stat || 0}
                                            />
                                        ))}
                                    </Stack>
                                </>
                            )}

                            {pokemon.abilities.length > 0 && (
                                <>
                                    <Typography variant='h4'>Abilities</Typography>
                                    <AbilityChips abilities={pokemon.abilities} />
                                </>
                            )}

                            {pokemon.base_experience && (
                                <Box>
                                    <Typography variant='h4' mb={1}>Base Experience</Typography>
                                    <Typography variant='h2' color='brand.accentPurple'>
                                        {pokemon.base_experience} XP
                                    </Typography>
                                </Box>
                            )}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
