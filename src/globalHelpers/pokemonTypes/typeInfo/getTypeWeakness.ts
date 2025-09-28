import { PokemonTypeEnum } from "../../../domain/enums";

export function getTypeWeaknesses(type: PokemonTypeEnum): PokemonTypeEnum[];
export function getTypeWeaknesses(types: PokemonTypeEnum[]): PokemonTypeEnum[];

export function getTypeWeaknesses(typeOrTypes: PokemonTypeEnum | PokemonTypeEnum[]): PokemonTypeEnum[] {

    const weaknessMap: Record<PokemonTypeEnum, PokemonTypeEnum[]> = {
        [PokemonTypeEnum.FIRE]: [PokemonTypeEnum.WATER, PokemonTypeEnum.ROCK, PokemonTypeEnum.GROUND],
        [PokemonTypeEnum.WATER]: [PokemonTypeEnum.ELECTRIC, PokemonTypeEnum.GRASS],
        [PokemonTypeEnum.GRASS]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.ICE, PokemonTypeEnum.POISON, PokemonTypeEnum.FLYING, PokemonTypeEnum.BUG],
        [PokemonTypeEnum.ELECTRIC]: [PokemonTypeEnum.GROUND],
        [PokemonTypeEnum.PSYCHIC]: [PokemonTypeEnum.BUG, PokemonTypeEnum.GHOST, PokemonTypeEnum.DARK],
        [PokemonTypeEnum.ICE]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.FIGHTING, PokemonTypeEnum.ROCK, PokemonTypeEnum.STEEL],
        [PokemonTypeEnum.DRAGON]: [PokemonTypeEnum.ICE, PokemonTypeEnum.DRAGON, PokemonTypeEnum.FAIRY],
        [PokemonTypeEnum.DARK]: [PokemonTypeEnum.FIGHTING, PokemonTypeEnum.BUG, PokemonTypeEnum.FAIRY],
        [PokemonTypeEnum.FAIRY]: [PokemonTypeEnum.POISON, PokemonTypeEnum.STEEL],
        [PokemonTypeEnum.BUG]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.FLYING, PokemonTypeEnum.ROCK],
        [PokemonTypeEnum.ROCK]: [PokemonTypeEnum.WATER, PokemonTypeEnum.GRASS, PokemonTypeEnum.FIGHTING, PokemonTypeEnum.GROUND, PokemonTypeEnum.STEEL],
        [PokemonTypeEnum.GHOST]: [PokemonTypeEnum.GHOST, PokemonTypeEnum.DARK],
        [PokemonTypeEnum.NORMAL]: [PokemonTypeEnum.FIGHTING],
        [PokemonTypeEnum.FIGHTING]: [PokemonTypeEnum.FLYING, PokemonTypeEnum.PSYCHIC, PokemonTypeEnum.FAIRY],
        [PokemonTypeEnum.POISON]: [PokemonTypeEnum.GROUND, PokemonTypeEnum.PSYCHIC],
        [PokemonTypeEnum.GROUND]: [PokemonTypeEnum.WATER, PokemonTypeEnum.GRASS, PokemonTypeEnum.ICE],
        [PokemonTypeEnum.FLYING]: [PokemonTypeEnum.ELECTRIC, PokemonTypeEnum.ICE, PokemonTypeEnum.ROCK],
        [PokemonTypeEnum.STEEL]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.FIGHTING, PokemonTypeEnum.GROUND],
    };

    if (Array.isArray(typeOrTypes)) {
        const allWeaknesses = typeOrTypes.flatMap(type => weaknessMap[type] || []);
        return Array.from(new Set(allWeaknesses));
    }
    else return weaknessMap[typeOrTypes] || [];

}
