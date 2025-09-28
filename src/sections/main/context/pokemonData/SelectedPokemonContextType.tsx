import { PokemonDataDTO } from "../../../../domain/dataEntities";

export type SelectedPokemonContextType = {
    currentPokemonData: PokemonDataDTO | undefined;
    isLoading: boolean;
}
