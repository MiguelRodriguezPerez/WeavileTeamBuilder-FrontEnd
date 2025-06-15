
import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import { useTeamCardRedirectEvent } from '../../hooks/teamCard';
import { DeleteTeamPng } from './DeleteTeamPng';

import styles from '../../styles/teamCard/teamCardHeader.module.css'

export const TeamCardHeader = ({ team } : { team: PokemonTeam }) => {

    const { teamCardRedirectEvent } = useTeamCardRedirectEvent(team);
  
    return (
        <div className={ styles['team-card-header']}>
           <h4 onClick={ () => teamCardRedirectEvent }>{ team.name }</h4>
           <DeleteTeamPng/>
        </div>
    );
}