
import { PokemonTeam } from "../../../domain/teamMemberEntities";
import { getAllTeamsLocalStorage } from "./getAllTeamsLocalStorage";

export const storePokemonTeam = (argTeam: PokemonTeam): PokemonTeam => {

    /* This code is to give the teams a default name */
    if (!argTeam.name || argTeam.name === undefined || argTeam.name === '') {
        const allTeams: PokemonTeam[] = getAllTeamsLocalStorage();

        const unamedTeamsNumber: number = allTeams.filter(team => team.name.startsWith("Unamed")).length;
        argTeam.name = `Unamed${unamedTeamsNumber + 1}`;
    }

    /* teams are stored on localStorage using a key between 0 and 14 */
    for (let i: number = 0; i < 15; i++) {
        if (localStorage.getItem(i.toString()) === null) {
            argTeam.id = i;
            localStorage.setItem(i.toString(), JSON.stringify(argTeam));
            return JSON.parse(localStorage.getItem(argTeam.id.toString())!) as PokemonTeam;
        };
    }

    throw new Error("Already stored 15 teams"); 
}