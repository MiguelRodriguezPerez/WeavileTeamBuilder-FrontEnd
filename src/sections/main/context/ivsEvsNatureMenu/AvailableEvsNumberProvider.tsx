import { ReactNode, useEffect, useState } from "react";
import { getMemberEvsSpent } from "../../helpers/memberIvsEvsNature";
import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { AvailableEvsNumberContext } from './AvailableEvsNumberContext';

export const AvailableEvsNumberProvider = ({ children }: { children: ReactNode }) => {

    const [remainingEvs, setRemainingEvs] = useState<number>(508);
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    
    useEffect(() => {
        setRemainingEvs(remainingEvs - getMemberEvsSpent(selectedMember));
    }, []);

    const validateEvsInput = (oldValue: number, newValue: number): boolean => {        
        return (newValue >= 0 && newValue <= 252 
            && ((getMemberEvsSpent(selectedMember) - oldValue + newValue) <= 508));
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
            {children}
        </AvailableEvsNumberContext.Provider>
    );
}