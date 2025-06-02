import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import { TeamCardHeader } from './TeamCardHeader';
import { TeamSpritesList } from './TeamSpritesList';

import '../../styles/teamCard/teamCard.css'

export const TeamCard = ({ team }: { team: PokemonTeam }) => {

    return (
        <li className='team-card'>
            <TeamCardHeader teamName={ team.name } />
            <TeamSpritesList team={ team } />
        </li>
    );
}