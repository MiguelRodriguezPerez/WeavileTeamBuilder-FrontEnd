import { create } from "zustand";
import { WeavileState } from "./WeavileState";
import { PokemonTeam } from '../domain/teamMemberEntities/PokemonTeam';

const useWeavileStore = create<WeavileState>((set) => ({
    selectedPokemonTeam: null,
    changeSelectedTeam: (team) => set({ selectedPokemonTeam: team }),

    selectedPokemonMember: null,
    changeSelectedPokemon: (pokemon) => set({ selectedPokemonMember: pokemon }),
}));

export default useWeavileStore;