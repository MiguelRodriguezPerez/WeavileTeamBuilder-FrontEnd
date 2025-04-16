import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";
import { AbilityGrid } from "../activeComponents/elementGrids";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility.css'
import { toPascalCase } from "../../../../../../globalHelpers";

export const MemberAbility = () => {

    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className="member-ability">
            <p>Ability</p>
            <p onClick={() => { changeSelectedComponent(<AbilityGrid />) }}>{toPascalCase(selectedMember.ability.name)}</p>
        </div>
    );
}