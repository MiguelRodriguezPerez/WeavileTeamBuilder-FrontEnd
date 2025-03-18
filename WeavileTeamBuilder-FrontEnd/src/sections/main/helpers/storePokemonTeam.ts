import { PokemonTeam } from "../../../domain/teamMemberEntities/PokemonTeam";

export const storePokemonTeam = (pokemonTeam: PokemonTeam): void => {

    /* Para poder borrar y manipular los equipos pokemón "persistidos" en el localStorage
    tienes que poder acceder a ellos de alguna manera emulando el id que tendrían en una base de datos.
    
    La manera que se me ocurrio es asignandoles un id númerico y luego usar ese mismo id para determinar
    su ubicación en el localStorage*/

    for(let i: number = 0; i < 14; i++) {
        if(localStorage.getItem(i.toString()) === null) {
            pokemonTeam.id = i;
            localStorage.setItem(i.toString(), JSON.stringify(pokemonTeam));
        };
    }

    throw new Error("Already stored 15 teams");
}