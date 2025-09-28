import { MoveType, PokemonTypeEnum } from "../../../domain/enums";
import { PokemonTeamMember } from "../../../domain/teamMemberEntities";
import { getTypeInmunities, getTypeResistances } from "../typeInfo";
import { getPokemonTypeEnumFromEntity } from "./getPokemonTypeEnumFromEntity";


/* El objetivo de esta función es averiguar si todos los movimientos ofensivos de un pokemón
  son resistidos y/o inmunes por un tipo concreto */
export const getPokemonNonCoveredTypes = (member: PokemonTeamMember): PokemonTypeEnum[] => {
    let resistedTypes: PokemonTypeEnum[] = [];

    /* Cogemos todos los tipos resistidos o inmunes a dichos movimientos y los insertamos en un array */
    member.move_list.filter(move => move && move!.move_type !== MoveType.STATUS)
        .forEach(move => {
            resistedTypes.push(...getTypeResistances(
                getPokemonTypeEnumFromEntity(
                    move!.pokemon_type
                )
            ));
            resistedTypes.push(...getTypeInmunities(
                getPokemonTypeEnumFromEntity(
                    move!.pokemon_type
                )
            ));
        });

    /* Aquí viene lo dificil. Lo que hace esta variable es filtrar el array con todos los tipos,
    usando como criterio que al filtrar el mismo array con un tipo pokemón el array resultante 
    tenga length 4, es decir que el tipo se repita 4 veces en resistedTypes.
    
    La idea es almacenar en resultado los tipos que solo se repiten 4 veces (o el número de
    ataques ofensivos que tenga un pokemón) en resistedTypes,
    es decir los tipos pokemón que serían resistidos o inmunes por todos los movimientos del 
    pokemón seleccionado*/
    const resultado = resistedTypes.filter(firstFilter =>
        resistedTypes.filter(secondFilter => firstFilter === secondFilter).length
        === member.move_list.filter(move => move!.move_type !== MoveType.STATUS).length);

    /* Conviertelo a set para eliminar duplicados y devuelvelo como array */
    return Array.from(new Set(resultado));
}