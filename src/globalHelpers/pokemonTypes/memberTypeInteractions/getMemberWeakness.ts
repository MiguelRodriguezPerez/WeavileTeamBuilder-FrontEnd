import { PokemonType } from "../../../domain/enums";
import { getTypeInmunities, getTypeResistances, getTypeWeaknesses } from "../typeInfo";

/* No tiene en cuenta ni debilidades x4 ni resistencias 1/4 */

export const getMemberWeakness = ( typeArr: PokemonType[] ): PokemonType[]  => {
 
    if ( typeArr.length === 1 ) return getTypeWeaknesses(typeArr[0]);
    else {
        let resultado: PokemonType[] = [];

        typeArr.forEach(type => {
            resultado.push( ...getTypeWeaknesses(type) );
        });

        typeArr.forEach(type => {
            const currentTypeResistances: PokemonType[] = 
                [ ...getTypeResistances(type), ...getTypeInmunities(type)];

            resultado = resultado.filter( type => !currentTypeResistances.includes(type) )
        });

        return [...new Set(resultado)];
    }
 
}