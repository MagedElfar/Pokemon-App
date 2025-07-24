import { Box, Button, Fade, Stack, Typography, useTheme } from '@mui/material'
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Container from '../../../components/Container'
import { lazy, Suspense, useEffect, useState } from 'react'
import PokemonSkeletonList from '../components//pokemo-list/PokemonSkeletonList';

const PaginationView = lazy(() => import("./PaginationView"))
const ScrollView = lazy(() => import("./ScrollView"))

type View = "pagination" | "loadMore"

export default function PokemonListView() {
    const [view, setView] = useState<View>("pagination")
    const theme = useTheme()
    const [showScroll, setShowScroll] = useState(false)

    const handleView = (newView: View) => {
        if (newView === view) return
        setView(newView)
    }

    const CurrentView = view === "pagination" ? PaginationView : ScrollView

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <Box
            sx={{
                background: theme.palette.brand.main,
                minHeight: "100vh",
                position: "relative"
            }}
        >
            <Container>
                <Stack spacing={3} alignItems="center" justifyContent="center">
                    <Typography textAlign="center" variant='h1'>
                        <ElectricBoltOutlinedIcon sx={{ color: "#FFEB99", mr: 1 }} />
                        Pokémon
                    </Typography>
                    <Typography textAlign="center" variant="body2">
                        Discover and explore Pokemon with {view === "pagination" ? "page controls" : "infinite scroll"}
                    </Typography>
                    <Stack
                        direction={{ sm: "row", xs: "column" }}
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                        sx={{ width: { xs: "100%", sm: "fit-content" } }}
                    >
                        <Button
                            aria-pressed={view === "pagination"}
                            sx={{ minWidth: { sm: "120px", xs: "100%" } }}
                            onClick={() => handleView("pagination")}
                            variant={view === "pagination" ? "dark" : "light"}
                        >
                            Page controls
                        </Button>
                        <Button
                            aria-pressed={view === "loadMore"}
                            sx={{ minWidth: { sm: "120px", xs: "100%" } }}
                            variant={view === "loadMore" ? "dark" : "light"}
                            onClick={() => handleView("loadMore")}
                        >
                            Infinite scroll
                        </Button>
                    </Stack>

                    <Suspense fallback={<PokemonSkeletonList />}>
                        <CurrentView key={view} />
                    </Suspense>
                </Stack>
            </Container>

            {/* Scroll to top button */}
            <Fade in={showScroll}>
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 32,
                        right: 32,
                        zIndex: 1000
                    }}
                >
                    <Button
                        onClick={scrollToTop}
                        variant="dark"
                        size="small"
                        startIcon={<KeyboardArrowUpIcon />}
                        sx={{
                            borderRadius: "999px",
                            px: 2,
                            py: 1,
                            boxShadow: 4,
                        }}
                    >
                        Top
                    </Button>
                </Box>
            </Fade>
        </Box>
    )
}
