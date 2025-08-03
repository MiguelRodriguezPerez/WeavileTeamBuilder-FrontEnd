import { PokemonDataCache } from "../../../../api/pokemonData";

export type SelectedPokemonContextType = {
    currentPokemonData: PokemonDataCache | undefined;
    isLoading: boolean;
}
