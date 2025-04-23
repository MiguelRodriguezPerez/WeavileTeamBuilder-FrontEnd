import { useState } from "react";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { MemberMoveInput } from "./MemberMoveInput";

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberMoves.css';

export const MemberMoveList = () => {

    const move_list = useWeavileStore(state => state.selectedPokemonMember!.move_list);
    const [ selectedIndex, setSelectedIndex ] = useState<number | null>(null);

    console.log(move_list);
    // isSelected(i === selectedIndex)

    return (
        <div className="member-moves">
            <h4>Moves</h4>
            <ul>
                {
                    Array.from({ length: 4 }, (_, i) => (
                        <li 
                            className={`member-moves-move ${selectedIndex === i && 'selected-move'}`} 
                            key={i} 
                            onClick={ () => setSelectedIndex(i)}>
                            {
                                <MemberMoveInput moveName={move_list[i]?.name ?? ''} moveIndex={i} />
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}