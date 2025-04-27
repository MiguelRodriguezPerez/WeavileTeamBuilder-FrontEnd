import { MoveType, PokemonType } from "../../../../domain/enums";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { getTypeEffectiveness, getTypeInmunities, getTypeResistances } from "../../helpers/typeCoverageTable";

export const useTypeCoverageTable = () => {

    const { move_list }= useWeavileStore(state => state.selectedPokemonMember!);

    const getPokemonCoveredTypes = (): PokemonType[] => {
        let resultado: PokemonType[] = [];

        move_list!.filter(move => move!.move_type !== MoveType.STATUS)
           .forEach(move => {
               resultado.push(...getTypeEffectiveness(move!.pokemon_type));
           });

        return Array.from( new Set(resultado) );
    }

    /* El objetivo de esta función es averiguar si todos los movimientos ofensivos de un pokemón
    son resistidos y/o inmunes por un tipo concreto */
    const getPokemonNonCoveredTypes = (): PokemonType[] => {
        let resistedTypes: PokemonType[] = [];

        /* Cogemos todos los tipos resistidos o inmunes a dichos movimientos y los insertamos en un array */
        move_list.filter(move => move!.move_type !== MoveType.STATUS)
            .forEach(move => {
                resistedTypes.push( ...getTypeResistances(move!.pokemon_type) );
                resistedTypes.push( ...getTypeInmunities(move!.pokemon_type) );
            });
        
        /* Aquí viene lo dificil. Lo que hace esta variable es filtrar el array con todos los tipos,
        usando como criterio que al filtrar el mismo array con un tipo pokemón el array resultante 
        tenga length 4, es decir que el tipo se repita 4 veces en resistedTypes.
        
        La idea es almacenar en resultado los tipos que solo se repiten 4 veces en resistedTypes,
        es decir los tipos pokemón que serían resistidos o inmunes por todos los movimientos del 
        pokemón seleccionado*/
        const resultado = resistedTypes.filter(firstFilter => 
            resistedTypes.filter(secondFilter => firstFilter === secondFilter).length === 4);

        /* Conviertelo a set para eliminar duplicados y devuelvelo como array */
        return Array.from(new Set(resultado));
    }

    return {
        getPokemonCoveredTypes,
        getPokemonNonCoveredTypes
    }
}