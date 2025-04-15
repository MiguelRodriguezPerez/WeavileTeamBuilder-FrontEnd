import { useContext } from "react";
import { MoveCard } from "../elementCards";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveData } from "../../../../../../../domain/dataEntities";
import { MoveDataGridHeader } from "../gridHeaders";
import { WeavileLoading } from "../../../../../../../ui/components";

import '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.css'

export const MoveDataGrid = () => {

    const moveList: MoveData[] | undefined = useContext(SelectedPokemonDataContext)!.currentPokemonData?.move_list;

    if (!moveList) return <WeavileLoading/>

    return (
        <>
            <MoveDataGridHeader/>
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