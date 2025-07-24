import { getById } from "../../../api/request";
import type { PokemonDetails } from "../../../types/pokemon";
import { endpoints } from "./endpoints";

export const getPokemonDetails = (id: string) => getById<PokemonDetails>(endpoints.root, id)