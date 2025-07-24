import type { ReactNode } from "react"
import MUiContainer from '@mui/material/Container';
import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

interface Props {
    children: ReactNode,
    sx?: SxProps<Theme>
}

export default function Container({ children, sx }: Props) {
    return (
        <MUiContainer
            maxWidth="lg"
            sx={{
                py: 3,
                px: 3,
                ...sx

            }}
        >
            {children}
        </MUiContainer>
    )
}
