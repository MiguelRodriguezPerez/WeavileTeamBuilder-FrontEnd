import { useNavigate } from "react-router";
import { useCreateTeam } from "../../../../globalHooks/pokemonTeams";

import '../../../../globalStyles/buttons.css';

export const CreateNewTeamButton = () => {
  
    const navigate = useNavigate();
    const { createTeam } = useCreateTeam();

    const createNewTeamButtonEvent = () => {
        createTeam();
        navigate('/');
    }

    return (
        <button className='weavile-button' 
            onClick={ createNewTeamButtonEvent }>{ 'Create New Team' }</button>
    );
}