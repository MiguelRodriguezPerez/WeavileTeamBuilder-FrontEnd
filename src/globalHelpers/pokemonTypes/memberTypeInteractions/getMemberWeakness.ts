import { PokemonType } from "../../../domain/dataEntities/PokemonType";
import { PokemonTypeEnum } from "../../../domain/enums";
import { getTypeInmunities, getTypeResistances, getTypeWeaknesses } from "../typeInfo";
import { getPokemonTypeEnumFromEntity } from '../memberTypeCoverage/getPokemonTypeEnumFromEntity';

/* No tiene en cuenta ni debilidades x4 ni resistencias 1/4 */

export const getMemberWeakness = (entityTypeArr: PokemonType[]): PokemonTypeEnum[] => {

    let typeArr = entityTypeArr.map(type => getPokemonTypeEnumFromEntity(type));    

    if (typeArr.length === 1) return getTypeWeaknesses(typeArr[0]);
    else {
        let resultado: PokemonTypeEnum[] = [];

        typeArr.forEach(type => {
            resultado.push(...getTypeWeaknesses(type));
        });

        typeArr.forEach(type => {
            const currentTypeResistances: PokemonTypeEnum[] =
                [...getTypeResistances(type), ...getTypeInmunities(type)];

            resultado = resultado.filter(type => !currentTypeResistances.includes(type))
        });
        

        return [...new Set(resultado)];
    }

}