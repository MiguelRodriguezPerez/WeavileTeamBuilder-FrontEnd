import { PokemonType } from "../../../domain/enums";

export function getTypeWeaknesses(type: PokemonType): PokemonType[];
export function getTypeWeaknesses(types: PokemonType[]): PokemonType[];

export function getTypeWeaknesses(typeOrTypes: PokemonType | PokemonType[]): PokemonType[] {

    const weaknessMap: Record<PokemonType, PokemonType[]> = {
        [PokemonType.FIRE]: [PokemonType.WATER, PokemonType.ROCK, PokemonType.GROUND],
        [PokemonType.WATER]: [PokemonType.ELECTRIC, PokemonType.GRASS],
        [PokemonType.GRASS]: [PokemonType.FIRE, PokemonType.ICE, PokemonType.POISON, PokemonType.FLYING, PokemonType.BUG],
        [PokemonType.ELECTRIC]: [PokemonType.GROUND],
        [PokemonType.PSYCHIC]: [PokemonType.BUG, PokemonType.GHOST, PokemonType.DARK],
        [PokemonType.ICE]: [PokemonType.FIRE, PokemonType.FIGHTING, PokemonType.ROCK, PokemonType.STEEL],
        [PokemonType.DRAGON]: [PokemonType.ICE, PokemonType.DRAGON, PokemonType.FAIRY],
        [PokemonType.DARK]: [PokemonType.FIGHTING, PokemonType.BUG, PokemonType.FAIRY],
        [PokemonType.FAIRY]: [PokemonType.POISON, PokemonType.STEEL],
        [PokemonType.BUG]: [PokemonType.FIRE, PokemonType.FLYING, PokemonType.ROCK],
        [PokemonType.ROCK]: [PokemonType.WATER, PokemonType.GRASS, PokemonType.FIGHTING, PokemonType.GROUND, PokemonType.STEEL],
        [PokemonType.GHOST]: [PokemonType.GHOST, PokemonType.DARK],
        [PokemonType.NORMAL]: [PokemonType.FIGHTING],
        [PokemonType.FIGHTING]: [PokemonType.FLYING, PokemonType.PSYCHIC, PokemonType.FAIRY],
        [PokemonType.POISON]: [PokemonType.GROUND, PokemonType.PSYCHIC],
        [PokemonType.GROUND]: [PokemonType.WATER, PokemonType.GRASS, PokemonType.ICE],
        [PokemonType.FLYING]: [PokemonType.ELECTRIC, PokemonType.ICE, PokemonType.ROCK],
        [PokemonType.STEEL]: [PokemonType.FIRE, PokemonType.FIGHTING, PokemonType.GROUND],
    };

    if (Array.isArray(typeOrTypes)) {
        const allWeaknesses = typeOrTypes.flatMap(type => weaknessMap[type] || []);
        return Array.from(new Set(allWeaknesses));
    } 
    else return weaknessMap[typeOrTypes] || [];
    
}
