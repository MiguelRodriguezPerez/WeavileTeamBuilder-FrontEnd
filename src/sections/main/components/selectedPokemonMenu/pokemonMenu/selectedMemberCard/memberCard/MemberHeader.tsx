import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberHeaderCard.css'

export const MemberHeader = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <header className="member-header-card">
            <img src={`data:image/png;base64,${selectedMember.front_default_sprite}`}
                alt={`${selectedMember.name}.png`} />
            <h3>{toPascalCase(selectedMember.name!)}</h3>
            
                {/* TODO: Dropdown Teratypes */}
        </header>
    );
}