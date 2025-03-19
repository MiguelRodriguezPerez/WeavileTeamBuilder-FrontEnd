import { PokemonTeam } from '../../../domain/teamMemberEntities/PokemonTeam';

/* Al montar el componente de la cabecera del equipo seleccionado necesitas preveer 
la posiblidad de que el usuario no tenga ningún equipo en el localStorage

Mi idea es almacenar los json de los equipos en el localStorage bajo los nombres de
e0, e1, e2, e3 ... hasta e15. Esta función comprueba si existen tales json en el localStorage
y en caso positivo devolverá el primero que encuentre.

Esta función es necesaria para el caso mencionado en el primer parráfo porque
si el usuario no tiene equipos creados necesitarás un useEffect que mande crear uno  */

export const checkIfUserHasTeams = ():  PokemonTeam | boolean => {

    for(let i: number = 0; i < 15; i++) {
        if(localStorage.getItem(`e${0}`) != null)
            return JSON.parse(localStorage.getItem(`e${0}`)!);
    }

    return false;
}