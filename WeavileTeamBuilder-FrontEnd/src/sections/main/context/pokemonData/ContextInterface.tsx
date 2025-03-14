import {Dispatch, SetStateAction } from "react";
import { PokemonData } from "../../../../domain/dataEntities";

export interface SelectedPokemonDataContextType {
    currentPokemonData: PokemonData | null;
    setCurrentPokemonData: Dispatch<SetStateAction<PokemonData | null>>;
}
