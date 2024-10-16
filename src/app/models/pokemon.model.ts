export interface Pokemon {
    readonly id: string;
    name: string;
    type: PokemonType;
    type2?: PokemonType;
    level: number;
    attack: string;
}

export type PokemonType = 
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy";

function isPokemon(maybePokemon: unknown): maybePokemon is Pokemon {
    return Boolean(maybePokemon && typeof maybePokemon === 'object'
        && 'id' in maybePokemon && typeof maybePokemon.id === 'string'
        && 'name' in maybePokemon && typeof maybePokemon.name === 'string'
        && 'type' in maybePokemon && typeof maybePokemon.type === 'string' && pokemonTypes.includes(maybePokemon.type)
        && (!('type2' in maybePokemon) || typeof maybePokemon.type2 === 'string' && pokemonTypes.includes(maybePokemon.type2))
        && 'attack' in maybePokemon && typeof maybePokemon.attack === 'string'
        && 'level' in maybePokemon && typeof maybePokemon.level === 'number'
    );
}

export function assertIsPokemon(value: unknown): asserts value is Pokemon {
    if (!isPokemon(value)) throw new Error('This is not a pokémon!');
}

export function assertIsPokemonArray(value: unknown): asserts value is Pokemon[] {
    if (!Array.isArray(value) || !value.every(isPokemon)) throw new Error('This is not a pokémon array!');
}

export const pokemonTypes: string[] = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
];
