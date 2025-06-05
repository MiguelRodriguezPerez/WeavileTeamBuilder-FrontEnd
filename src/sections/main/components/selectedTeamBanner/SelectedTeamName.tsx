import { useState } from "react";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import { useUpdateTeam } from "../../../../globalHooks/pokemonTeams";

import '../../styles/selectedTeamName.css'



export const SelectedTeamName = () => {

    
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;
    const { updateTeamNameWrapper } = useUpdateTeam();
    const [ stateName, setStateName ] = useState(selectedTeam.name);

    const changeWrapper = (newName: string): void => {
        updateTeamNameWrapper(newName);
        setStateName(newName);
    }

    return (
        <input type="text" value={ stateName } 
            onChange={ (e) => changeWrapper(e.target.value) } className="selected-team-name"/>
    );
}