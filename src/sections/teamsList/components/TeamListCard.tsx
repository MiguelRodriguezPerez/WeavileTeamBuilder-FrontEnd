import { PokemonTeam } from '../../../domain/teamMemberEntities';

import '../styles/teamListCard.css'

export const TeamListCard = ({ team }: { team: PokemonTeam }) => {


    return (
        <li className='team-list-card'>
            <span className='team-name'>{ team.name }</span>
            {
                team.teamMembers.map((member, index) =>
                (
                    <img key={index} 
                    src={member.pc_sprite ? 
                        `data:image/jpeg;base64,${member.pc_sprite}`
                        :
                        'images/main/missignoMenu/missignoIcon.png' } 
                    />
                ))
            }
        </li>
    );
}