import { useContext } from "react";
import { MoveData } from "../../../../../../../domain/dataEntities";
import { WeavileLoading } from "../../../../../../../ui/components";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveCard } from "../elementCards";

import '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.css';

export const MoveGrid = () => {

    const moveList: MoveData[] | undefined = useContext(SelectedPokemonDataContext)!.currentPokemonData?.move_list;

    if (!moveList) return <WeavileLoading />

    return (
        <>
            <ul className="element-grid">
                {
                    moveList?.map((move) => (
                        <MoveCard moveProp={move} key={move.id} />
                    ))
                }
            </ul>

        </>
    );
}