import { useContext } from "react";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility/memberItemAbilityCard.css';
import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberButtonCard.css';

export const MemberItem = () => {

    const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
    const { item } = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className="member-item">
            <p>Item</p>
            <p onClick={ () => changeElementType('item') } className="member-card-button">
                {item ? toPascalCase(item.name) : 'No item'}
            </p>
        </div>
    );
}