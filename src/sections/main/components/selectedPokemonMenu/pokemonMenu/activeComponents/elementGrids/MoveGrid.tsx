import { useContext, useState } from "react";
import { MoveData } from "../../../../../../../domain/dataEntities";
import { WeavileLoading } from "../../../../../../../ui/components";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveCard } from "../elementCards";
import { ElementHeader } from "../ElementHeader";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css';
import { SearchInput } from "../SearchInput";


export const MoveGrid = () => {

    const moveList: MoveData[] | undefined = useContext(SelectedPokemonDataContext)!.currentPokemonData?.move_list;
    const [ searchInput, setSearchInput ] = useState('');

    if (!moveList) return <WeavileLoading />

    return (
        <div>
            <ElementHeader elementName="Moves" />
            <SearchInput propSearch={ searchInput } setPropSearch={ setSearchInput } />
            <ul className={ styles['element-grid'] }>
                {
                    moveList.filter(move => move.name.includes(searchInput.toLowerCase()))
                        .map((move) => (
                            <MoveCard moveProp={move} key={move.id} />
                        ))
                }
            </ul>

        </div>
    );
}