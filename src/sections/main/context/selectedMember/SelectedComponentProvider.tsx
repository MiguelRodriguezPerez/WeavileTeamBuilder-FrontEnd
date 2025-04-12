import { ReactNode, useState } from 'react';
import { SelectedComponentContext } from './SelectedComponentContext';
import { MoveDataGrid } from '../../components/selectedPokemonMenu/pokemonMenu/activeComponents/elementGrids/MoveDataGrid';

export const SelectedComponentProvider = ( { children } : { children: ReactNode } ) => {

    const [ activeComponent, setActiveComponent ] = useState(<MoveDataGrid/>);

    return (
        <SelectedComponentContext.Provider 
            value={{selectedComponent: activeComponent, switchComponent: setActiveComponent}}>
                {children}
        </SelectedComponentContext.Provider>
    )
}