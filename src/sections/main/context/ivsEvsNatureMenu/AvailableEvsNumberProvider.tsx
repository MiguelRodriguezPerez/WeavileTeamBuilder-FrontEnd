import { ReactNode, useEffect, useState } from "react";
import { getMemberEvsSpent } from "../../helpers/memberIvsEvsNature";
import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { AvailableEvsNumberContext } from './AvailableEvsNumberContext';

export const AvailableEvsNumberProvider = ( { children } : { children: ReactNode} ) => {

    const [ remainingEvs, setRemainingEvs ] = useState<number>(508);
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    useEffect(() => {
        setRemainingEvs(508 - getMemberEvsSpent(selectedMember));
    },[]);

    const validateEvsInput = (newValue: number): boolean => {
        return (newValue >= 0 && newValue <= 255 && newValue <= remainingEvs);
    }

    /* Esta función solo debería llamarse después de llamarse a validateEvsInput y asegurarse
    que devuelva true */
    const updateRemainingEvs = (oldValue: number, newValue: number): void => {
        setRemainingEvs((remainingEvs + oldValue) - newValue);
    }
  
    return (
        <AvailableEvsNumberContext.Provider value={{ 
            remainingEvs, 
            setRemainingEvs, 
            validateEvsInput, 
            updateRemainingEvs 
        }}>
            { children }
        </AvailableEvsNumberContext.Provider>
    );
}