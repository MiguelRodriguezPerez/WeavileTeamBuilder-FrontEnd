import { useState } from "react";
import useWeavileStore from "../../../../globalContext/WeavileStore";

export const SelectedTeamName = () => {

    // Sospechoso de fallar
    const contextName: string = useWeavileStore(state => state.selectedPokemonTeam!.name);
    const changeTeamName: (newName: string) => void = useWeavileStore(state => state.changeSelectedTeamName);
    const [stateName, setStateName] = useState(contextName);

    const changeWrapper = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newTeamName: string = event.target.value;

        changeTeamName(newTeamName);
        setStateName(newTeamName);
    }

    return (
        <input type="text" value={stateName} onChange={ (e) => changeWrapper(e) }/>
    );
}