import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { updateStoredTeam } from "../../helpers/nonLoggedUser";

export const useUpdateTeam = () => {

    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;
    const updateSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon)!;
    const updateSelectedTeam = useWeavileStore(state => state.changeSelectedTeam)!;

    const updateTeamWrapper = (updatedMember: PokemonTeamMember): PokemonTeam => {
        /* Te pegaste un tiro en el pie usando spread operator. Lo más fácil es acceder al equipo actual,
        seleccionar su miembro por índice (Recuerda que el id representa su posición en el equipo y que 
        nunca cambia) y cambiarlo directamente. 
        Luego haces todas las actualizaciones necesarias */

        // const updatedTeam = selectedTeam;
        // updatedTeam.teamMembers[updatedMember.id] = updatedMember;
        let { teamMembers : membersToUpdate } = selectedTeam;
        membersToUpdate[updatedMember.id] = updatedMember;

        const updatedTeam: PokemonTeam = {
            id : selectedTeam.id,
            name: selectedTeam.name,
            teamMembers: membersToUpdate,
            teamType: selectedTeam.teamType,
        }

        updateStoredTeam(updatedTeam);
        updateSelectedTeam(updatedTeam);
        updateSelectedPokemon(updatedMember);

        return selectedTeam;
    }

    return {
        updateTeamWrapper
    }
}