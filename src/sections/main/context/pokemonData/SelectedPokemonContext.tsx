import { createContext } from "react";
import { SelectedPokemonDataContextType } from "./ContextInterface";

export const SelectedPokemonDataContext = createContext<SelectedPokemonDataContextType | undefined>(undefined);
