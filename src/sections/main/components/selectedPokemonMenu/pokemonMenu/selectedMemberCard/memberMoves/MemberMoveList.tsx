import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { MemberMoveInput } from "./MemberMoveInput";

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberMoves.module.css';

export const MemberMoveList = () => {

    const move_list = useWeavileStore(state => state.selectedPokemonMember!.move_list);

    return (
        <div className={styles['member-moves']}>
            <h4>Moves</h4>
            <ul>
                {
                    Array.from({ length: 4 }, (_, i) => (
                        <MemberMoveInput 
                            key={ i }
                            moveName={ move_list[i]?.name ?? '' }
                            moveIndex={ i } 
                        />
                    ))
                }
            </ul>
        </div>
    );
}