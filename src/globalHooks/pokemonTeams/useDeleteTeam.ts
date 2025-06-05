import { PokemonTeam } from "../../domain/teamMemberEntities";
import useWeavileStore from "../../globalContext/WeavileStore";
import { deletePokemonTeam, getAllTeamsLocalStorage } from "../../globalHelpers/pokemonTeams/nonLoggedUsers";
import { useCreateTeam } from "./useCreateTeam";

export const useDeleteTeam = () => {
 
    const selectedTeam = useWeavileStore((state) => state.selectedPokemonTeam)!;    
    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);     
    const changeSelectedMember = useWeavileStore((state) => state.changeSelectedPokemon); 
    const deleteSelectedTeam = useWeavileStore((state) => state.deleteSelectedTeam);
    const { createFirstTeam } = useCreateTeam();

    const deleteTeam = (): void => {

        console.log('aaaaaaaaaaaaa');
        
        /* Si el usuario tiene un solo equipo y ha llamado a esta función es porque lo quiere borrar.
        Creále un nuevo equipo antes de borrar el equipo seleccionado para que el contexto pueda seleccionarlo */        
        if ( getAllTeamsLocalStorage().length === 1 ) createFirstTeam();

        const newSelectedTeam: PokemonTeam = getAllTeamsLocalStorage().reverse()[0];

        deleteSelectedTeam();
        deletePokemonTeam(selectedTeam);

        changeSelectedTeam(newSelectedTeam);
        changeSelectedMember(newSelectedTeam.teamMembers[0]);
    }

    return { deleteTeam }

 
}