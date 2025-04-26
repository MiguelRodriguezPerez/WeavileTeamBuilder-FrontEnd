import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../context/selectedMenuComponent/SelectedComponentContext";
import { AbilityGrid } from "../activeComponents/elementGrids";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility.css'
import { toPascalCase } from "../../../../../../globalHelpers";

export const MemberAbility = () => {

    const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className="member-ability">
            <p>Ability</p>
            <p onClick={() => changeElementType('ability') }>{toPascalCase(selectedMember.ability!.name)}</p>
        </div>
    );
}