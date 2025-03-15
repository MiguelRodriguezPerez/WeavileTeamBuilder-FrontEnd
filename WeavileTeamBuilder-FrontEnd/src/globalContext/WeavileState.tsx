import { PokemonTeam } from "../domain/teamMemberEntities/PokemonTeam";
import { PokemonTeamMember } from "../domain/teamMemberEntities/PokemonTeamMember";

export interface WeavileState {

    selectedPokemonTeam: PokemonTeam[] | null
    changeSelectedTeam: (team: PokemonTeam[]) => void
    
    selectedPokemonMember: PokemonTeamMember | null
    changeSelectedPokemon: (pokemon: PokemonTeamMember) => void

}