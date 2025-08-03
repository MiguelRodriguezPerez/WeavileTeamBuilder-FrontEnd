import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { getPokemonByNameRequest } from "../../../../api/pokemonData";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "./SelectedPokemonDataContext";

export const SelectedPokemonDataProvider = ({ children }: { children: ReactNode }) => {

  const selectedPokemon = useWeavileStore(state => state.selectedPokemonMember!);

  const { data, isLoading } = useQuery({
    queryFn: () => getPokemonByNameRequest(selectedPokemon.name!),
    queryKey: [ 'pokemon', selectedPokemon.name],
    enabled: !!selectedPokemon?.name,
    staleTime: 30 * 60 * 1000, // 30 minutos de duración
  });
  

  return (
    <SelectedPokemonDataContext.Provider value={{ currentPokemonData: data?.data , isLoading }}>
      { children }
    </SelectedPokemonDataContext.Provider>
  )
}