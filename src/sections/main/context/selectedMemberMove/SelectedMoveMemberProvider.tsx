import { ReactNode, useState } from 'react';
import { SelectedMoveMemberContext } from './SelectedMoveMemberContext';

export const SelectedMoveMemberProvider = ( { children } : { children : ReactNode }) => {
    
    const [ selectedMove, setSelectedMove ] = useState<number>(0);

    return (
        <SelectedMoveMemberContext.Provider 
            value={{
                selectedMove : selectedMove,
                changeSelectedMove : setSelectedMove
            }}>
            { children }
        </SelectedMoveMemberContext.Provider>
    )
}