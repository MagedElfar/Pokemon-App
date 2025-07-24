import type { Components, Palette } from '@mui/material';
import { buttons } from './buttons';

export const createComponentOverrides = (palette: Palette): Components => ({
    ...buttons(palette),
    // add other component overrides here
});
