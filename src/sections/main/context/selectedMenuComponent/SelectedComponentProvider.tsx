import { ReactNode, useState } from 'react';
import { SelectedElementWrapper } from '../../components/selectedPokemonMenu/pokemonMenu/activeComponents/SelectedElementWrapper';
import { SelectedComponentContext } from './SelectedComponentContext';

export const SelectedComponentProvider = ({ children }: { children: ReactNode }) => {

    const [ activeComponent, setActiveComponent ] = useState(<SelectedElementWrapper elementType='move' />);

    const changeElementType = ( elementType: string ) => {
        setActiveComponent(
            <SelectedElementWrapper elementType={ elementType } />
        )
    }

    return (
        <SelectedComponentContext.Provider
            value={{ 
                selectedComponent: activeComponent, 
                changeElementType: changeElementType 
            }}>
            {children}
        </SelectedComponentContext.Provider>
    )
}