import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

import { PokemonDataApiFactory } from '../../../../../api/requests/pokemonDataApi';
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "./SelectedPokemonDataContext";

export const SelectedPokemonDataProvider = ({ children }: { children: ReactNode }) => {

  const selectedPokemon = useWeavileStore(state => state.selectedPokemonMember);
  const pokemonDataApi = PokemonDataApiFactory();

  const { data, isLoading } = useQuery({
    queryFn: () => pokemonDataApi.getPokemonByName(selectedPokemon?.name!).then(res => res.data),
    enabled: !!selectedPokemon?.name,
    queryKey: [ 'pokemon', selectedPokemon?.name ],
    staleTime: 30 * 60 * 1000, // 30 minutos de duración
  });


  return (
    <SelectedPokemonDataContext.Provider value={{ currentPokemonData: data! , isLoading }}>
      { children }
    </SelectedPokemonDataContext.Provider>
  )
}