import { useContext } from "react";
import { MoveData } from "../../../../../../../domain/dataEntities";
import { WeavileLoading } from "../../../../../../../ui/components";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveCard } from "../elementCards";
import { ElementHeader } from "../ElementHeader";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css';


export const MoveGrid = () => {

    const moveList: MoveData[] | undefined = useContext(SelectedPokemonDataContext)!.currentPokemonData?.move_list;

    if (!moveList) return <WeavileLoading />

    return (
        <div>
            <ElementHeader elementName="Moves" />
            <ul className={ styles['element-grid'] }>
                {
                    moveList?.map((move) => (
                        <MoveCard moveProp={move} key={move.id} />
                    ))
                }
            </ul>

        </div>
    );
}