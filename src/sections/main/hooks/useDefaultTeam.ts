import { TeamType } from "../../../domain/enums";
import { PokemonTeam } from "../../../domain/teamMemberEntities";
import useWeavileStore from '../../../globalContext/WeavileStore';
import { createNewTeamRequest } from "../api/nonLoggedUsers";
import { checkIfUserHasTeams, storeFirstPokemonTeam } from "../helpers/nonLoggedUser";

/* Originalmente querías usar storePokemonTeam para guardar el primer equipo, pero el modo estricto 
dispara el efecto dos veces y se supone que debería ocurrir lo siguiente en el primer render:

1. Se dispara el efecto con getDefaultTeam
2. getDefaultTeam a través de checkIfUserHasTeams() comprueba si existen equipos en el localStorage
3. checkIfUserHasTeams() comprueba que no existen equipos en el localStorage
4. Y por tanto se crea el primer equipo

Y en el segundo render debería ocurrir lo siguiente:

1. Se dispara el efecto con getDefaultTeam
2. getDefaultTeam a través de checkIfUserHasTeams() comprueba si existen equipos en el localStorage
3. checkIfUserHasTeams() comprueba que si existe un equipo en el localStorage
4. checkIfUserHasTeams() devuelve el primer equipo parseado

Pero por la razón que sea (race condition + petición asíncrona?) en el rerender del modo estricto 
no detecta los cambios en el localStorage provocando que cree dos equipos 
y además por la razón que sea, el estado global de zustand se desincroniza
(SelectedTeamBanner cree que el equipo seleccionado es el primer equipo creado, 
pero MissignoGrid cree que es el segundo equipo creado, el del rerender)

La única solución que se me ha ocurrido es crear un método exclusivamente 
para almacenar el primer equipo (storeFirstPokemonTeam()). 
¿Cómo? Forzando que al hacer localStorage.setItem() siempre cambie el item con key 0. 
A saber cúal es la solución correcta */

export const useDefaultTeam = () => {

    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);     
    const changeSelectedMember = useWeavileStore((state) => state.changeSelectedPokemon);

    const getDefaultTeam = async(): Promise<PokemonTeam> => {
        const result: PokemonTeam | null = checkIfUserHasTeams();
        
        if (result !== null) return result;
        else {
            const response = await createNewTeamRequest(); // Server side works fine
            if (response.status === 201) {
                const firstTeam: PokemonTeam = storeFirstPokemonTeam(response.data);
                changeSelectedTeam(firstTeam);
                changeSelectedMember(firstTeam.teamMembers[0]);      
                
                return firstTeam;
            } 
            else throw new Error("Error creating default first pokemon " + response.statusText);
        };
    }

    return { getDefaultTeam };
    
};
