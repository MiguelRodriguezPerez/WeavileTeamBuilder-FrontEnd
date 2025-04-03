import { PokemonType } from "../../../../domain/enums";

export const assignTypeToPng = (type: PokemonType): string => {
    return `images/main/typeIcons/${type.toLowerCase()}.png`;

}