import { PokemonTeam } from '../../../../domain/teamMemberEntities/PokemonTeam';
import { getAllTeamsLocalStorage } from "./getAllTeamsLocalStorage";

export const storePokemonTeam = (argTeam: PokemonTeam): PokemonTeam => {

    // Renombrar unamed1, unamed2 ...
    if (!argTeam.name || argTeam.name === undefined || argTeam.name === '') {
        const allTeams: PokemonTeam[] = getAllTeamsLocalStorage();

        const unamedTeamsNumber: number = allTeams.filter(team => team.name.startsWith("Unamed")).length;
        argTeam.name = `Unamed${unamedTeamsNumber + 1}`;
    }

    /* Para poder borrar y manipular los equipos pokemón "persistidos" en el localStorage
    tienes que poder acceder a ellos de alguna manera emulando el id que tendrían en una base de datos.
    
    La manera que se me ocurrio es asignandoles un id númerico y luego usar ese mismo id para determinar
    su ubicación en el localStorage*/

    for (let i: number = 0; i < 15; i++) {
        if (localStorage.getItem(i.toString()) === null) {
            argTeam.id = i;
            localStorage.setItem(i.toString(), JSON.stringify(argTeam));
            break;
        };

        if (i = 15) throw new Error("Already stored 15 teams");
    }

    return JSON.parse(localStorage.getItem(argTeam.id.toString())!) as PokemonTeam;
}