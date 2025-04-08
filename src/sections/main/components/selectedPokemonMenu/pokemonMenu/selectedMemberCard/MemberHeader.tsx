import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";

export const MemberHeader = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
  
    return (
        <header>
            <h3>{selectedMember.name}</h3>
            <img src={`data:image/jpeg;base64,${selectedMember.front_default_sprite}`}
                alt={`${selectedMember.name}.png`} />
                {/* TODO: Dropdown Teratypes */}
        </header>
    );
}