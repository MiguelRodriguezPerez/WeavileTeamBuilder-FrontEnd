import { useQueries, useQueryClient } from '@tanstack/react-query';
import { getPokemonByNameRequest } from "../../../../api/pokemonData";
import { PokemonTeam } from "../../../../domain/teamMemberEntities";

export const useUpdateTeamCache = () => {

    const queryClient = useQueryClient();

    const updateTeamCache = (oldTeam: PokemonTeam, newTeam: PokemonTeam): void => {
        const oldTeamNames: string[] = oldTeam.teamMembers.map(member => member.name).filter(name => name !== null);
        const newTeamNames: string[] = newTeam.teamMembers.map(member => member.name).filter(name => name !== null);

        const namesToRemoveFromCache: string[] = oldTeamNames.filter(oldMemberName => !newTeamNames.includes(oldMemberName))
        const namesToRequest: string[] = newTeamNames.filter(newTeamName => !oldTeamNames.includes(newTeamName));

        namesToRemoveFromCache.forEach(name => {
            queryClient.removeQueries({
                queryKey : [ 'pokemon', name ]
            })
        });

        const queries = useQueries({
            queries: namesToRequest.map(name => ({
                queryKey: [ 'pokemon', name ],
                queryFn: () => getPokemonByNameRequest(name),
                enabled: !!name,
                staleTime: 30 * 60 * 1000,
            }))
        });

    }

    return { updateTeamCache }
 
}