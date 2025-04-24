import { ReactNode, useEffect, useState } from "react";
import { getPokemonByNameRequest } from "../../../../api/pokemonData";
import { PokemonDataDTO } from "../../../../domain/dataEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "./SelectedPokemonDataContext";

export const SelectedPokemonDataProvider = ({ children }: { children: ReactNode }) => {

  const [ pokemonData, setPokemonData ] = useState<PokemonDataDTO | null>(null);
  const selectedPokemon = useWeavileStore(state => state.selectedPokemonMember!);

  useEffect(() => {
    const asyncWrapper = async (): Promise<void> => {
      const request = await getPokemonByNameRequest(selectedPokemon.name);
      if (request.status === 200) setPokemonData(request.data);
    }

    if (selectedPokemon && selectedPokemon.name) asyncWrapper();
    /* Desmonta el efecto por si acaso */
    // return () => { }
  }, [selectedPokemon]);

  const changeMoves = (name: string) => {
    if (!pokemonData) return;
    setPokemonData(
      {
        ...pokemonData,
        move_list: pokemonData!.move_list.filter(move => move.name.toLowerCase().includes(name))
      }
    )
  }


  return (
    <SelectedPokemonDataContext.Provider value={{ currentPokemonData: pokemonData, changeAvailableMoves: changeMoves }}>
      {children}
    </SelectedPokemonDataContext.Provider>
  )
}