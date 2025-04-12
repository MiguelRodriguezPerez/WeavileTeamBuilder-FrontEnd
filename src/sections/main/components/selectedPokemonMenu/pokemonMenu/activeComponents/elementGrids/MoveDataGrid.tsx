import { useContext } from "react";
import { MoveCard } from "../elementCards";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveData } from "../../../../../../../domain/dataEntities";

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/elementGrid.css'

export const MoveDataGrid = () => {

    const moveList: MoveData[] | undefined = useContext(SelectedPokemonDataContext)!.currentPokemonData?.move_list;

    return (
        <div>
            <ul className="element-grid">
            {
                moveList?.map((move) => (
                    <MoveCard move={move} key={move.id} />
                ))
            }
        </ul>
        </div>
    );
}