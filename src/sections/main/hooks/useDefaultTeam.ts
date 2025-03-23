import { TeamType } from "../../../domain/enums";
import { PokemonTeam } from "../../../domain/teamMemberEntities";
import useWeavileStore from "../../../globalContext/WeavileStore";
import { createNewTeamRequest } from "../api/nonLoggedUsers";
import { checkIfUserHasTeams, storePokemonTeam } from "../helpers/nonLoggedUser";

export const useDefaultTeam = () => {

    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);     

    const getDefaultTeam = async() => {
        const result: PokemonTeam | null = checkIfUserHasTeams();
        
        if (result !== null) changeSelectedTeam(result);
        else {
            const response = await createNewTeamRequest(TeamType.INDIVIDUAL);
            if (response.status === 201) {
                const newFirstTeam: PokemonTeam = storePokemonTeam(response.data);
                console.log(newFirstTeam);
                
                changeSelectedTeam(newFirstTeam);
            } 
            else throw new Error("Error creating default first pokemon " + response.statusText);
        };
    }

    return { getDefaultTeam };
    
};
