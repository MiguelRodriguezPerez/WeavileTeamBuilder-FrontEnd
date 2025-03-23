import { create } from "zustand";
import { WeavileState } from "./WeavileState";
import { createJSONStorage, persist } from "zustand/middleware";

/* Casi todo en ts requiere un tipo, en este caso, una interface */

const useWeavileStore = create(persist<WeavileState>(
    (set) => ({
        selectedPokemonTeam: null,
        changeSelectedTeam: (team) => set({ selectedPokemonTeam: team }),

        /* DISCLAIMER: Esto fue una idea de chatgpt y estoy convencido de que existe una manera más limpia
        de hacerlo */
        changeSelectedTeamName: (newName: string) =>
            set((state) => ({
                selectedPokemonTeam: state.selectedPokemonTeam
                    ? { ...state.selectedPokemonTeam, name: newName }
                    : null,
        })),
        deleteSelectedTeam: () => set({ selectedPokemonTeam: null }),

        selectedPokemonMember: null,
        changeSelectedPokemon: (pokemon) => set({ selectedPokemonMember: pokemon }),
    }),
    {
        name: 'weavile-state',
        storage: createJSONStorage(() => localStorage), // (opcional) valor por defecto 'localStorage'
    },   
));

export default useWeavileStore;