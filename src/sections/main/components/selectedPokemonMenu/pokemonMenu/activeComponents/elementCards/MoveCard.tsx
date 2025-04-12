import { MoveData } from "../../../../../../../domain/dataEntities";
import { assignMoveTypeToPng, assignPokemonTypeToPng } from "../../../../../../../globalHelpers";

export const MoveCard = ({ move }: { move: MoveData }) => {

    return (
        <li>
            <h3>{move.name}</h3>
            <div>
                <img src={`data:image/jpeg;base64,${assignPokemonTypeToPng(move.pokemon_type)}`}
                    alt={`${move.pokemon_type.toString()}.png`} />
                <img src={`data:image/jpeg;base64,${assignMoveTypeToPng(move.move_type)}`} 
                    alt={`${move.move_type.toString()}.png`} />
            </div>
            <div>
                <h4>Accuracy</h4>
                <h4>PP</h4>
                <h4>Power</h4>
                <span>{move.accuracy}</span>
                <span>{move.description}</span>
                <span>{move.power}</span>
            </div>
            <div>
                <p>{move.description}</p>
            </div>
        </li>
    );
}