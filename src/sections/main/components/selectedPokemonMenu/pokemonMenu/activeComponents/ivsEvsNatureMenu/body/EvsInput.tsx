import { useContext, useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { EvKey } from "../types";
import { AvailableEvsNumberContext } from "../../../../../../context/ivsEvsNatureMenu";
import { useUpdateTeam } from "../../../../../../../../globalHooks/pokemonTeams";

import '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/inputEvIv.css'


export const EvsInput = ({ statName }: { statName: string }) => {
    /* Cada render manipulara el string de la estadística para poder acceder al campo _ev deseado.
    Por ejemplo si le llega base_hp lo reemplazará por hp_ev */
    const evKey = statName.replace('base_', '') + '_ev';
    const { updateTeamWrapper } = useUpdateTeam();
    const { validateEvsInput, updateRemainingEvs } = useContext(AvailableEvsNumberContext)!;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    
    const [ evValue, setEvValue ] = useState(selectedMember[evKey as EvKey]);
    useEffect(() => {
        setEvValue(selectedMember[evKey as EvKey]);
    },[selectedMember])
    
    const eventWrapper = (valueString: string): void => {
        /* Al borrar el valor del input por completo no lo puede interpretar como 0, por eso si recibe 
        como valor '' es porque se ha borrado el input por completo y lo interpretará como 0 */
        const newValue = valueString === '' ? 0 : parseInt(valueString);

        if (validateEvsInput(evValue, newValue)) {
            updateRemainingEvs(evValue, newValue);
            const updatedMember = {
                ...selectedMember,
                [evKey]: newValue
            }

            updateTeamWrapper(updatedMember);
            setEvValue(newValue);
        }

        else setEvValue(evValue);
    }

    return (
        <div>
            <input value={evValue}
                className="input-ev-iv"
                onChange={(e) => { eventWrapper(e.target.value) }} 
            />
        </div>
    );
}