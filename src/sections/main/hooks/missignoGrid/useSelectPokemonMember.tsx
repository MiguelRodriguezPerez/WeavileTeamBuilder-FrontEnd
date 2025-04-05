import { getPokemonByNameRequest } from "../../../../api/pokemonData";
import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { convertPokemonDataToTeamMember } from "../../../../globalHelpers";
import { updateStoredTeam } from "../../helpers/nonLoggedUser/updateStoredTeam";

export const useSelectedPokemonMember = () => {

    const changeSelectedTeam = useWeavileStore(state => state.changeSelectedTeam);
    const changeSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon);
    const selectedTeam = useWeavileStore(state => state.selectedPokemonTeam);
    const selectedMember = useWeavileStore(state => state.selectedPokemonMember);

    const updateMember = async (name: string) => {
        const selectedMemberId: number = selectedMember!.id;
        console.log(selectedTeam);
        
        const pokemonRequest = await getPokemonByNameRequest(name);
        console.log(pokemonRequest.data);
        

        if (pokemonRequest.status === 200) {
            const newMember: PokemonTeamMember = 
                await convertPokemonDataToTeamMember(pokemonRequest.data, selectedMemberId);
            
            const updatedTeam: PokemonTeam = {
                id : selectedTeam!.id,
                name: selectedTeam!.name,
                members: [
                    ...selectedTeam!.members.slice(0,selectedMemberId),
                    {
                        ...selectedTeam!.members[selectedMemberId] = newMember
                    },
                    ...selectedTeam!.members.slice(selectedMemberId + 1 ,5),
                ],
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