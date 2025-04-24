import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { MemberMoveInput } from "./MemberMoveInput";

export const MemberMoveList = () => {

    const move_list = useWeavileStore(state => state.selectedPokemonMember!.move_list);

    return (
        <div className="member-moves">
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