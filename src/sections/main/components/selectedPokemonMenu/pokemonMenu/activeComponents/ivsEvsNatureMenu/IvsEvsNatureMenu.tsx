import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { getPokemonStats } from "../../../../../helpers/memberIvsEvsNature";
import { IvsNatureHeading } from "./IvsNatureHeading";
import { BaseStatBar } from "./BaseStatBar";
import { EvsInput } from "./EvsInput";
import { IvsInput } from "./IvsInput";
import { TotalStat } from "./TotalStat";

export const MemberIvsEvsNature = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { currentPokemonData } = useContext(SelectedPokemonDataContext)!;
    console.log(selectedMember);


    return (
        <table>
            <IvsNatureHeading />
            <tbody>
                    {
                        Object.entries(getPokemonStats(currentPokemonData!)).map(([statName,value]) => (
                            <tr key={ statName }>
                                <td>{ statName }</td>
                                <td>{ value }</td>
                                <td><EvsInput statName={statName}/></td>
                                <td><BaseStatBar value={value}/></td>
                                <td><IvsInput/></td>
                                <td><TotalStat/></td>
                            </tr>
                        ))
                    }

            </tbody>
        </table>
    );
}