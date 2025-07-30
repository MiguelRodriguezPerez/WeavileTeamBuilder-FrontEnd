import { useEffect, useState } from "react";
import { getAllItemsRequest } from "../../../../../../../api/itemData";
import { ItemData } from "../../../../../../../domain/dataEntities";
import { WeavileLoading } from "../../../../../../../ui/components";
import { ItemCard } from "../elementCards";
import { ElementHeader } from "../ElementHeader";
import { SearchInput } from "../SearchInput";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css';
import { useQuery } from "@tanstack/react-query";

export const ItemGrid = () => {

    // const [ itemList, setItemList ] = useState<ItemData[]>([]);
    const [ searchInput, setSearchInput ] = useState('');

    const { data , isLoading } = useQuery({
        queryFn: getAllItemsRequest,
        queryKey: ['itemList']
    })

    

    // useEffect(() => {
    //     const asyncWrapper = async () => {
    //         const itemRequest = await getAllItemsRequest();
    //         if (itemRequest.status === 200) setItemList(itemRequest.data);
    //     }
    //     asyncWrapper();
    // }, [])

    if (isLoading) return <WeavileLoading />

    return (
        <div>
            <ElementHeader elementName="Items" />
            <SearchInput propSearch={ searchInput } setPropSearch={ setSearchInput } />
            <ul className={ styles['element-grid'] }>
                {

                    data!.data.filter(item => item.name.includes(searchInput.toLowerCase()))
                        .map((item) => (
                        <ItemCard item={item} key={item.id} />
                    ))
                }
            </ul>
        </div>
    );
}