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