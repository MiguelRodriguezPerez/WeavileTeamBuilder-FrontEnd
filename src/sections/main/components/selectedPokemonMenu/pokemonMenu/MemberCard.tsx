import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../globalContext/WeavileStore";
import { MemberAbilitiesDropdown } from "./memberCard/MemberAbilitiesDropdown";
import { MemberMoveList } from "./memberCard/MemberMoveList";

export const MemberCard = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    // ?????
    // const currentPokemonData = useContext(SelectedPokemonContext)!.currentPokemonData!;

    return (
        <div>
            <img src={`data:image/jpeg;base64,${selectedMember.front_default_sprite}`}
                alt={`${selectedMember.name}.png`} />
            <h3>{selectedMember.name}</h3>
            <MemberAbilitiesDropdown/>
            <MemberMoveList/>
        </div>
    );
}