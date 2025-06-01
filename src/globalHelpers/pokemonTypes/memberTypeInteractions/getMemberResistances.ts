import { PokemonType } from "../../../domain/enums";
import { getTypeResistances, getTypeWeaknesses } from "../typeInfo";

export const getMemberResistances = ( typeArr: PokemonType[] ): PokemonType[]  => {
 
    if ( typeArr.length === 1 ) return getTypeResistances( typeArr[0] );
    else {
        let resultado: PokemonType[] = [];

        typeArr.forEach(type => {
            resultado.push(...getTypeResistances(type));
        });

        typeArr.forEach(type => {
            /* Te podrías haber ahorrado esta variable, pero sería muy confuso de entender */
            const currentTypeWeakness: PokemonType[] = getTypeWeaknesses(type);
            resultado = resultado.filter( type1 => !currentTypeWeakness.includes(type1));
        });

        return [...new Set(resultado)];
    }
 
}