import { PokemonTeam } from "../../domain/teamMemberEntities";
import useWeavileStore from "../../globalContext/WeavileStore";
import { createNewTeamRequest } from "../../sections/main/api/nonLoggedUsers";
import { storeFirstPokemonTeam, storePokemonTeam } from "../../globalHelpers/pokemonTeams/nonLoggedUsers";


export const useCreateTeam = () => {
 
    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);     
    const changeSelectedMember = useWeavileStore((state) => state.changeSelectedPokemon);

    /* Las dos funciones hacen exactamente lo mismo, la única diferencia es que createFirstTeam usa el método
    storeFirstPokemonTeam que fuerza que el equipo creado se almacene siempre en localStorage con clave 0.
    Recuerda la race condition del modo estricto */

    const createFirstTeam = async(): Promise<PokemonTeam> => {
            const response = await createNewTeamRequest(); // Server side works fine

            if (response.status === 201) {
                const firstTeam: PokemonTeam = storeFirstPokemonTeam(response.data);
                changeSelectedTeam(firstTeam);
                changeSelectedMember(firstTeam.teamMembers[0]);      
                
                return firstTeam;
            } 
            else throw new Error("Error creating default first pokemon " + response.statusText);
        };

        const createTeam = async(): Promise<PokemonTeam> => {
            const response = await createNewTeamRequest(); // Server side works fine

            if (response.status === 201) {
                const firstTeam: PokemonTeam = storePokemonTeam(response.data);
                changeSelectedTeam(firstTeam);
                changeSelectedMember(firstTeam.teamMembers[0]);      
                
                return firstTeam;
            } 
            else throw new Error("Error creating default first pokemon " + response.statusText);
        };
    
    return { createFirstTeam, createTeam };
}
 
