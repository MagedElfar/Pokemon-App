import { CircularProgress, Stack, Typography } from "@mui/material";
import PokemonList from "../components/pokemo-list/PokemonList";
import { useInfinitePokemonList } from "../hooks/useInfinitePokemonList";
import QueryStateWrapper from "../../../components/QueryStateWrapper";
import PokemonSkeletonList from "../components/pokemo-list/PokemonSkeletonList";
import { useEffect, useRef } from "react";

export default function ScrollView() {
    const {
        data,
        isLoading,
        isError,
        refetch,
        isFetching,
        error,
        hasNextPage,
        fetchNextPage,
    } = useInfinitePokemonList();

    const list = data?.pages.flatMap((page) => page.results) || [];

    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!hasNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isFetching) {
                    fetchNextPage();
                }
            },
            {
                rootMargin: "100px",
            }
        );

        const current = observerRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
            observer.disconnect();
        };
    }, [hasNextPage, isFetching, fetchNextPage]);

    return (
        <>
            <QueryStateWrapper
                isLoading={isLoading}
                isError={isError}
                error={error}
                onRetry={refetch}
                skeleton={<PokemonSkeletonList />}
            >
                <PokemonList list={list} />
            </QueryStateWrapper>

            {!isError && (
                <Stack alignItems="center" justifyContent="center" spacing={2}>
                    <div ref={observerRef} style={{ height: "1px", opacity: 0 }} />

                    {isFetching && (
                        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <CircularProgress color="success" size={20} sx={{ mr: 0.5 }} />
                            Loading more Pokémon...
                        </Typography>
                    )}

                    <Typography variant="body2">
                        Showing {list.length} Pokémon
                    </Typography>
                </Stack>
            )}
        </>
    );
}
