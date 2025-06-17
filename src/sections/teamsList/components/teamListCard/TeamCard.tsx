import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import { TeamCardHeader } from './TeamCardHeader';
import { TeamSpritesList } from './TeamSpritesList';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { useNavigate } from 'react-router';

import styles from '../../styles/teamCard/teamCard.module.css'

export const TeamCard = ({ team }: { team: PokemonTeam }) => {

    const { changeSelectedTeam, changeSelectedPokemon } = useWeavileStore(state => state)!;
    const navigate = useNavigate();

    const teamCardEvent = () => {
        changeSelectedTeam(team);
        changeSelectedPokemon(team.teamMembers[0]);
        navigate('/')
    }

    return (
        <li className={ styles['team-card'] }>
            <TeamCardHeader team={ team } />
            <TeamSpritesList team={ team } />
        </li>
    );
}