import { useEffect, useState } from "react";
import { ItemCard } from "../elementCards";
import { ItemData } from "../../../../../../../domain/dataEntities";
import { getAllItemsRequest } from "../../../../../../../api/itemData";
import { WeavileLoading } from "../../../../../../../ui/components";

import '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.css'
import { ElementHeader } from "../ElementHeader";

export const ItemGrid = () => {

    const [itemList, setItemList] = useState<ItemData[]>([]);

    useEffect(() => {
        const asyncWrapper = async () => {
            const itemRequest = await getAllItemsRequest();

            if (itemRequest.status === 200) setItemList(itemRequest.data);
        }

        asyncWrapper();
    }, [])

    if (itemList.length === 0) return <WeavileLoading />

    return (
        <>
            <ElementHeader elementName="Items" />
            <ul className="element-grid">
                {
                    itemList?.map((item) => (
                        <ItemCard item={item} key={item.id} />
                    ))
                }
            </ul>
        </>
    );
}