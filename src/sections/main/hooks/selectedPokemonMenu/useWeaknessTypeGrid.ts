import { PokemonTypeEnum } from '../../../../domain/enums/PokemonTypeEnum';
import { PokemonTeamMember } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { getPokemonCoveredTypes } from '../../../../globalHelpers/pokemonTypes/memberTypeCoverage';
import { getMemberWeakness } from '../../../../globalHelpers/pokemonTypes/memberTypeInteractions';

export const useWeaknessTypeGrid = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    const getCoveredWeakness = (): PokemonTypeEnum[] => {
        return getPokemonCoveredTypes(selectedPokemon)
            .filter(type => getMemberWeakness(
                selectedPokemon.type_list!
            ).includes(type))
    }

    return {
        getCoveredWeakness
    }

}