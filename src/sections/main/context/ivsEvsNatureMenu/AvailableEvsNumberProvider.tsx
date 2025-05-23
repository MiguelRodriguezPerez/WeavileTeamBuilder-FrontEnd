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
  
    return (
        <AvailableEvsNumberContext.Provider value={{ remainingEvs, setRemainingEvs}}>
            { children }
        </AvailableEvsNumberContext.Provider>
    );
}