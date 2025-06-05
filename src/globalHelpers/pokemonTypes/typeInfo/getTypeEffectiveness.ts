import { PokemonType } from "../../../domain/enums";

export function getTypeEffectiveness(type: PokemonType): PokemonType[];
export function getTypeEffectiveness(types: PokemonType[]): PokemonType[];

export function getTypeEffectiveness(typeOrTypes: PokemonType | PokemonType[]): PokemonType[] {
    
    const effectivenessMap: Partial<Record<PokemonType, PokemonType[]>> = {
        [PokemonType.FIRE]: [PokemonType.GRASS, PokemonType.ICE, PokemonType.BUG, PokemonType.STEEL],
        [PokemonType.WATER]: [PokemonType.FIRE, PokemonType.ROCK, PokemonType.GROUND],
        [PokemonType.GRASS]: [PokemonType.WATER, PokemonType.ROCK, PokemonType.GROUND],
        [PokemonType.ELECTRIC]: [PokemonType.WATER, PokemonType.FLYING],
        [PokemonType.PSYCHIC]: [PokemonType.FIGHTING, PokemonType.POISON],
        [PokemonType.ICE]: [PokemonType.GRASS, PokemonType.GROUND, PokemonType.FLYING, PokemonType.DRAGON],
        [PokemonType.DRAGON]: [PokemonType.DRAGON],
        [PokemonType.DARK]: [PokemonType.PSYCHIC, PokemonType.GHOST],
        [PokemonType.FAIRY]: [PokemonType.DRAGON, PokemonType.DARK, PokemonType.FIGHTING],
        [PokemonType.BUG]: [PokemonType.GRASS, PokemonType.PSYCHIC, PokemonType.DARK],
        [PokemonType.ROCK]: [PokemonType.FIRE, PokemonType.ICE, PokemonType.FLYING, PokemonType.BUG],
        [PokemonType.GHOST]: [PokemonType.PSYCHIC, PokemonType.GHOST],
        [PokemonType.NORMAL]: [],
        [PokemonType.FIGHTING]: [PokemonType.NORMAL, PokemonType.ROCK, PokemonType.STEEL, PokemonType.ICE, PokemonType.DARK],
        [PokemonType.POISON]: [PokemonType.GRASS, PokemonType.FAIRY],
        [PokemonType.GROUND]: [PokemonType.FIRE, PokemonType.ELECTRIC, PokemonType.POISON, PokemonType.ROCK, PokemonType.STEEL],
        [PokemonType.FLYING]: [PokemonType.GRASS, PokemonType.FIGHTING, PokemonType.BUG],
        [PokemonType.STEEL]: [PokemonType.ICE, PokemonType.ROCK, PokemonType.FAIRY],
    };

    if (Array.isArray(typeOrTypes)) {
        const allEffectives = typeOrTypes.flatMap(type => effectivenessMap[type] || []);
        return Array.from(new Set(allEffectives));
    } else return effectivenessMap[typeOrTypes] || [];
    
}
