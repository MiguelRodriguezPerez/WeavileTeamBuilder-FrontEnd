import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";
import { AbilityDataGrid } from "../activeComponents/elementGrids";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility.css'

export const MemberAbility = () => {

    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className="member-ability">
            <p>Ability</p>
            <p onClick={() => { changeSelectedComponent(<AbilityDataGrid />) }}>{selectedMember.ability.name}</p>
        </div>
    );
}