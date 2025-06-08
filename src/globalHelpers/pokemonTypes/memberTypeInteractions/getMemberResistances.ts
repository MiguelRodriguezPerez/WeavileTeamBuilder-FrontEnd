import { PokemonType } from "../../../domain/enums";
import { getTypeResistances, getTypeWeaknesses } from "../typeInfo";

export const getMemberResistances = ( typeArr: PokemonType[] ): PokemonType[]  => {
 
    if ( typeArr.length === 1 ) return getTypeResistances( typeArr[0] );
    else {
        let weaknessList: PokemonType[] = [];
        let resistancesList: PokemonType[] = [];

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