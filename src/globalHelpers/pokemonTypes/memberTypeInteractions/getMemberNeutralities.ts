import { PokemonType } from "../../../domain/enums";
import { getTypeInmunities, getTypeResistances, getTypeWeaknesses } from "../typeInfo";
import { getMemberInmunities, getMemberResistances, getMemberWeakness } from "./";


export const getMemberNeutralities = (typeArr: PokemonType[]) => {
 
    let resultado: PokemonType[] = Object.values(PokemonType);

    let tiposCombinados: PokemonType[] = [
        ...getMemberInmunities(typeArr),
        ...getMemberResistances(typeArr),
        ...getMemberWeakness(typeArr),
    ];

    resultado = resultado.filter(type => !tiposCombinados.includes(type));


    return [...new Set(resultado)];

}