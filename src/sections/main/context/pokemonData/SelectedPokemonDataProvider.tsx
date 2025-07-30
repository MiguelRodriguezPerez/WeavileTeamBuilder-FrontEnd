import { ReactNode, useEffect, useState } from "react";
import { PokemonDataCache } from "../../../../api/pokemonData";
import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { generateTeamDataCache, getPokemonDataCache } from "../../../../localStorage/pokemonData";
import { SelectedPokemonDataContext } from "./SelectedPokemonDataContext";

export const SelectedPokemonDataProvider = ({ children }: { children: ReactNode }) => {

  const [ pokemonData, setPokemonData ] = useState<PokemonDataCache | null>(null);
  const selectedTeam: PokemonTeam = useWeavileStore((state) => state.selectedPokemonTeam)!;
  const selectedPokemon = useWeavileStore(state => state.selectedPokemonMember!);


  useEffect(() => {
    // ESTA FUNCIÓN ES ASÍNCRONA
    generateTeamDataCache(selectedTeam);
  }, [selectedTeam])

  useEffect(() => {
    setPokemonData(getPokemonDataCache(selectedPokemon.id))
  }, [selectedPokemon]);



  return (
    <SelectedPokemonDataContext.Provider value={{ currentPokemonData: pokemonData }}>
      {children}
    </SelectedPokemonDataContext.Provider>
  )
}