import { useContext } from "react";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";
import { ItemGrid } from "../activeComponents/elementGrids";
import { toPascalCase } from "../../../../../../globalHelpers";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility.css';

export const MemberItem = () => {

    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    const { item } = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className="member-item">
            <p>Item</p>
            <p onClick={() => { changeSelectedComponent(<ItemGrid />) }}>
                {item ? toPascalCase(item.name) : 'No item'}
            </p>
        </div>
    );
}