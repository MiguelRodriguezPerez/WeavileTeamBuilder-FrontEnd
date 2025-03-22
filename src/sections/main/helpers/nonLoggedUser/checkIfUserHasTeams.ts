import { PokemonTeam } from '../../../../domain/teamMemberEntities/PokemonTeam';

/* Al montar el componente de la cabecera del equipo seleccionado necesitas preveer 
la posiblidad de que el usuario no tenga ningún equipo en el localStorage

Mi idea es almacenar los json de los equipos en el localStorage bajo ids númericos como
0, 1, 2, 3 ... hasta 15. Esta función comprueba si existen tales json en el localStorage
y en caso positivo devolverá el primero que encuentre.

Esta función es necesaria para el caso mencionado en el primer parráfo porque
si el usuario no tiene equipos creados necesitarás un useEffect que mande crear uno  */

export const checkIfUserHasTeams = ():  PokemonTeam | null => {

    console.log('Función llamada');
    
    for(let i: number = 0; i < 15; i++) {
        const storedItem = localStorage.getItem(i.toString());
        console.log(i);
        console.log(storedItem);
        
        if(storedItem !== null) {
            console.log('ASCO DE VIDA');
            const parsedItem: PokemonTeam = JSON.parse(storedItem);
            console.log('Parsed Item:', parsedItem);
            return parsedItem;
        }
            
    }

    return null;
}