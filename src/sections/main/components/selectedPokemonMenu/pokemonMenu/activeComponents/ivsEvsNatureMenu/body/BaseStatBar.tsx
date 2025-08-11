import { useEffect, useState } from "react";
import { CalculatedStats, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { calculatePokemonStats } from "../../../../../../../../globalHelpers";
import { getStatBarWidth } from "../../../../../../helpers/memberIvsEvsNature";

import styles from '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/baseStatBar.module.css';

export const BaseStatBar = ({ statName }: { statName: string }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const [ barValue, setBarValue ] = useState<number>(0);
    const statKey = statName.replace('base_','final_') as keyof CalculatedStats;

    useEffect(() => {
        setBarValue(calculatePokemonStats(selectedMember)[statKey]);
    },[selectedMember])

    return (
        <div>
            <span style={{ width: `${ getStatBarWidth(barValue) }%` }}
            className={styles['base-stat-bar']}></span>
        </div>
    );
}