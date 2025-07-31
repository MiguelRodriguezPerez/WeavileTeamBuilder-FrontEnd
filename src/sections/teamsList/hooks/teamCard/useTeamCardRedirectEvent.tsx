import { useNavigate } from "react-router";
import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { useUpdateTeamCache } from "../../../main/hooks/cache";

export const useTeamCardRedirectEvent = (team: PokemonTeam) => {

    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;
    const changeSelectedTeam = useWeavileStore(state => state.changeSelectedTeam);
    const changeSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon);
    const navigate = useNavigate();
    const { updateTeamCache } = useUpdateTeamCache();

    const teamCardRedirectEvent = async () => {
        await updateTeamCache(selectedTeam,team);
        changeSelectedTeam(team);
        changeSelectedPokemon(team.teamMembers[0]);
        navigate('/')
    }

    return { teamCardRedirectEvent }
}