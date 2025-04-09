import { ItemData } from "../../../../../../../domain/dataEntities";

export const ItemCard = ({ item } : { item: ItemData }) => {
  
    return (
        <li key={ item.id }>
            <img src={`data:image/jpeg;base64,${item.image_sprite}`} 
                alt={`${item.name}.png`} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
        </li>
    );
}