import { MoveData } from "../../../../../../../domain/dataEntities";
import { MoveCard } from "../elementCards";

export const MoveDataGrid = ({ moveList } : { moveList: MoveData[] }) => {
  
    return (
        <ul>
            {
                moveList.map((move) => (
                    <MoveCard move={move} key={move.id}/>
                ))
            }
        </ul>
    );
}