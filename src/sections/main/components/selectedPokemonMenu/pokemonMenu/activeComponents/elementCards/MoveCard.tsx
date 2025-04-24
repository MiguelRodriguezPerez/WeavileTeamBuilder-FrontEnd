import { useContext } from "react";
import { MoveData } from "../../../../../../../domain/dataEntities";
import { assignMoveTypeToPng, assignPokemonTypeToPng, toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";
import { useUpdateTeam } from "../../../../../hooks/selectedPokemonMenu";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";

import '../../../../../styles/selectedMemberMenu/elementCards/moveCard.css'

export const MoveCard = ({ moveProp }: { moveProp: MoveData }) => {

    const { updateTeamWrapper } = useUpdateTeam();
    const selectedMember : PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const selectedMemberMove: number | undefined =  useContext(SelectedMoveMemberContext)?.selectedMove;

    const onClickWrapper = (): void => {
        const moveListToUpdate: MoveData[] = selectedMember.move_list;

        if (selectedMemberMove !== undefined) {
            moveListToUpdate[selectedMemberMove!] = moveProp;
        }
        /* Si el usuario no selecciono ningún input de movimiento, loopeara todos los movs.
        El primero que encuentre con un move.name sin definir se lo asignará. */
        else {
            for (let i = 0; i < moveListToUpdate.length; i++) {
                const move = moveListToUpdate[i];
                if (move === undefined || move === null) {
                    moveListToUpdate[i] = moveProp;
                    break;
                }  
            }
        }

        updateTeamWrapper(
            {
                ...selectedMember,
                move_list: moveListToUpdate,
            }
        );
    }

    return (
        <li className="move-card" onClick={ onClickWrapper }>
            <h3>{toPascalCase(moveProp.name)}</h3>
            <div className="moves-img">
                <img src={ assignPokemonTypeToPng(moveProp.pokemon_type) } 
                    alt={ `${moveProp.pokemon_type.toString()}.png` } />
                <img src={ assignMoveTypeToPng(moveProp.move_type) } 
                    alt={ `${moveProp.move_type.toString()}.png` } />
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
                        <td>{ moveProp.accuracy }</td>
                        <td>{ moveProp.pp }</td>
                        <td>{ moveProp.power }</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p>{ moveProp.description }</p>
            </div>
        </li>
    );
}