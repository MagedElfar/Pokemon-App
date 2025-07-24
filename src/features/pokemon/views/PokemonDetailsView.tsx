import { Box, Button, useTheme } from '@mui/material'
import Container from '../../../components/Container'
import { useNavigate, useParams } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import PokemonDetailsCard from '../components/pokemon-details/PokemonDetailsCard';
import PokemonDetailsSkeleton from '../components/pokemon-details/PokemonDetailsSkeleton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import paths from '../../../routes/paths';
import QueryStateWrapper from '../../../components/QueryStateWrapper';

export default function PokemonDetailsView() {

    const { id } = useParams()
    const { data, isLoading, isError, error, refetch } = usePokemonDetails(id!)
    const theme = useTheme()
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(paths.root);
    };

    return (
        <Box
            sx={{
                background: theme.palette.brand.accentLight,
                minHeight: "100vh"
            }}
        >
            <Container>

                <Button
                    onClick={handleBack}
                    startIcon={<KeyboardBackspaceIcon />}
                    variant="light"
                    sx={{
                        mb: { md: 5, xs: 3 }
                    }}
                >
                    Back to list
                </Button>

                <QueryStateWrapper
                    isLoading={isLoading}
                    isError={isError}
                    error={error}
                    onRetry={() => refetch()}
                    skeleton={<PokemonDetailsSkeleton />}
                >
                    <PokemonDetailsCard pokemon={data!} />
                </QueryStateWrapper>
            </Container>
        </Box>
    )
}
