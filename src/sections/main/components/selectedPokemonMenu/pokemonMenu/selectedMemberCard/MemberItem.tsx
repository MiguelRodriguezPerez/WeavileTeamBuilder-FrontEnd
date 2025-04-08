import { useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";

export const MemberItem = () => {
  
    const selectedPokemon: PokemonTeamMember = useWeavileStore( state => state.selectedPokemonMember! );
    const [ currentItem, setCurrentItem ] = useState<string | undefined>('');

    useEffect(() => {
        setCurrentItem(selectedPokemon.item?.name);
    }, [selectedPokemon.item])

    return (
        <div>
            <p>Item:</p>
            <p>{currentItem}</p>
        </div>
    );
}