import { ItemData } from "../../../../../../../domain/dataEntities";
import { PokemonTeam, PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { updateStoredTeam } from "../../../../../helpers/nonLoggedUser";

import '../../../../../styles/selectedMemberMenu/elementCards/itemCard.css'

export const ItemCard = ({ item } : { item: ItemData }) => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;
    const updateSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon)!;
    const updateSelectedTeam = useWeavileStore(state => state.changeSelectedTeam)!;

    const onClickWrapper = () => {
        const updatedMember = { 
            ...selectedPokemon, 
            item : item
        }

        /* No puedes seleccionar el índice del miembro directamente, tienes que hacer un map al array,
        usar un index como referencia en el map y si el index coincide con el índice que quieres cambiar,
        entonces lo actualizas */
        const updatedTeam: PokemonTeam = {
            ...selectedTeam,
            teamMembers : selectedTeam.teamMembers.map((member, index) =>
                index === updatedMember.id ? { ...member, member: updatedMember } : member
            )
        };

        updateStoredTeam(updatedTeam);
        updateSelectedTeam(updatedTeam);
        updateSelectedPokemon(updatedMember);
          
    }
  
    return (
        <li key={ item.id } className="item-card" onClick={onClickWrapper}>
            <img src={`data:image/jpeg;base64,${item.image_sprite}`} 
                alt={`${item.name}.png`} />
            <h4>{toPascalCase(item.name)}</h4>
            <p>{item.description}</p>
        </li>
    );
}