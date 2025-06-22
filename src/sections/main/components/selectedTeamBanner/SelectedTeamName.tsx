import { useState } from "react";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import { useUpdateTeam } from "../../../../globalHooks/pokemonTeams";

import styles from '../../styles/selectedTeamBanner/selectedTeamName.module.css'

export const SelectedTeamName = () => {
    
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;
    const { updateTeamNameWrapper } = useUpdateTeam();
    const [ stateName, setStateName ] = useState(selectedTeam.name);

    const changeWrapper = (newName: string): void => {
        updateTeamNameWrapper(newName);
        setStateName(newName);
    }

    return (
        <div className={ styles['selected-team-name-div'] }>
            <input  className={ styles['selected-team-name-input'] }
             type="text" value={ stateName } name="team-name"
                onChange={ (e) => changeWrapper(e.target.value) } />
        </div>  
    );
}