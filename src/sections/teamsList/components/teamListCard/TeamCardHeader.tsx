
import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import { useTeamCardRedirectEvent } from '../../hooks/teamCard';
import { DeleteTeamPng } from './DeleteTeamPng';

import '../../styles/teamCard/teamCardHeader.css'

export const TeamCardHeader = ({ team } : { team: PokemonTeam }) => {

    const { teamCardRedirectEvent } = useTeamCardRedirectEvent(team);
  
    return (
        <div className="team-card-header">
           <h4 className='team-name' onClick={ () => teamCardRedirectEvent }>{ team.name }</h4>
           <DeleteTeamPng/>
        </div>
    );
}