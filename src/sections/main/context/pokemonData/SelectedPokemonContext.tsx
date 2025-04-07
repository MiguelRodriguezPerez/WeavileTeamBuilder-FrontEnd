import { createContext } from "react";
import { SelectedPokemonContextType } from "./SelectedPokemonContextType";


export const SelectedPokemonContext = createContext<SelectedPokemonContextType| undefined>(undefined);
