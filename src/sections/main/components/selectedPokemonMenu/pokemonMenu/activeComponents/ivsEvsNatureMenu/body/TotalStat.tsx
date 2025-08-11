import { useEffect, useState } from "react";
import { CalculatedStats, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { calculatePokemonStats } from "../../../../../../../../globalHelpers";

export const TotalStat = ({ statName } : { statName: string }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const statKey = statName = statName.replace('base_','final_') as keyof CalculatedStats;
    const [ statValue, setStatValue ] = useState<number>(0);
    
    useEffect(() => {
        setStatValue(Math.trunc(calculatePokemonStats(selectedMember)[statKey]));
    },[selectedMember])
  
    return (
        <div>{ statValue }</div>
    );
}