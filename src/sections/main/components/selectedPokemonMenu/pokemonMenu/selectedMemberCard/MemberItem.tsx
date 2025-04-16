import { useContext, useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";
import { ItemGrid } from "../activeComponents/elementGrids";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility.css'

export const MemberItem = () => {

    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const [currentItem, setCurrentItem] = useState<string | undefined>('');

    useEffect(() => {
        setCurrentItem(selectedPokemon.item?.name);
    }, [selectedPokemon.item])

    return (
        <div className="member-item">
            <p>Item</p>
            <p onClick={() => { changeSelectedComponent(<ItemGrid />) }}>{currentItem || 'No item'}</p>
        </div>
    );
}