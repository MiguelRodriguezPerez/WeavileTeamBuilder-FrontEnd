import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import { TeamCardHeader } from './TeamCardHeader';
import { TeamSpritesList } from './TeamSpritesList';

import styles from '../../styles/teamCard/teamCard.module.css';

export const TeamCard = ({ team }: { team: PokemonTeam }) => {

    return (
        <li className={ styles['team-card'] }>
            <TeamCardHeader team={ team } />
            <TeamSpritesList team={ team } />
        </li>
    );
}