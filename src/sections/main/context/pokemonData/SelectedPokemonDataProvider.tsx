import { ReactNode, useState } from "react";
import { PokemonData } from "../../../../domain/dataEntities";
import { SelectedPokemonDataContext } from "./SelectedPokemonContext";

export const SelectedPokemonDataProvider = ( { children } : { children : ReactNode }) => {

    const [ currentPokemonData, setCurrentPokemonData ] = useState<PokemonData | null >(null);

    return (
        <SelectedPokemonDataContext.Provider value = { { currentPokemonData,  setCurrentPokemonData  }}>
            { children }
        </SelectedPokemonDataContext.Provider>
    )
}