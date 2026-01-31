import { useQueryClient } from '@tanstack/react-query';

import { PokemonDataApiFactory } from '../../../../../api/requests/pokemonDataApi';
import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";

export const useUpdateTeamCache = () => {

    const queryClient = useQueryClient();
    const pokemonDataApi = PokemonDataApiFactory();

    /* El objetivo de esta función es que al cambiar de equipo se borre la cache de los miembros que no coinciden entre
    los dos equipos, así como solicitar la cache de los miembros del nuevo equipo que no coincidan con los del antiguo  */

    const updateTeamCache = async (oldTeam: PokemonTeam, newTeam: PokemonTeam): Promise<void> => {
        /* Ambos arrays obtienen los nombres de los miembros de ambos equipos. Se filtran los miembros con name null
        porque esos serían objetos vacíos */

        const oldTeamMembers: PokemonTeamMember[] = oldTeam.teamMembers.filter(member => member.pokemon_data_id);
        const newTeamMembers: PokemonTeamMember[] = newTeam.teamMembers.filter(member => member.pokemon_data_id);
        const oldIds = oldTeamMembers.map(m => m.pokemon_data_id!);
        const newIds = newTeamMembers.map(m => m.pokemon_data_id!);
        
        /* Obtiene los ids de los datos de los miembros del antiguo equipo 
        que no están presentes en el nuevo equipo para borrarlos de la cache */
        const oldDataIdsToRemove: number[] = oldIds.filter(id => !newIds.includes(id))
        
        /* Obtiene los ids de los datos de los miembros del nuevo equipo 
        que no están presentes en el antiguo para solicitarlos y guardarlos en la cache */
        const newDataIdsToRequest: number[] = newIds.filter(id => !oldIds.includes(id));


        /* Borra de la cache los ids que no están presentes en el nuevo equipo */
        oldDataIdsToRemove.forEach(pokemon_data_id => {
            queryClient.removeQueries({
                queryKey : [ 'pokemon', pokemon_data_id  ]
            })
        });


        /* Promise.allSettled crea una promesa que se resuelve cuando se resuelvan todas las promesas incluidas.
        Las promesas no se detendrán si una falla 
        En este caso se ejecuta las solicitudes de los miembros del nuevo equipo que no coinciden con el antiguo.
        
        Estás obligado a comprobar si el length es mayor de 0 para impedir disparar una petición vacía */
        if (newDataIdsToRequest.length > 0) {
            await Promise.allSettled( 
                newDataIdsToRequest.map(id =>
                    queryClient.prefetchQuery({
                        queryKey: ['pokemon', id],
                        queryFn: () => pokemonDataApi.getPokemonDataById(id).then(res => res.data),
                        staleTime: Infinity
                    })
                )
            );
        }
    }

    return { updateTeamCache }
 
}