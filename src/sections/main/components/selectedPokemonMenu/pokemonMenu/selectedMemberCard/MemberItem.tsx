import { useContext, useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";

export const MemberItem = () => {
  
    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    const selectedPokemon: PokemonTeamMember = useWeavileStore( state => state.selectedPokemonMember! );
    const [ currentItem, setCurrentItem ] = useState<string | undefined>('');

    useEffect(() => {
        setCurrentItem(selectedPokemon.item?.name);
    }, [selectedPokemon.item])

    return (
        <div>
            <p>Item:</p>
            <p>{currentItem || 'No item'}</p>
        </div>
    );
}