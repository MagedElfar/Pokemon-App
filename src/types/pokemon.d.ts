// Represents a named API resource used throughout the PokéAPI.
export interface NamedAPIResource {
    name: string;
    url: string;
}

// Represents a single Pokémon type (e.g., fire, water).
export type PokemonType = {
    slot: number;
    type: NamedAPIResource;
};

// Represents the sprite/images returned by the API.
export type PokemonSprite = {
    front_default: number;
    other: {
        front_default: string;
        other?: {
            'official-artwork'?: {
                front_default?: string;
            };
        };
    };
};

export interface Stat {
    base_stat: number
    effort: number
    stat: NamedAPIResource
}


export interface Ability {
    ability: NamedAPIResource
    is_hidden: boolean
    slot: number
}


// Response from the Pokémon list endpoint
export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}

// Represents detailed data for a specific Pokémon
export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: PokemonSprite;
    types: PokemonType[];
    stats: Stat[],
    abilities: Ability[]
    base_experience: number
}
