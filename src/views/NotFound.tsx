import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import paths from "../routes/paths";
import Container from "../components/Container";


export default function NotFount() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(paths.root);
    };

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
        >
            <Box
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
                <Typography variant="h4">
                    No Pokémon found.
                </Typography>


                <Button
                    variant="dark"
                    onClick={() => handleBack()}
                    sx={{ px: 4, py: 1.5, borderRadius: 2, boxShadow: 2 }}
                >
                    Back to pokemon list
                </Button>
            </Box>
        </Container>
    );
}
