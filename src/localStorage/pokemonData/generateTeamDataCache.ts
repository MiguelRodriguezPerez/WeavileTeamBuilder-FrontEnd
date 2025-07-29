import { getPokemonByNameRequest } from "../../api/pokemonData";
import { PokemonTeam } from "../../domain/teamMemberEntities";
import { generateNullPokemonDataCache } from "./generateNullPokemonDataCache";
import { updateMemberDataCache } from "./updateMemberDataCache";

export const generateTeamDataCache = async (team: PokemonTeam): Promise<void> => {

    generateNullPokemonDataCache();

    for (let i = 0; i <= 5; i++) {
        if (team.teamMembers[i].name !== null) {
            const request = await getPokemonByNameRequest(team.teamMembers[i].name!);
            if (request.status === 200) updateMemberDataCache(i, request.data);
        }
    }

}