import { PokemonDataCache } from "../../../../api/pokemonData";

export type SelectedPokemonContextType = {
    currentPokemonData: PokemonDataCache | null;
    // changeAvailableMoves: (name : string) => void;
}
