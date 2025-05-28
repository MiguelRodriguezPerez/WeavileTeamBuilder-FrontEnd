import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "../../../../../../context/pokemonData";
import { getPokemonStats, parseStat } from "../../../../../../helpers/memberIvsEvsNature";
import { TotalStat } from "../TotalStat";
import { BaseStatBar } from "./BaseStatBar";
import { EvsInput } from "./EvsInput";
import { EvsSliderWrapper } from "./EvsSliderWrapper";
import { IvsInput } from "./IvsInput";

import '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/ivsNatureBody.css';

export const IvsNatureBody = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { currentPokemonData } = useContext(SelectedPokemonDataContext)!;

    return (
        <ol className="ivs-nature-list">
            {
                currentPokemonData &&
                Object.entries(getPokemonStats(currentPokemonData!)).map(([statName, value]) => (
                    <li className="ivs-nature-element" key={statName}>
                        <div>{parseStat(statName)}</div>
                        <div className="ivs-value-stat">{value}</div>
                        <BaseStatBar value={value} />
                        <EvsInput statName={statName} />
                        <EvsSliderWrapper statName={statName} />
                        <IvsInput statName={statName} />
                        <TotalStat />
                    </li>
                ))
            }
        </ol>
    );
}