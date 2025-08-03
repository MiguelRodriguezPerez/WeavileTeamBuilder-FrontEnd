import { ItemDto } from "../../../../../../../domain/dataEntities";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { useUpdateTeam } from "../../../../../../../globalHooks/pokemonTeams";


import styles from '../../../../../styles/selectedMemberMenu/elementCards/itemCard.module.css';

export const ItemCard = ({ item }: { item: ItemDto }) => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const { updateTeamWrapper } = useUpdateTeam();

    const onClickWrapper = () => {
        const updatedMember = {
            ...selectedPokemon,
            item: item
        }

        updateTeamWrapper(updatedMember);
    }

    return (
        <li key={item.name} className={styles['item-card']} onClick={onClickWrapper}>
            <img src={`data:image/jpeg;base64,${item.image_sprite}`}
                alt={`${item.name}.png`} />
            <h4>{toPascalCase(item.name)}</h4>
            <p className={styles['item-description']}>{item.description}</p>
        </li>
    );
}