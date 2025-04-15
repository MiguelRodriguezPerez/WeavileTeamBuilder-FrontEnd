import { ChangeEvent, useContext, useState } from "react";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";

export const MemberMoveInput = ({ moveName, moveIndex } : { moveName : string , moveIndex: number }) => {

    /* Plantea el edge case de que un usuario deje mal tecleado un nombre de movimiento
    Si no existe borralo. Si existe en pascalCase ponlo */

    const [ moveNameState, setMoveNameState ] = useState<string>(moveName);
    const changeAvaliableMoves = useContext(SelectedPokemonDataContext)!.changeAvailableMoves;

    const inputCallback = (event: ChangeEvent<HTMLInputElement>) => {
        // No declares tipo en este valor
        const { target : { value } } = event;        
        changeAvaliableMoves(value);
        setMoveNameState(value);
    }
  
    return (
        <input type="text" value={ moveNameState } onChange={ (event) => { inputCallback(event) } } />
    );
}