import { ReactNode } from 'react';

export type SelectedComponentType = {
    selectedComponent: ReactNode,
    changeElementType: (elementType: string) => void,
}