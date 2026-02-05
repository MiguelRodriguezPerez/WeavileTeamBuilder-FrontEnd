import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import { useTeamCardRedirectEvent } from "../../hooks/teamCard";

import styles from '../../styles/teamSpritesList.module.css';

export const TeamSpritesList = ({ team } : { team: PokemonTeam }) => {
  
    const { teamCardRedirectEvent } = useTeamCardRedirectEvent(team);

    return (
        <ul className={ styles['team-sprites-list'] } onClick={ teamCardRedirectEvent }>
            {
                team.teamMembers.map((member, index) =>
                (
                    <li key={ index } >
                        <img 
                            src={member.pc_sprite ? 
                                `data:image/jpeg;base64,${member.pc_sprite}`
                                :
                                'images/ui/missignoIcon.png' } 
                            />
                    </li>
                ))
            }
        </ul>
    );
}