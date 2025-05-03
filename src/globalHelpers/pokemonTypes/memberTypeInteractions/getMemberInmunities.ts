import { PokemonType } from "../../../domain/enums";
import { getTypeInmunities } from "../typeInfo";

export const getMemberInmunities = ( typeArr: PokemonType[] ): PokemonType[] => {
    let resultado: PokemonType[] = [];

    typeArr.forEach(type => {
        resultado.push( ...getTypeInmunities(type) );
    });

    return resultado;
 
}