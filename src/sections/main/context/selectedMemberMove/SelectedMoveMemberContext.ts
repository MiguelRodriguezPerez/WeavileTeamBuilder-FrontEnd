import { createContext } from "react";
import { SelectedMoveMemberType } from './SelectedMoveMemberType';

export const SelectedMoveMemberContext = createContext< SelectedMoveMemberType | undefined>(undefined);