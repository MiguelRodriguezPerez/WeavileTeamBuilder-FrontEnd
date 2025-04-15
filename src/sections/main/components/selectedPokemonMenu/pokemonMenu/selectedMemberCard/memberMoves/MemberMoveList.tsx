import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../../context/selectedMember/SelectedComponentContext";
import { MoveDataGrid } from "../../activeComponents/elementGrids";

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberMoves.css'
import { MemberMoveInput } from "./MemberMoveInput";

export const MemberMoveList = () => {

    const { move_list }: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    console.log(move_list);
    

    // TODO: Imitar delete move showdown

    return (
        <div className="member-moves">
            <h4>Moves</h4>
            <ul>
                {
                    Array.from({ length: 4 }, (_, i) => (
                        <li className="member-moves-move" key={i} onClick={() => changeSelectedComponent(<MoveDataGrid />)}>
                            { <MemberMoveInput moveName={move_list[i]?.name ?? ''} moveIndex={i}/>}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}