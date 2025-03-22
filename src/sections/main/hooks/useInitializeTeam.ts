import { TeamType } from "../../../domain/enums";
import { PokemonTeam } from "../../../domain/teamMemberEntities";
import useWeavileStore from "../../../globalContext/WeavileStore";
import { createNewTeamRequest } from "../api/nonLoggedUsers";
import { checkIfUserHasTeams, storePokemonTeam } from "../helpers/nonLoggedUser";

// TODO: Averiguar como implementar este hook en un efecto
export const useInitializeTeam = async() => {

    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);  
    const result: PokemonTeam | null = checkIfUserHasTeams();

    if (result !== null) changeSelectedTeam(result);
    else {
        const response = await createNewTeamRequest(TeamType.INDIVIDUAL);
        if (response.status === 201) {
            const firstPokemonTeam: PokemonTeam = response.data;
            storePokemonTeam(firstPokemonTeam);
            changeSelectedTeam(firstPokemonTeam);
        } 
        else throw new Error("Error creating default first pokemon " + response.statusText);
    };
    
};
