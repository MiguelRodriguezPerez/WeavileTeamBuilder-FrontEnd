import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";

export const MemberMoveList = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    

    return (
        <ul>
            { /* Pendiente de comprobar campo move_list */
                selectedMember?.move_list?.map((move, index) => (
                    <li key={index}>{move.name}</li>
                ))
            }
        </ul>
    );
}