import { useEffect, useState } from "react";
import { Pagination, Stack, Typography } from "@mui/material";

import PokemonList from "../components/pokemo-list/PokemonList";
import QueryStateWrapper from "../../../components/QueryStateWrapper";
import PokemonSkeletonList from "../components/pokemo-list/PokemonSkeletonList";

import { usePokemonList } from "../hooks/usePokemonList";
import { POKEMON_LIMIT } from "../constant";

export default function PaginationView() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, refetch, isFetching, error, isFetched } = usePokemonList(page);

    const totalPages = data?.count ? Math.ceil(data.count / POKEMON_LIMIT) : 0;
    const results = data?.results || [];

    useEffect(() => {
        if (isFetched && page > 1) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [page, isFetched]);

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <>
            <QueryStateWrapper
                isLoading={isLoading || isFetching}
                isError={isError}
                error={error}
                onRetry={refetch}
                skeleton={<PokemonSkeletonList />}
            >
                <PokemonList list={results} />

            </QueryStateWrapper>

            {!isError && totalPages > 0 && (
                <Stack alignItems="center" justifyContent="center" spacing={1} sx={{ mt: 2 }}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                        sx={{
                            "& .MuiPagination-ul": {
                                justifyContent: "center",
                            },
                        }}
                        aria-label="Pokémon list pagination"
                    />

                    <Typography variant="body2">
                        Page {page} of {totalPages} ({results.length} shown)
                    </Typography>
                </Stack>
            )}
        </>
    );
}
