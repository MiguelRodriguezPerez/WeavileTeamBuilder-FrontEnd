import { PokemonType } from "../../../domain/dataEntities/PokemonType";
import { PokemonTypeEnum } from "../../../domain/enums";
import { getPokemonTypeEnumFromEntity } from "../memberTypeCoverage";
import { getTypeInmunities } from "../typeInfo";

export const getMemberInmunities = (entityTypeArr: PokemonType[]): PokemonTypeEnum[] => {
    let resultado: PokemonTypeEnum[] = [];

    let typeArr = entityTypeArr.map(type => getPokemonTypeEnumFromEntity(type));

    typeArr.forEach(type => {
        resultado.push(...getTypeInmunities(type));
    });

    return [...new Set(resultado)];

}