import { PokemonType } from "../../../domain/enums";
import { getTypeInmunities, getTypeResistances, getTypeWeaknesses } from "../typeInfo";

export const getMemberNeutralities = (typeArr: PokemonType[]) => {
 
    let resultado: PokemonType[] = Object.values(typeArr);

    for (let index = 0; index < typeArr.length; index++) {
        resultado = resultado.filter(type => !getTypeWeaknesses(typeArr[index]).includes(type) );
        resultado = resultado.filter(type => !getTypeResistances(typeArr[index]).includes(type) );
        resultado = resultado.filter(type => !getTypeInmunities(typeArr[index]).includes(type) );
    }

    return resultado;

}