import { PokemonTypeEnum } from "../../../domain/enums";

export function getTypeEffectiveness(type: PokemonTypeEnum): PokemonTypeEnum[];
export function getTypeEffectiveness(types: PokemonTypeEnum[]): PokemonTypeEnum[];

export function getTypeEffectiveness(typeOrTypes: PokemonTypeEnum | PokemonTypeEnum[]): PokemonTypeEnum[] {

    const effectivenessMap: Partial<Record<PokemonTypeEnum, PokemonTypeEnum[]>> = {
        [PokemonTypeEnum.FIRE]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.ICE, PokemonTypeEnum.BUG, PokemonTypeEnum.STEEL],
        [PokemonTypeEnum.WATER]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.ROCK, PokemonTypeEnum.GROUND],
        [PokemonTypeEnum.GRASS]: [PokemonTypeEnum.WATER, PokemonTypeEnum.ROCK, PokemonTypeEnum.GROUND],
        [PokemonTypeEnum.ELECTRIC]: [PokemonTypeEnum.WATER, PokemonTypeEnum.FLYING],
        [PokemonTypeEnum.PSYCHIC]: [PokemonTypeEnum.FIGHTING, PokemonTypeEnum.POISON],
        [PokemonTypeEnum.ICE]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.GROUND, PokemonTypeEnum.FLYING, PokemonTypeEnum.DRAGON],
        [PokemonTypeEnum.DRAGON]: [PokemonTypeEnum.DRAGON],
        [PokemonTypeEnum.DARK]: [PokemonTypeEnum.PSYCHIC, PokemonTypeEnum.GHOST],
        [PokemonTypeEnum.FAIRY]: [PokemonTypeEnum.DRAGON, PokemonTypeEnum.DARK, PokemonTypeEnum.FIGHTING],
        [PokemonTypeEnum.BUG]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.PSYCHIC, PokemonTypeEnum.DARK],
        [PokemonTypeEnum.ROCK]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.ICE, PokemonTypeEnum.FLYING, PokemonTypeEnum.BUG],
        [PokemonTypeEnum.GHOST]: [PokemonTypeEnum.PSYCHIC, PokemonTypeEnum.GHOST],
        [PokemonTypeEnum.NORMAL]: [],
        [PokemonTypeEnum.FIGHTING]: [PokemonTypeEnum.NORMAL, PokemonTypeEnum.ROCK, PokemonTypeEnum.STEEL, PokemonTypeEnum.ICE, PokemonTypeEnum.DARK],
        [PokemonTypeEnum.POISON]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.FAIRY],
        [PokemonTypeEnum.GROUND]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.ELECTRIC, PokemonTypeEnum.POISON, PokemonTypeEnum.ROCK, PokemonTypeEnum.STEEL],
        [PokemonTypeEnum.FLYING]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.FIGHTING, PokemonTypeEnum.BUG],
        [PokemonTypeEnum.STEEL]: [PokemonTypeEnum.ICE, PokemonTypeEnum.ROCK, PokemonTypeEnum.FAIRY],
    };

    if (Array.isArray(typeOrTypes)) {
        const allEffectives = typeOrTypes.flatMap(type => effectivenessMap[type] || []);
        return Array.from(new Set(allEffectives));
    } else return effectivenessMap[typeOrTypes] || [];

}
