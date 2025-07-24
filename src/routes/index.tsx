import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import paths from "./paths";
import PokemonListView from "../features/pokemon/views/PokemonListView";
import PokemonDetailsView from "../features/pokemon/views/PokemonDetailsView";
import NotFount from "../views/NotFound";

export const router = createBrowserRouter([
    {
        path: paths.root,
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <PokemonListView />,
            },
            {
                path: ":id",
                element: <PokemonDetailsView />,
            },
            {
                path: "*",
                element: <NotFount />,
            }
        ]
    }
])