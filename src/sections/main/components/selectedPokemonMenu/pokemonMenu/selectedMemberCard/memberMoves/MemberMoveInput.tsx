import { useContext, useEffect, useState } from "react";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";
import DeleteIcon from '@mui/icons-material/Delete';
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";
import { useUpdateTeam } from "../../../../../../../globalHooks/pokemonTeams";

import '../../../../../styles/selectedMemberMenu/memberCard/memberMoves.css';

export const MemberMoveInput = ({ moveName, moveIndex } : 
    { moveName : string , moveIndex: number }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();
    const changeSelectedComponent = useContext(SelectedComponentContext)!.changeElementType;
    const [ moveNameState, setMoveNameState ] = useState<string>(moveName);

    /* Parece rídiculo, pero es necesario por si la lista de nodos se vuelve a montar con nuevos moveName,
    porque por la razón que sea useState no es capaz de hacerlo por si solo */
    useEffect(() => {
        setMoveNameState(toPascalCase(moveName)!);
    }, [moveName]);
      
    const inputClickEvent = () => {
        
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
                }}
            />
        </li>
    );
}