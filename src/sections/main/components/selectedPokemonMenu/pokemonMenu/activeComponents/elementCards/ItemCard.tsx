import { ItemData } from "../../../../../../../domain/dataEntities";
import { PokemonTeam, PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";

import '../../../../../styles/selectedMemberMenu/elementCards/itemCard.css'

export const ItemCard = ({ item } : { item: ItemData }) => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;

    const onClickWrapper = () => {
        
    }
  
    return (
        <li key={ item.id } className="item-card">
            <img src={`data:image/jpeg;base64,${item.image_sprite}`} 
                alt={`${item.name}.png`} />
            <h4>{toPascalCase(item.name)}</h4>
            <p>{item.description}</p>
        </li>
    );
}