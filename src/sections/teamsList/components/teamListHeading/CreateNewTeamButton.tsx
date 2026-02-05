import { useNavigate } from "react-router";
import { useCreateTeam } from "../../../../globalHooks/pokemonTeams";

import styles from '../../../../globalStyles/buttons.module.css'

export const CreateNewTeamButton = () => {
  
    const navigate = useNavigate();
    const { createNewTeam } = useCreateTeam();

    const createNewTeamButtonEvent = () => {
        createNewTeam();
        navigate('/');
    }

    return (
        <button className={styles['weavile-button']}
            onClick={ createNewTeamButtonEvent }>{ 'Create New Team' }</button>
    );
}