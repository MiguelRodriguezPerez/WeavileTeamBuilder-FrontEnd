import { useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { getStatBarWidth } from "../../../../../../helpers/memberIvsEvsNature"
import { calculatePokemonStats } from "../../../../../../../../globalHelpers";

import styles from '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/baseStatBar.module.css'

export const BaseStatBar = ({ statName }: { statName: string }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const [ barValue, setBarValue ] = useState<number>(0);

    useEffect(() => {
        statName = statName.replace('base_','final_');
        setBarValue(calculatePokemonStats(selectedMember)[statName]);
    },[selectedMember])

    return (
        <div>
            <span style={{ width: `${ getStatBarWidth(barValue) }%` }}
            className={styles['base-stat-bar']}></span>
        </div>
    );
}