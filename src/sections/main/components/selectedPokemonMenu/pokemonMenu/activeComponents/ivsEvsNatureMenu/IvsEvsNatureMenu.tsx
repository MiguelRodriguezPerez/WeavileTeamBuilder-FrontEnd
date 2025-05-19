import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { IvsNatureHeading } from "./IvsNatureHeading";
import { PokemonDataDTO } from "../../../../../../../domain/dataEntities";
import { getPokemonStats } from "../../../../../helpers/memberIvsEvsNature";

export const MemberIvsEvsNature = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { currentPokemonData } = useContext(SelectedPokemonDataContext)!;
    console.log(currentPokemonData);


    return (
        <table>
            <IvsNatureHeading />
            <tbody>
                    {
                        Object.entries(getPokemonStats(currentPokemonData!)).map(([statName,value]) => (
                            <tr key={ statName }>
                                <td>{ statName }</td>
                                <td>{ value }</td>
                            </tr>
                        ))
                    }

            </tbody>
        </table>
    );
}