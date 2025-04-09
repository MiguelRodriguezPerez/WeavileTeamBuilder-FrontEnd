import { PokemonType } from "../domain/enums";

export const assignPokemonTypeToPng = (type: PokemonType): string => {
    return `images/main/pokemnTypeIcons/${type.toLowerCase()}.png`;
}