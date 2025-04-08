import { ReactNode, useState } from 'react';
import { SelectedComponentContext } from './SelectedComponentContext';

export const SelectedComponentProvider = ( { children } : {children: ReactNode} ) => {

    const [ activeComponent, setActiveComponent ] = useState<ReactNode | undefined>(undefined);

    return (
        <SelectedComponentContext.Provider 
            value={{selectedComponent: activeComponent, switchComponent: setActiveComponent}}>
                {children}
        </SelectedComponentContext.Provider>
    )
}