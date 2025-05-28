import { useState } from "react";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { useUpdateTeam } from "../../../../../../hooks/selectedPokemonMenu";
import { IvKey } from "../types";

import '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/inputEvIv.css';


export const IvsInput = ({ statName }: { statName: string }) => {

    const ivKey = statName.replace('base_', '') + '_iv';
    const { updateTeamWrapper } = useUpdateTeam();
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const [ ivValue, setIvValue ] = useState(selectedMember[ivKey as IvKey]);

    const eventWrapper = (valueText: string): void => {
        const newValue = parseInt(valueText);

        if (newValue >= 0 && newValue <= 31) {
            const updatedMember = {
                ...selectedMember,
                [ivKey]: newValue
            }

            updateTeamWrapper(updatedMember);
            setIvValue(newValue);
        }
    }

    const arrowEvent = (newValue: number) => {
        eventWrapper(newValue.toString());
    }

    return (
        <div className="iv-input-div">
            <input 
                type="number"
                value={ivValue} 
                className="input-ev-iv"
                onChange={(e) => { eventWrapper(e.target.value) }} 
            />
            <img src="/images/main/ivsEvsMenu/arrow-upwards.png" onClick={() => arrowEvent(ivValue + 1)} />
            <img src="/images/main/ivsEvsMenu/arrow-downwards.png"  onClick={() => arrowEvent(ivValue - 1)} />
        </div>
    );
}