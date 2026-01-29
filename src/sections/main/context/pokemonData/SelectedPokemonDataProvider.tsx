import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

import { PokemonDataApiFactory } from '../../../../../api/requests/pokemonDataApi';
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "./SelectedPokemonDataContext";

export const SelectedPokemonDataProvider = ({ children }: { children: ReactNode }) => {

  const selectedPokemon = useWeavileStore(state => state.selectedPokemonMember)!;
  const pokemonDataApi = PokemonDataApiFactory();

  const { data, isLoading } = useQuery({
    queryFn: () => pokemonDataApi.getPokemonDataById(selectedPokemon.pokemon_data_id).then(res => res.data),
    enabled: Boolean(selectedPokemon?.pokemon_data_id),
    queryKey: ['pokemon', selectedPokemon?.pokemon_data_id],
    staleTime: 30 * 60 * 1000, // 30 minutos de duración
  });

  console.log(data);


  return (
    <SelectedPokemonDataContext.Provider value={{ currentPokemonData: data, isLoading }}>
      {children}
    </SelectedPokemonDataContext.Provider>
  )
}