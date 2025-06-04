import { useDeleteTeam } from "../../../../globalHooks/pokemonTeams/useDeleteTeam";

export const DeleteTeamPng = () => {

    const { deleteTeam } = useDeleteTeam();
  
    return (
        <img src="/images/teamsList/trashIcon.png" alt="deleteTeam.png" 
            onClick={ deleteTeam }/> 
    );
}