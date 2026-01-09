import { useQueryClient } from '@tanstack/react-query';

import { PokemonDataApiFactory } from '../../../../../api/requests/pokemonDataApi';
import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import { toPascalCase } from '../../../../globalHelpers';

export const useUpdateTeamCache = () => {

    const queryClient = useQueryClient();
    const pokemonDataApi = PokemonDataApiFactory();

    /* El objetivo de esta función es que al cambiar de equipo se borre la cache de los miembros que no coinciden entre
    los dos equipos, así como solicitar la cache de los miembros del nuevo equipo que no coincidan con los del antiguo  */

    const updateTeamCache = async (oldTeam: PokemonTeam, newTeam: PokemonTeam): Promise<void> => {
        /* Ambos arrays obtienen los nombres de los miembros de ambos equipos. Se filtran los miembros con name null
        porque esos serían objetos vacíos */

        const oldTeamNames: string[] = oldTeam.teamMembers.map(member => member.name).filter(name => name !== null);
        const newTeamNames: string[] = newTeam.teamMembers.map(member => member.name).filter(name => name !== null);

        /* Obtiene los nombres de los miembros del antiguo equipo que no están presentes en el nuevo equipo 
        para borrarlos de la cache */
        const namesToRemoveFromCache: string[] = oldTeamNames.filter(oldMemberName => !newTeamNames.includes(oldMemberName))
            .map(name => toPascalCase(name));
        /* Obtiene los nombres de los miembros del nuevo equipo que no están presentes en el antiguo
        para solicitarlos y guardarlos en la cache */
        const namesToRequest: string[] = newTeamNames.filter(newTeamName => !oldTeamNames.includes(newTeamName))
            .map(name => toPascalCase(name));

        /* Borra de la cache los nombres que no están presentes en el nuevo equipo */
        namesToRemoveFromCache.forEach(name => {
            queryClient.removeQueries({
                queryKey : [ 'pokemon', name ]
            })
        });


        /* Promise.all crea una promesa que se resuelve cuando se resuelvan todas las promesas incluidas o cuando una de 
        ellas falle. 
        En este caso se ejecuta las solicitudes de los miembros del nuevo equipo que no coinciden con el antiguo*/
        await Promise.all(
            namesToRequest.map(name =>
                queryClient.prefetchQuery({
                    queryKey: ['pokemon', name],
                    queryFn: () => pokemonDataApi.getPokemonByName(name).then(res => res.data),
                    staleTime: 30 * 60 * 1000
                })
            )
        );
    }

    return { updateTeamCache }
 
}