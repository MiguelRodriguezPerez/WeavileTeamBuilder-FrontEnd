import { PokemonTypeEnum } from "../../../domain/enums";

export function getTypeInmunities(type: PokemonTypeEnum): PokemonTypeEnum[];
export function getTypeInmunities(types: PokemonTypeEnum[]): PokemonTypeEnum[];

export function getTypeInmunities(typeOrTypes: PokemonTypeEnum | PokemonTypeEnum[]): PokemonTypeEnum[] {

    /* Record exige todos los posibles valores de PokemonType. Partial<Record<PokemonType, PokemonType[]>>
    impide que sea obligatorio declarar todos los tipos */
    const inmunityMap: Partial<Record<PokemonTypeEnum, PokemonTypeEnum[]>> = {
        [PokemonTypeEnum.NORMAL]: [PokemonTypeEnum.GHOST],
        [PokemonTypeEnum.FLYING]: [PokemonTypeEnum.GROUND],
        [PokemonTypeEnum.GHOST]: [PokemonTypeEnum.NORMAL, PokemonTypeEnum.FIGHTING],
        [PokemonTypeEnum.GROUND]: [PokemonTypeEnum.ELECTRIC],
        [PokemonTypeEnum.DARK]: [PokemonTypeEnum.PSYCHIC],
        [PokemonTypeEnum.FAIRY]: [PokemonTypeEnum.DRAGON],
        [PokemonTypeEnum.STEEL]: [PokemonTypeEnum.POISON],
    };

    if (Array.isArray(typeOrTypes)) {
        const allInmunities = typeOrTypes.flatMap(type => inmunityMap[type] || []);
        return Array.from(new Set(allInmunities));
    } else return inmunityMap[typeOrTypes] || [];

}