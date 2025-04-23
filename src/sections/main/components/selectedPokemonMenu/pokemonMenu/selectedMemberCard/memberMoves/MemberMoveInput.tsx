import { useContext, useEffect, useState } from "react";
import { SelectedComponentContext } from "../../../../../context/selectedMember/SelectedComponentContext";
import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";
import { MoveGrid } from "../../activeComponents";
import { toPascalCase } from "../../../../../../../globalHelpers";

export const MemberMoveInput = ({ moveName, moveIndex } : { moveName : string , moveIndex: number }) => {

    /* Plantea el edge case de que un usuario deje mal tecleado un nombre de movimiento
    Si no existe borralo. Si existe en pascalCase ponlo */

    // TODO: Implementar delete move con trash icon

    const changeSelectedMove = useContext(SelectedMoveMemberContext)?.changeSelectedMove;
    const changeSelectedComponent = useContext(SelectedComponentContext)!.switchComponent;
    const [ moveNameState, setMoveNameState ] = useState<string>(moveName);

    /* Parece rídiculo, pero es necesario por si la lista de nodos se vuelve a montar con nuevos moveName,
    porque por la razón que sea useState no es capaz de hacerlo por si solo */
    useEffect(() => {
        setMoveNameState(toPascalCase(moveName));
    }, [moveName]);
      
    const onClickWrapper = () => {
        changeSelectedMove!(moveIndex);
        changeSelectedComponent(<MoveGrid />)
    }
  
    return (
        <input type="text" value={ moveNameState } 
            onChange={ (event) => { setMoveNameState(event.target.value) } }
            onClick={ onClickWrapper } />
    );
}