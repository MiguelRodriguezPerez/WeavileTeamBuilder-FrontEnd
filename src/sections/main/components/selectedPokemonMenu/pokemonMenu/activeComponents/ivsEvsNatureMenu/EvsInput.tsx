import { useState } from "react";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { useUpdateTeam } from "../../../../../hooks/selectedPokemonMenu";

export const EvsInput = ({ statName } :  { statName: string }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const evKey = statName.replace('base_', '') + '_ev';
    const [ evValue, setEvValue ] = useState(selectedMember[evKey]);
    const { updateTeamWrapper } = useUpdateTeam();

    const eventWrapper = (valueText: string) => {
        const newValue = parseInt(valueText);
        if (newValue >= 0 && newValue <= 255) {
            const updatedMember = {
                ...selectedMember,
                [evKey] : newValue
            }
            updateTeamWrapper(updatedMember);
        }

        setEvValue(newValue);
    }

    return (
        <input value={evValue}
            onChange={(e) => { eventWrapper(e.target.value) } }/>
    );
}