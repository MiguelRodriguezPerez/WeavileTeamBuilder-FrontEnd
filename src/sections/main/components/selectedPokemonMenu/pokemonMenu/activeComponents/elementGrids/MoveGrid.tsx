import { useContext } from "react";
import { MoveCard } from "../elementCards";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveData } from "../../../../../../../domain/dataEntities";
import { ElementHeader } from "../ElementHeader";
import { WeavileLoading } from "../../../../../../../ui/components";

import '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.css'

export const MoveGrid = () => {

    const moveList: MoveData[] | undefined = useContext(SelectedPokemonDataContext)!.currentPokemonData?.move_list;

    if (!moveList) return <WeavileLoading />

    return (
        <>
            <ElementHeader elementName="Moves" />
            <ul className="element-grid">
                {
                    moveList?.map((move) => (
                        <MoveCard move={move} key={move.id} />
                    ))
                }
            </ul>

        </>
    );
}