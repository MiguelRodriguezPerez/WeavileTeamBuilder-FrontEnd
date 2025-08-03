import { useState } from "react";
import { getAllItemsRequest } from "../../../../../../../api/itemData";
import { WeavileLoading } from "../../../../../../../ui/components";
import { ItemCard } from "../elementCards";
import { ElementHeader } from "../ElementHeader";
import { SearchInput } from "../SearchInput";
import { useQuery } from "@tanstack/react-query";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css'

export const ItemGrid = () => {

    const [ searchInput, setSearchInput ] = useState('');

    const { data , isLoading } = useQuery({
        queryFn: getAllItemsRequest,
        queryKey: ['itemList']
    });

    if ( isLoading ) return <WeavileLoading />

    return (
        <div>
            <ElementHeader elementName="Items" />
            <SearchInput propSearch={ searchInput } setPropSearch={ setSearchInput } />
            <ul className={ styles['element-grid'] }>
                {

                    data!.data.filter(item => item.name.includes(searchInput.toLowerCase()))
                        .map((item) => (
                        <ItemCard item={item} key={item.name} />
                    ))
                }
            </ul>
        </div>
    );
}