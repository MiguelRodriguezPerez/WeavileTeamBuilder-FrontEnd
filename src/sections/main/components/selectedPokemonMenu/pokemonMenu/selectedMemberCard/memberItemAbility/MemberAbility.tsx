import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberButtonCard.css';
import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility/memberItemAbilityCard.css';

export const MemberAbility = () => {

    const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className="member-ability">
            <p>Ability</p>
            <p className="member-card-button"
                onClick={() => changeElementType('ability') }>{toPascalCase(selectedMember.ability!.name)}</p>
        </div>
    );
}