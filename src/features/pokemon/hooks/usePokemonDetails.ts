import { useQuery } from "@tanstack/react-query";
import { POKEMON_DETAILS_QUERY_KEY } from "../constant";
import { getPokemonDetails } from "../api/getPokemonDetails";

export const usePokemonDetails = (id: string) => {
    return useQuery({
        queryKey: [POKEMON_DETAILS_QUERY_KEY, id],
        queryFn: () => getPokemonDetails(id),
        placeholderData: (previousData) => previousData,
    });
};