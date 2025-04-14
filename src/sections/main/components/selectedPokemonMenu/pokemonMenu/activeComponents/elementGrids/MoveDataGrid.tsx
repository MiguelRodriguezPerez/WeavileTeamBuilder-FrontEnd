import { useContext } from "react";
import { MoveCard } from "../elementCards";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveData } from "../../../../../../../domain/dataEntities";

import '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.css'
import { MoveDataGridHeader } from "../gridHeaders";

export const MoveDataGrid = () => {

    const moveList: MoveData[] | undefined = useContext(SelectedPokemonDataContext)!.currentPokemonData?.move_list;

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