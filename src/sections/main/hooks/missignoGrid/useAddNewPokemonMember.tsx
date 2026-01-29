import { PokemonDataApiFactory } from "../../../../../api/requests/pokemonDataApi";
import { PokemonDataDTO } from "../../../../domain/dataEntities";
import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { convertPokemonDataToTeamMember as convertPokemonDataDTOToTeamMember } from "../../../../globalHelpers";
import { updateStoredTeam } from "../../../../globalHelpers/pokemonTeams/nonLoggedUsers";


export const useAddNewPokemonMember = () => {

    const pokemonDataApi = PokemonDataApiFactory();
    const changeSelectedTeam = useWeavileStore(state => state.changeSelectedTeam);
    const changeSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon);
    const selectedTeam = useWeavileStore(state => state.selectedPokemonTeam!);
    const selectedMember = useWeavileStore(state => state.selectedPokemonMember);

    const updatePokemonDataMember = async (dataId: number) => {
        try {
            const selectedMemberId: number = selectedMember!.team_index_id;
            const response = await pokemonDataApi.getPokemonDataById(dataId);
            const pokemonData: PokemonDataDTO = response.data;

            if (response.status === 200 && pokemonData) {
                console.log(pokemonData);

                const newMember: PokemonTeamMember = await convertPokemonDataDTOToTeamMember(
                    pokemonData,
                    selectedMemberId
                );

                const updatedMembers = [...selectedTeam.teamMembers];
                updatedMembers[selectedMemberId] = newMember;

                const updatedTeam: PokemonTeam = {
                    ...selectedTeam,
                    teamMembers: updatedMembers,
                }

                updateStoredTeam(updatedTeam);
                changeSelectedTeam(updatedTeam);
                changeSelectedPokemon(newMember);
            }
        } catch (error) {
            console.error("Error al obtener el Pokemon:", error);
        }
    }

    return { updateMember: updatePokemonDataMember }
}