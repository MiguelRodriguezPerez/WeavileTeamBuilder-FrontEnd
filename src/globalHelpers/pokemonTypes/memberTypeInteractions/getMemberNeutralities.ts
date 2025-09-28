import { PokemonType } from "../../../domain/dataEntities/PokemonType";
import { PokemonTypeEnum } from "../../../domain/enums";
import { getPokemonTypeEnumFromEntity } from "../memberTypeCoverage";
import { getMemberInmunities, getMemberResistances, getMemberWeakness } from "./";


export const getMemberNeutralities = (entityTypeArr: PokemonType[]) => {


    let resultado: PokemonTypeEnum[] = Object.values(PokemonTypeEnum);

    let tiposCombinados: PokemonTypeEnum[] = [
        ...getMemberInmunities(entityTypeArr),
        ...getMemberResistances(entityTypeArr),
        ...getMemberWeakness(entityTypeArr),
    ];

    resultado = resultado.filter(type => !tiposCombinados.includes(type));


    return [...new Set(resultado)];

}