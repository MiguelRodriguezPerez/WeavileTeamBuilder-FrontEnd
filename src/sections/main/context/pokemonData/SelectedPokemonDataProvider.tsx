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
    generateTeamDataCache(selectedTeam);
  }, [selectedTeam])

  useEffect(() => {
    setPokemonData(getPokemonDataCache(selectedPokemon.id))
  }, [selectedPokemon]);

  

  // const changeMoves = (name: string) => {
  //   if (!pokemonData) return;
  //   setPokemonData(
  //     {
  //       ...pokemonData,
  //       move_list: pokemonData!.move_list.filter(move => move.name.toLowerCase().includes(name))
  //     }
  //   )
  // }


  return (
    <SelectedPokemonDataContext.Provider value={{ currentPokemonData: pokemonData }}>
      {children}
    </SelectedPokemonDataContext.Provider>
  )
}