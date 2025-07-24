import { get } from "../../../api/request";
import type { PokemonListResponse } from "../../../types/pokemon";
import { POKEMON_LIMIT } from "../constant";
import { endpoints } from "./endpoints";

export const getPokemonList = async (page: number, limit: number = POKEMON_LIMIT) => {
    const offset = (page - 1) * limit;
    return await get<PokemonListResponse>(endpoints.root, {
        params: {
            limit,
            offset
        }
    })
}