import { PokemonType } from "../../../domain/dataEntities/PokemonType";
import { PokemonTypeEnum } from "../../../domain/enums";
import { getPokemonTypeEnumFromEntity } from "../memberTypeCoverage";
import { getTypeResistances, getTypeWeaknesses } from "../typeInfo";

export const getMemberResistances = (entityTypeArr: PokemonType[]): PokemonTypeEnum[] => {
    let typeArr = entityTypeArr.map(type => getPokemonTypeEnumFromEntity(type));

    if (typeArr.length === 1) return getTypeResistances(typeArr[0]);
    else {
        let weaknessList: PokemonTypeEnum[] = [];
        let resistancesList: PokemonTypeEnum[] = [];

        typeArr.forEach(type => {
            resistancesList = [
                ...resistancesList,
                ...getTypeResistances(type)
            ]

            weaknessList = [
                ...weaknessList,
                ...getTypeWeaknesses(type)
            ]
        });

        resistancesList = resistancesList.filter(resistanceType => !weaknessList.includes(resistanceType))

        return [...new Set(resistancesList)];
    }

}