import { useNavigate } from "react-router";
import { useCreateTeam } from "../../../../globalHooks/pokemonTeams";

import styles from '../../../../globalStyles/buttons.module.css'

export const CreateNewTeamButton = () => {
  
    const navigate = useNavigate();
    const { createTeam } = useCreateTeam();

    const createNewTeamButtonEvent = () => {
        createTeam();
        navigate('/');
    }

    return (
        <button className={styles['weavile-button']}
            onClick={ createNewTeamButtonEvent }>{ 'Create New Team' }</button>
    );
}