import { PokemonTeam } from "../../../domain/teamMemberEntities";


export const getAllTeamsLocalStorage = (): PokemonTeam[] => {

    const teamsArray: PokemonTeam[] = [];

    for (let i: number = 0; i < 15; i++) {
        if (localStorage.getItem(i.toString()) !== null) {
            const currentTeam: PokemonTeam = JSON.parse(localStorage.getItem(i.toString())!) as PokemonTeam;
            teamsArray.push(currentTeam);
        };
    }

    return teamsArray;
}