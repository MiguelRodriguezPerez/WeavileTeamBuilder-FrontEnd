import { PokemonTypeEnum } from "../domain/enums";

export const assignPokemonTypeEnumToPng = (type: PokemonTypeEnum): string => {

    return `images/main/pokemonTypeIcons/${type.toLowerCase()}.png`;
}