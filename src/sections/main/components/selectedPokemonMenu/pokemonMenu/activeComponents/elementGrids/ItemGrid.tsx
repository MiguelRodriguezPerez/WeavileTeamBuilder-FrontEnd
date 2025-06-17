import { useEffect, useState } from "react";
import { getAllItemsRequest } from "../../../../../../../api/itemData";
import { ItemData } from "../../../../../../../domain/dataEntities";
import { WeavileLoading } from "../../../../../../../ui/components";
import { ItemCard } from "../elementCards";
import { ElementHeader } from "../ElementHeader";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css';
import missignoStyles from  '../../../../../styles/missignoMenu/missignoMenu.module.css';



export const ItemGrid = () => {

    const [ itemList, setItemList ] = useState<ItemData[]>([]);
    const [ userInput, setUserInput] = useState('');

    useEffect(() => {
        const asyncWrapper = async () => {
            const itemRequest = await getAllItemsRequest();
            if (itemRequest.status === 200) setItemList(itemRequest.data);
        }
        asyncWrapper();
    }, [])

    if (itemList.length === 0) return <WeavileLoading />

    return (
        <div>
            <ElementHeader elementName="Items" />
            <input value={ userInput } type="text"
                onChange={ (e) => setUserInput( e.target.value ) } 
                className={missignoStyles['missigno-header-input']} />
            <ul className={ styles['element-grid'] }>
                {

                    itemList.filter(item => item.name.includes(userInput.toLowerCase()))
                        .map((item) => (
                        <ItemCard item={item} key={item.id} />
                    ))
                }
            </ul>
        </div>
    );
}