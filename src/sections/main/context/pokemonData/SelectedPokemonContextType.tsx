import { PokemonDataDto } from "../../../../domain/dataEntities";

export type SelectedPokemonContextType = {
    currentPokemonData: PokemonDataDto | undefined;
    isLoading: boolean;
}
