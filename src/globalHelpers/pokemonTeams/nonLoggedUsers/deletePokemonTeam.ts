import { PokemonTeam } from "../../../domain/teamMemberEntities/PokemonTeam";

export const deletePokemonTeam = (pokemonTeam: PokemonTeam) => {
    localStorage.removeItem(pokemonTeam.id.toString());
}