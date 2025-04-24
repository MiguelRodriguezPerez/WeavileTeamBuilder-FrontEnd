import { PokemonDataDTO } from "../../../../domain/dataEntities";

export type SelectedPokemonContextType = {
    currentPokemonData: PokemonDataDTO | null;
    changeAvailableMoves: (name : string) => void;
}
