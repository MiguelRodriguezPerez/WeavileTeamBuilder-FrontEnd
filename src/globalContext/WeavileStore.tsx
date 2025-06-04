import { create } from "zustand";
import { WeavileState } from "./WeavileState";
import { createJSONStorage, persist } from "zustand/middleware";

/* Casi todo en ts requiere un tipo, en este caso, una interface */

const useWeavileStore = create(persist<WeavileState>(
    (set) => ({
        selectedPokemonTeam: null,
        changeSelectedTeam: (team) => set({ selectedPokemonTeam: team }),
        deleteSelectedTeam: () => set({ selectedPokemonTeam: null }),

        selectedPokemonMember: null,
        changeSelectedPokemon: (pokemon) => set({ selectedPokemonMember: pokemon }),
    }),
    {
        name: 'weavile-state',
        storage: createJSONStorage(() => localStorage),
    },   
));

export default useWeavileStore;