import { ReactNode, useState } from 'react';
import { SelectedComponentContext } from './SelectedComponentContext';
import { MoveGrid } from '../../components/selectedPokemonMenu/pokemonMenu/activeComponents/elementGrids/MoveGrid';

export const SelectedComponentProvider = ({ children }: { children: ReactNode }) => {

    const [activeComponent, setActiveComponent] = useState(<MoveGrid />);

    return (
        <SelectedComponentContext.Provider
            value={{ selectedComponent: activeComponent, switchComponent: setActiveComponent }}>
            {children}
        </SelectedComponentContext.Provider>
    )
}