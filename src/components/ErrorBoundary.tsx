import React, { type ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";

interface ErrorBoundaryProps {
    children: ReactNode;
    fallbackMessage?: string;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
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
                    <Typography variant="h5" gutterBottom>
                        {this.props.fallbackMessage || "Something went wrong."}
                    </Typography>
                    <Button variant="dark" onClick={this.handleRetry}>
                        Retry
                    </Button>
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
