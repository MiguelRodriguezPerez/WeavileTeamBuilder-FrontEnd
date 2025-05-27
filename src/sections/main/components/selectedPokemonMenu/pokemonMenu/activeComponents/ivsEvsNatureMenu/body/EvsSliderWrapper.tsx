import { Slider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { AvailableEvsNumberContext } from "../../../../../../context/ivsEvsNatureMenu";
import { EvKey } from "../types";
import { useUpdateTeam } from "../../../../../../hooks/selectedPokemonMenu";

export const EvsSliderWrapper = ({ statName } : { statName: string }) => {

    const evKey = (statName.replace('base_', '') + '_ev') as EvKey;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { validateEvsInput, updateRemainingEvs } = useContext(AvailableEvsNumberContext)!;
    const { updateTeamWrapper } = useUpdateTeam();
    /* Mientras no recibe el valor real será 0 */
    const [ evValue, setEvValue ] = useState<number>(selectedMember[evKey] ?? 0);
    useEffect(() => {
            setEvValue(selectedMember[evKey as EvKey]);
        },
    [selectedMember]);
    

    const changeEvent = (event: Event , newValue: number): void => {
        if (validateEvsInput(newValue)) {
            updateRemainingEvs(evValue, newValue);
            const updatedMember = {
                ...selectedMember,
                [evKey]: newValue
            }

            updateTeamWrapper(updatedMember);
            setEvValue(newValue);
        }
        
    }


    return (
        <Slider
            size="small"
            value={evValue}
            min={0}
            max={255}
            step={1}
            onChange={ changeEvent }
        />

    );
}