import { PokemonTeam } from "../../../../domain/teamMemberEntities";

export const updateStoredTeam = (updatedTeam: PokemonTeam): PokemonTeam => {

    const idString: string = updatedTeam.id.toString();

    localStorage.setItem(
        idString,
        JSON.stringify(updatedTeam)
    );

    return JSON.parse(localStorage.getItem(idString)!) as PokemonTeam;
}