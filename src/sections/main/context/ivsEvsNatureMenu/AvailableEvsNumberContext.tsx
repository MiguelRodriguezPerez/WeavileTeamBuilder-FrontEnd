import { createContext } from "react";
import { AvailableEvsNumberType } from './AvailableEvsNumberType';

export const AvailableEvsNumberContext = createContext<AvailableEvsNumberType | undefined>(undefined);