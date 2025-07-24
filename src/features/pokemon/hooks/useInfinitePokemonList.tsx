import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/getPokemonList";
import { POKEMON_LIST_QUERY_KEY } from "../constant";

export const useInfinitePokemonList = () => {
    return useInfiniteQuery({
        queryKey: [POKEMON_LIST_QUERY_KEY],
        queryFn: ({ pageParam = 1 }) => getPokemonList(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const hasNext = Boolean(lastPage.next);
            if (!hasNext) return undefined;

            return allPages.length + 1; // لأن كل page = 1-based index
        },
        initialPageParam: 1,
    });
};
