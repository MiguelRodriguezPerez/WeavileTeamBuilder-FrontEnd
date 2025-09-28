import { PokemonTypeEnum } from "../../../domain/enums";

export function getTypeResistances(type: PokemonTypeEnum): PokemonTypeEnum[];
export function getTypeResistances(types: PokemonTypeEnum[]): PokemonTypeEnum[];

export function getTypeResistances(typeOrTypes: PokemonTypeEnum | PokemonTypeEnum[]): PokemonTypeEnum[] {

  /* Parece muy complicado, pero es el equivalente de un HashMap en java.
  La clave es un tipo y sus valores son las resistencias de ese tipo */
  const resistanceMap: Record<PokemonTypeEnum, PokemonTypeEnum[]> = {

    [PokemonTypeEnum.FIRE]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.GRASS, PokemonTypeEnum.ICE, PokemonTypeEnum.BUG, PokemonTypeEnum.STEEL, PokemonTypeEnum.FAIRY],
    [PokemonTypeEnum.WATER]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.WATER, PokemonTypeEnum.ICE, PokemonTypeEnum.STEEL],
    [PokemonTypeEnum.GRASS]: [PokemonTypeEnum.WATER, PokemonTypeEnum.ELECTRIC, PokemonTypeEnum.GRASS, PokemonTypeEnum.GROUND],
    [PokemonTypeEnum.ELECTRIC]: [PokemonTypeEnum.ELECTRIC, PokemonTypeEnum.FLYING, PokemonTypeEnum.STEEL],
    [PokemonTypeEnum.PSYCHIC]: [PokemonTypeEnum.FIGHTING, PokemonTypeEnum.PSYCHIC],
    [PokemonTypeEnum.ICE]: [PokemonTypeEnum.ICE],
    [PokemonTypeEnum.DRAGON]: [PokemonTypeEnum.FIRE, PokemonTypeEnum.WATER, PokemonTypeEnum.ELECTRIC, PokemonTypeEnum.GRASS],
    [PokemonTypeEnum.DARK]: [PokemonTypeEnum.GHOST, PokemonTypeEnum.DARK],
    [PokemonTypeEnum.FAIRY]: [PokemonTypeEnum.FIGHTING, PokemonTypeEnum.BUG, PokemonTypeEnum.DARK],
    [PokemonTypeEnum.BUG]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.FIGHTING, PokemonTypeEnum.GROUND],
    [PokemonTypeEnum.ROCK]: [PokemonTypeEnum.NORMAL, PokemonTypeEnum.FIRE, PokemonTypeEnum.POISON, PokemonTypeEnum.FLYING],
    [PokemonTypeEnum.GHOST]: [PokemonTypeEnum.POISON, PokemonTypeEnum.BUG],
    [PokemonTypeEnum.NORMAL]: [],
    [PokemonTypeEnum.FIGHTING]: [PokemonTypeEnum.BUG, PokemonTypeEnum.ROCK, PokemonTypeEnum.DARK],
    [PokemonTypeEnum.POISON]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.FIGHTING, PokemonTypeEnum.POISON, PokemonTypeEnum.BUG, PokemonTypeEnum.FAIRY],
    [PokemonTypeEnum.GROUND]: [PokemonTypeEnum.POISON, PokemonTypeEnum.ROCK],
    [PokemonTypeEnum.FLYING]: [PokemonTypeEnum.GRASS, PokemonTypeEnum.FIGHTING, PokemonTypeEnum.BUG],
    [PokemonTypeEnum.STEEL]: [PokemonTypeEnum.NORMAL, PokemonTypeEnum.GRASS, PokemonTypeEnum.ICE, PokemonTypeEnum.FLYING, PokemonTypeEnum.PSYCHIC, PokemonTypeEnum.BUG, PokemonTypeEnum.ROCK, PokemonTypeEnum.DRAGON, PokemonTypeEnum.STEEL, PokemonTypeEnum.FAIRY],


  };

  if (Array.isArray(typeOrTypes)) {
    const resultado = typeOrTypes.flatMap(type => resistanceMap[type]);
    return Array.from(resultado);
  }
  else return resistanceMap[typeOrTypes] || [];

}