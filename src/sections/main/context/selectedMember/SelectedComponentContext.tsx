
import { createContext } from 'react';
import { SelectedComponentType } from './SelectedComponentType';

export const SelectedComponentContext = createContext<SelectedComponentType | undefined>(undefined)