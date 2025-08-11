import { getPokemonStats, parseStat } from "../../../../../../helpers/memberIvsEvsNature";
import { BaseStatBar, EvsInput, EvsSliderWrapper, IvsInput, TotalStat } from "./";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";

import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import styles from '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/ivsNatureBody.module.css';

export const IvsNatureBody = () => {

    const selectedMember: PokemonTeamMember =  useWeavileStore(state => state.selectedPokemonMember)!

    return (
        <ol className={styles['ivs-nature-list']}>
            {
                selectedMember &&
                Object.entries(getPokemonStats(selectedMember)).map(([statName, value]) => (
                    <li className={styles['ivs-nature-element']} key={statName}>
                        <div>{parseStat(statName)}</div>
                        <div>{value}</div>
                        <BaseStatBar statName={statName} />
                        <EvsInput statName={statName} />
                        <EvsSliderWrapper statName={statName} />
                        <IvsInput statName={statName} />
                        <TotalStat statName={statName}/>
                    </li>
                ))
            }
        </ol>
    );
}