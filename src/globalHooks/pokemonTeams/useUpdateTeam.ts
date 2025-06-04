import { PokemonTeam, PokemonTeamMember } from "../../domain/teamMemberEntities";
import useWeavileStore from "../../globalContext/WeavileStore";
import { updateStoredTeam } from "../../globalHelpers/pokemonTeams/nonLoggedUsers";


export const useUpdateTeam = () => {

    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;
    const updateSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon)!;
    const updateSelectedTeam = useWeavileStore(state => state.changeSelectedTeam)!;

    const updateTeamWrapper = (updatedMember: PokemonTeamMember): PokemonTeam => {
        /* Recuerda que el id de un miembro representa su posición en el equipo (0,1,2 ..) */

        /* Para garantizar que zustand provoque el rerenderizado de los componentes que usan su contexto,
        tienes que pasarle un nuevo objeto a las funciones que modifican el contexto de zustand.
        
        Esto se traduce en que tienes que crear*/

        const updatedMembers = [...selectedTeam.teamMembers];
        updatedMembers[updatedMember.id] = updatedMember;

        const updatedTeam: PokemonTeam = {
            ...selectedTeam,
            teamMembers: updatedMembers
        };

        updateStoredTeam(updatedTeam);
        updateSelectedTeam(updatedTeam);
        updateSelectedPokemon(updatedMember);

        return updatedTeam;
    }

    const updateTeamNameWrapper = (newName: string): PokemonTeam => {
        const updatedTeam: PokemonTeam = {
            ...selectedTeam,
            name: newName,
        };

        updateStoredTeam(updatedTeam);
        updateSelectedTeam(updatedTeam);

        return updatedTeam;
    }

    return {
        updateTeamWrapper, updateTeamNameWrapper
    }
}