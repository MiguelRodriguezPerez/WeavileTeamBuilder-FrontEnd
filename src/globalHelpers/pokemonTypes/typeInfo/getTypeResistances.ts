import { PokemonType } from "../../../domain/enums";

export function getTypeResistances(type: PokemonType): PokemonType[];
export function getTypeResistances(types: PokemonType[]): PokemonType[];

export function getTypeResistances(typeOrTypes: PokemonType | PokemonType[]): PokemonType[] {

  /* Parece muy complicado, pero es el equivalente de un HashMap en java.
  La clave es un tipo y sus valores son las resistencias de ese tipo */
  const resistanceMap: Record<PokemonType, PokemonType[]> = {

    [PokemonType.FIRE]: [PokemonType.FIRE, PokemonType.GRASS, PokemonType.ICE, PokemonType.BUG, PokemonType.STEEL, PokemonType.FAIRY],
    [PokemonType.WATER]: [PokemonType.FIRE, PokemonType.WATER, PokemonType.ICE, PokemonType.STEEL],
    [PokemonType.GRASS]: [PokemonType.WATER, PokemonType.ELECTRIC, PokemonType.GRASS, PokemonType.GROUND],
    [PokemonType.ELECTRIC]: [PokemonType.ELECTRIC, PokemonType.FLYING, PokemonType.STEEL],
    [PokemonType.PSYCHIC]: [PokemonType.FIGHTING, PokemonType.PSYCHIC],
    [PokemonType.ICE]: [PokemonType.ICE],
    [PokemonType.DRAGON]: [PokemonType.FIRE, PokemonType.WATER, PokemonType.ELECTRIC, PokemonType.GRASS],
    [PokemonType.DARK]: [PokemonType.GHOST, PokemonType.DARK],
    [PokemonType.FAIRY]: [PokemonType.FIGHTING, PokemonType.BUG, PokemonType.DARK],
    [PokemonType.BUG]: [PokemonType.GRASS, PokemonType.FIGHTING, PokemonType.GROUND],
    [PokemonType.ROCK]: [PokemonType.NORMAL, PokemonType.FIRE, PokemonType.POISON, PokemonType.FLYING],
    [PokemonType.GHOST]: [PokemonType.POISON, PokemonType.BUG],
    [PokemonType.NORMAL]: [],
    [PokemonType.FIGHTING]: [PokemonType.BUG, PokemonType.ROCK, PokemonType.DARK],
    [PokemonType.POISON]: [PokemonType.GRASS, PokemonType.FIGHTING, PokemonType.POISON, PokemonType.BUG, PokemonType.FAIRY],
    [PokemonType.GROUND]: [PokemonType.POISON, PokemonType.ROCK],
    [PokemonType.FLYING]: [PokemonType.GRASS, PokemonType.FIGHTING, PokemonType.BUG],
    [PokemonType.STEEL]: [PokemonType.NORMAL, PokemonType.GRASS, PokemonType.ICE, PokemonType.FLYING, PokemonType.PSYCHIC, PokemonType.BUG, PokemonType.ROCK, PokemonType.DRAGON, PokemonType.STEEL, PokemonType.FAIRY],
    

  };

  if(Array.isArray(typeOrTypes)) {
    const resultado = typeOrTypes.flatMap(type => resistanceMap[type]);
    return Array.from(resultado);
  }
  else return resistanceMap[typeOrTypes] || [];

}