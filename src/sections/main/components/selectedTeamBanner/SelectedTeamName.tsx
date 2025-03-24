import { useState } from "react";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import { updateStoredTeam } from "../../helpers/nonLoggedUser/updateStoredTeam";

import '../../styles/selectedTeamName.css'

export const SelectedTeamName = () => {

    // Sospechoso de fallar
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;
    const changeCurrentTeam: (pokemonTeam: PokemonTeam) => void = useWeavileStore(state => state.changeSelectedTeam);
    const [stateName, setStateName] = useState(selectedTeam.name);

    const changeWrapper = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newTeamName: string = event.target.value;
        /* updatedTeam y su asignación es redundante, pero la necesito para entender que hace */
        const updatedTeam: PokemonTeam = selectedTeam;
        updatedTeam.name = newTeamName;
        
        changeCurrentTeam(updatedTeam)
        updateStoredTeam(updatedTeam);
        setStateName(newTeamName);
    }

    return (
        <input type="text" value={stateName} onChange={ (e) => changeWrapper(e) } className="selected-team-name"/>
    );
}