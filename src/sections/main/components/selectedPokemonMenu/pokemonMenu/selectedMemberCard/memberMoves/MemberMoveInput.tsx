import { useContext, useEffect, useState } from "react";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";
import DeleteIcon from '@mui/icons-material/Delete';
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";
import { useUpdateTeam } from "../../../../../hooks/selectedPokemonMenu";
import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberMoves.css';

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
      
    const inputClickEvent = () => {
        changeSelectedMove!(moveIndex);
        changeSelectedComponent('move')
    }

    const removeMove = () => {
        let updatedMember = selectedMember;
        updatedMember.move_list[moveIndex] = null;
    }
  
    return (
        <li className={`member-moves-li`}>
            <input type="text" readOnly
                value={ moveNameState } 
                onChange={ (event) => { setMoveNameState(event.target.value) } }
                onClick={ inputClickEvent } 
            />       
            <DeleteIcon 
                onClick={ removeMove }
                sx={{
                    marginTop : '5px',
                    color: 'red[500]'
                }}
            />
        </li>
    );
}