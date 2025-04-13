import { useEffect, useState } from "react";
import { ItemCard } from "../elementCards";
import { ItemData } from "../../../../../../../domain/dataEntities";
import { getAllItemsRequest } from "../../../../../../../api/itemData";

export const ItemGrid = () => {

    const [ itemList, setItemList ] = useState<ItemData[]>([]);

    useEffect(() => {
        const asyncWrapper = async () => {
            const itemRequest = await getAllItemsRequest();
            console.log(itemRequest.data);
            
            if (itemRequest.status === 200) setItemList(itemRequest.data);
        }

        asyncWrapper();
    }, [])
  
    return (
        <ul>
           {
                itemList?.map((item) => (
                    <ItemCard item={item} key={item.id}/>
                ))
           } 
        </ul>
    );
}