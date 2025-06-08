import { PokemonType } from "../../../domain/enums";

export function getTypeInmunities(type: PokemonType): PokemonType[];
export function getTypeInmunities(types: PokemonType[]): PokemonType[];

export function getTypeInmunities(typeOrTypes: PokemonType | PokemonType[]): PokemonType[] {
    
    /* Record exige todos los posibles valores de PokemonType. Partial<Record<PokemonType, PokemonType[]>>
    impide que sea obligatorio declarar todos los tipos */
    const inmunityMap: Partial<Record<PokemonType, PokemonType[]>> = {
        [PokemonType.NORMAL]: [PokemonType.GHOST],
        [PokemonType.FLYING]: [PokemonType.GROUND],
        [PokemonType.GHOST]: [PokemonType.NORMAL, PokemonType.FIGHTING],
        [PokemonType.GROUND]: [PokemonType.ELECTRIC],
        [PokemonType.DARK]: [PokemonType.PSYCHIC],
        [PokemonType.FAIRY]: [PokemonType.DRAGON],
        [PokemonType.STEEL]: [PokemonType.POISON],
    };

    if (Array.isArray(typeOrTypes)) {
        const allInmunities = typeOrTypes.flatMap(type => inmunityMap[type] || []);
        return Array.from(new Set(allInmunities));
    } else return inmunityMap[typeOrTypes] || [];
    
}