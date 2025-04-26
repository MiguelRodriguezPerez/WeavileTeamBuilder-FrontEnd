import { PokemonType } from "../../../../domain/enums";


export const getTypeInmunities = (type: PokemonType): PokemonType[] => {
    switch (type) {
        case PokemonType.NORMAL:
            return [PokemonType.GHOST];
        case PokemonType.FLYING:
            return [PokemonType.GROUND];
        case PokemonType.GHOST:
            return [PokemonType.NORMAL, PokemonType.FIGHTING];
        case PokemonType.GROUND:
            return [PokemonType.ELECTRIC];
        case PokemonType.DARK:
            return [PokemonType.PSYCHIC];
        case PokemonType.FAIRY:
            return [PokemonType.DRAGON];
        case PokemonType.STEEL:
            return [PokemonType.POISON];
        default:
            return [];
    }
}
