import { useContext } from "react";
import { SelectedPokemonDataContext } from "../../../../../../context/pokemonData";
import { getPokemonStats, parseStat } from "../../../../../../helpers/memberIvsEvsNature";
import { BaseStatBar, EvsInput, EvsSliderWrapper, IvsInput, TotalStat } from "./";

import styles from '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/ivsNatureBody.module.css';

export const IvsNatureBody = () => {

    const { currentPokemonData } = useContext(SelectedPokemonDataContext)!;

    return (
        <ol className={styles['ivs-nature-list']}>
            {
                currentPokemonData &&
                Object.entries(getPokemonStats(currentPokemonData!)).map(([statName, value]) => (
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