import { ReactNode, useEffect, useState } from "react";
import { getPokemonByNameRequest } from "../../../../api/pokemonData";
import { PokemonDataDTO } from "../../../../domain/dataEntities";
import { SelectedPokemonContext } from "./SelectedPokemonContext";

export const SelectedPokemonDataProvider = ({ children, pokemonName }: { children: ReactNode, pokemonName: string }) => {

  const [ pokemonData, setPokemonData] = useState<PokemonDataDTO | null>(null);

  useEffect(() => {
    const asyncWrapper = async (): Promise<void> => {
      const request = await getPokemonByNameRequest(pokemonName);
      if (request.status === 200) setPokemonData(request.data);
    }

    asyncWrapper();
    /* Desmonta el efecto por si acaso */
    return () => { }
  }, [pokemonName])


  return (
    <SelectedPokemonContext.Provider value={{ currentPokemonData: pokemonData }}>
      {children}
    </SelectedPokemonContext.Provider>
  )
}