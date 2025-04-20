import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";
import { ItemGrid } from "../activeComponents/elementGrids";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility.css'

export const MemberItem = () => {

    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    
    return (
        <div className="member-item">
            <p>Item</p>
            <p onClick={() => { changeSelectedComponent(<ItemGrid />) }}>{selectedPokemon.item!.name || 'No item'}</p>
        </div>
    );
}