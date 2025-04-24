import { JSX, ReactNode } from 'react';

export type SelectedComponentType = {
    selectedComponent: ReactNode,
    switchComponent : React.Dispatch<React.SetStateAction<JSX.Element>>;
}