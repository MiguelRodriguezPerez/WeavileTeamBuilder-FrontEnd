import { MoveData } from "../../../../../../../domain/dataEntities";
import { assignMoveTypeToPng, assignPokemonTypeToPng, toPascalCase } from "../../../../../../../globalHelpers";

import '../../../../../styles/selectedMemberMenu/elementCards/moveCard.css'

export const MoveCard = ({ move }: { move: MoveData }) => {

    return (
        <li className="move-card">
            <h3>{toPascalCase(move.name)}</h3>
            <div className="moves-img">
                <img src={assignPokemonTypeToPng(move.pokemon_type)} 
                    alt={`${move.pokemon_type.toString()}.png`} />
                <img src={assignMoveTypeToPng(move.move_type)} 
                    alt={`${move.move_type.toString()}.png`} />
            </div>
            <table>
               <thead>
                <tr>
                    <th>Accuracy</th>
                    <th>PP</th>
                    <th>Power</th>
                </tr>
               </thead>
                <tbody>
                    <tr>
                        <td>{move.accuracy}</td>
                        <td>{move.pp}</td>
                        <td>{move.power}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p>{move.description}</p>
            </div>
        </li>
    );
}