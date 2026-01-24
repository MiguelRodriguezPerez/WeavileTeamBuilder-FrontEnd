import { PokemonType } from './../../../domain/dataEntities/PokemonType';
import { PokemonTypeEnum } from "../../../domain/enums"

export const getPokemonTypeEnumFromEntity = (entityType: PokemonType): PokemonTypeEnum => {
    return PokemonTypeEnum[entityType.name.toUpperCase() as keyof typeof PokemonTypeEnum];
}