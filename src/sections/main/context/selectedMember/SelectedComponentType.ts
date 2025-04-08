import { ReactNode } from 'react';

export type SelectedComponentType = {
    selectedComponent: ReactNode,
    switchComponent : (component: ReactNode) => void,
}