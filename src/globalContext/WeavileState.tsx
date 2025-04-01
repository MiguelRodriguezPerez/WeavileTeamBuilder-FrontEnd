import { PokemonTeam } from "../domain/teamMemberEntities/PokemonTeam";
import { PokemonTeamMember } from "../domain/teamMemberEntities/PokemonTeamMember";

export interface WeavileState {

    /* Equipo seleccionado y función para cambiar el equipo seleccionado */
    selectedPokemonTeam: PokemonTeam | null
    changeSelectedTeam: (team: PokemonTeam) => void,
    changeSelectedTeamName: (newName: string) => void,
    deleteSelectedTeam: () => void,

    /* Pokemón seleccionado y función para cambiar el pokemón seleccionado */
    selectedPokemonMember: PokemonTeamMember | null,
    changeSelectedPokemon: (pokemon: PokemonTeamMember) => void,

}