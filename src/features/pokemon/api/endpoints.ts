import { POKEMON_LIMIT } from "../constant"

const rootUrl = `/v2/pokemon`

export const endpoints = {
    root: rootUrl,
    list: (offset: number, limit: number = POKEMON_LIMIT) => `${rootUrl}?limit=${limit}&offset=${offset}`,
    id: (id: string) => `${rootUrl}/${id}}`,
}