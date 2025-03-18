import { create } from "zustand";
import { WeavileState } from "./WeavileState";

/* Casi todo en ts requiere un tipo, en este caso, una interface */

const useWeavileStore = create<WeavileState>((set) => ({
    selectedPokemonTeam: null,
    changeSelectedTeam: (team) => set({ selectedPokemonTeam: team }),
    deleteSelectedTeam: () => set({ selectedPokemonTeam: null}),

    selectedPokemonMember: null,
    changeSelectedPokemon: (pokemon) => set({ selectedPokemonMember: pokemon }),
}));

export default useWeavileStore;