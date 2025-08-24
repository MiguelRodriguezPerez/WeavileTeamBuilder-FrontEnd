import { PokemonType } from "../domain/enums";

export const assignPokemonTypeToPng = (type: PokemonType): string => {
    return `images/main/pokemonTypeIcons/${type.toLowerCase()}.png`;
}