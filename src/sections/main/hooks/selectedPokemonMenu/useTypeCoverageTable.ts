import { MoveType, PokemonType } from "../../../../domain/enums";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { getTypeEffectiveness, getTypeInmunities, getTypeResistances } from "../../helpers/typeCoverageTable";

export const useTypeCoverageTable = () => {

    const { move_list }= useWeavileStore(state => state.selectedPokemonMember!);

    const getPokemonCoveredTypes = (): PokemonType[] => {
        let resultado: PokemonType[] = [];

        move_list!.filter(move => move!.move_type !== MoveType.STATUS)
           .forEach(move => {
               if (move!.pokemon_type) resultado.push(...getTypeEffectiveness(move!.pokemon_type));
           });


        return Array.from( new Set(resultado) );
    }

    const getPokemonNonCoveredTypes = (): PokemonType[] => {
        let memberMoveMap = new Map<string,PokemonType[]>() ;

        move_list!.filter(move => move!.move_type !== MoveType.STATUS)
            .forEach(move => {
                memberMoveMap.set(move!.name, [ ...getTypeResistances(move!.pokemon_type) ]);
                memberMoveMap.set(move!.name, [ ...getTypeInmunities(move!.pokemon_type) ]);
            });
                // memberMoveMap.set(move!.name, move!.pokemon_type);
        let nonCoveredTypes: PokemonType[] = [];

        memberMoveMap.forEach((value,key) => {
            
        })
    }
}