import { useState } from "react";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { useUpdateTeam } from "../../../../../../hooks/selectedPokemonMenu";

import '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/inputEvIv.css'

export const IvsInput = ({ statName }: { statName: string }) => {

    const evKey = statName.replace('base_', '') + '_iv';

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const [evValue, setEvValue] = useState(selectedMember[evKey]);
    const { updateTeamWrapper } = useUpdateTeam();

    const eventWrapper = (valueText: string) => {
        const newValue = parseInt(valueText);
        if (newValue >= 0 && newValue <= 31) {
            const updatedMember = {
                ...selectedMember,
                [evKey]: newValue
            }

            updateTeamWrapper(updatedMember);
            setEvValue(newValue);
        }

    }

    return (
        <input value={evValue} className="input-ev-iv"
            onChange={(e) => { eventWrapper(e.target.value) }} />
    );
}