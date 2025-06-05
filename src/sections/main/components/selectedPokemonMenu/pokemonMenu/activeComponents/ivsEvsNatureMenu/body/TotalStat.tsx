import { useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { calculatePokemonStats } from "../../../../../../../../globalHelpers";

export const TotalStat = ({ statName } : { statName: string }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    const [ statValue, setStatValue ] = useState<number>(0);
    useEffect(() => {
        statName = statName.replace('base_','final_');
        
        setStatValue(Math.trunc(calculatePokemonStats(selectedMember)[statName]));
    },[selectedMember])
  
    return (
        <div>{ statValue }</div>
    );
}