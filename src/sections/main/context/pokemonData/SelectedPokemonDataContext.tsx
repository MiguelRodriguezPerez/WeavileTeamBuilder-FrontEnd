import { createContext } from "react";
import { SelectedPokemonContextType } from "./SelectedPokemonContextType";


export const SelectedPokemonDataContext = createContext<SelectedPokemonContextType | undefined>(undefined);
