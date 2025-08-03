import { getPokemonByNameRequest } from "../../../../api/pokemonData";
import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { convertPokemonDataToTeamMember as convertPokemonDataDTOToTeamMember } from "../../../../globalHelpers";
import { updateStoredTeam } from "../../../../globalHelpers/pokemonTeams/nonLoggedUsers";
import { updateMemberDataCache } from '../../../../localStorage/pokemonData/updateMemberDataCache';

export const useSelectedPokemonMember = () => {

    const changeSelectedTeam = useWeavileStore(state => state.changeSelectedTeam);
    const changeSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon);
    const selectedTeam = useWeavileStore(state => state.selectedPokemonTeam!);
    const selectedMember = useWeavileStore(state => state.selectedPokemonMember);

    const updateMember = async (name: string) => {
        const selectedMemberId: number = selectedMember!.id;
        const pokemonRequest = await getPokemonByNameRequest(name);
        
        if (pokemonRequest.status === 200) {
            const newMember: PokemonTeamMember = 
                await convertPokemonDataDTOToTeamMember(pokemonRequest.data, selectedMemberId);

            /* Para almacenar los cambios en el equipo seleccionado, modificas el array original
            del equipo seleccionado al que deseas cambiar, lo almacenas en una variable y luego lo usas
            en el objeto que representa el equipo actualizado. */
            selectedTeam.teamMembers[selectedMemberId] = newMember;
            const updatedMembers: PokemonTeamMember[] = selectedTeam.teamMembers;
            
            const updatedTeam: PokemonTeam = {
                id : selectedTeam!.id,
                name: selectedTeam!.name,
                teamMembers: updatedMembers,
                teamType: selectedTeam!.teamType,
            }

            updateStoredTeam(updatedTeam);
            changeSelectedTeam(updatedTeam);
            changeSelectedPokemon(newMember);
        }
    }


    return {
        updateMember
    }
}