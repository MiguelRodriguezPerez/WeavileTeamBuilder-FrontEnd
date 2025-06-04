import { useNavigate } from "react-router";
import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";

export const useTeamCardRedirectEvent = (team: PokemonTeam) => {

    const changeSelectedTeam = useWeavileStore(state => state.changeSelectedTeam);
    const changeSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon);
    const navigate = useNavigate();

    const teamCardRedirectEvent = () => {
        console.log('aaaaaaaaaa');
        
        changeSelectedTeam(team);
        changeSelectedPokemon(team.teamMembers[0]);
        navigate('/')
    }

    return { teamCardRedirectEvent }
}