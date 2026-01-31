import { PokemonType } from "../domain/dataEntities/PokemonType";

export const assignPokemonTypeToPng = (type: PokemonType): string => {
    return `images/main/pokemonTypeIcons/${type.name.toLowerCase()}.png`;
}