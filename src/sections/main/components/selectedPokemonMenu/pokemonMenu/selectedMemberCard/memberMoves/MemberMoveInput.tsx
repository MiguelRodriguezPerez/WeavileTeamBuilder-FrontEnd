import { useContext, useEffect, useState } from "react";
import { toPascalCase } from "../../../../../../../globalHelpers";

import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";
import { MoveGrid } from "../../activeComponents";

import DeleteIcon from '@mui/icons-material/Delete';
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { useUpdateTeam } from "../../../../../hooks/selectedPokemonMenu";
import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberMoves.css';
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";


/* isSelectedClassName es un valor booleano que sirve para decidir si se le aplica una clase css
a un nodo. La idea es poner un borde azul sobre el input seleccionado. 
Estoy convencido de que existe una manera más eficiente de hacerlo */

export const MemberMoveInput = ({ moveName, moveIndex } : 
    { moveName : string , moveIndex: number}) => {

    /* Decide más adelante si vas a permitir que el usuario pueda escribir en el input o no */
    // TODO: Outline deleteIcon red

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();
    const changeSelectedMove = useContext(SelectedMoveMemberContext)?.changeSelectedMove;
    const changeSelectedComponent = useContext(SelectedComponentContext)!.changeElementType;
    const [ moveNameState, setMoveNameState ] = useState<string>(moveName);

    /* Parece rídiculo, pero es necesario por si la lista de nodos se vuelve a montar con nuevos moveName,
    porque por la razón que sea useState no es capaz de hacerlo por si solo */
    useEffect(() => {
        setMoveNameState(toPascalCase(moveName));
    }, [moveName]);
      
    const onClickEvent = () => {
        changeSelectedMove!(moveIndex);
        changeSelectedComponent('move')
    }

    const removeMove = () => {
        let updatedMember = selectedMember;
        updatedMember.move_list[moveIndex] = null;

        updateTeamWrapper(updatedMember);
    }
  
    return (
        <li className={`member-moves-li`}>
            <input type="text" readOnly
                value={ moveNameState } 
                onChange={ (event) => { setMoveNameState(event.target.value) } }
                onClick={ onClickEvent } 
            />       
            <DeleteIcon 
                onClick={removeMove}
                sx={{
                    marginTop : '5px',
                    color: 'red[500]'
                }}
            />
        </li>
    );
}