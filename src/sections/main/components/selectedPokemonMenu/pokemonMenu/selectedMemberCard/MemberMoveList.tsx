import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberMoves.css'
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";
import { MoveDataGrid } from "../activeComponents/elementGrids";

export const MemberMoveList = () => {

    const { move_list }: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;


    return (
        <div className="member-moves">
            <h4>Moves</h4>
            <ul>
                {
                    Array.from({ length: 4 }, (_, i) => (
                        <li key={i} onClick={() => changeSelectedComponent(<MoveDataGrid />)}>
                            { move_list[i]?.name || '-' }
                        </li>
                    ))
                }
        </ul>
        </div>
    );
}