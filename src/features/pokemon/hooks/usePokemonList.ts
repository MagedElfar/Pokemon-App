import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/getPokemonList";
import { POKEMON_LIST_QUERY_KEY } from "../constant";

export const usePokemonList = (page: number) => {
    return useQuery({
        queryKey: [POKEMON_LIST_QUERY_KEY, page],
        queryFn: () => getPokemonList(page),
        placeholderData: (previousData) => previousData,
    });
};