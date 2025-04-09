import { ItemData } from "../../../../../../../domain/dataEntities";
import { ItemCard } from "../elementCards";

export const ItemGrid = ({ itemList } : { itemList: ItemData[] }) => {
  
    return (
        <ul>
           {
                itemList.map((item) => (
                    <ItemCard item={item} key={item.id}/>
                ))
           } 
        </ul>
    );
}