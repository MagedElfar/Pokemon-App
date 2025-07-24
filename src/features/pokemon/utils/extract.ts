export const getPokemonIdFromUrl = (url: string): string => {
    const segments = url.split("/").filter(Boolean);
    return segments[segments.length - 1];
};

export const getPokemonImageUrl = (id: string | number): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};
