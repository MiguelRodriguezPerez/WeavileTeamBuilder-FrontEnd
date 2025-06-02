import { PokemonTeam } from "../../../../domain/teamMemberEntities";

import '../../styles/teamSpritesList.css'

export const TeamSpritesList = ({ team } : { team: PokemonTeam }) => {
  
    return (
        <ul className="team-sprites-list">
            {
                team.teamMembers.map((member, index) =>
                (
                    <li>
                        <img key={index} 
                            src={member.pc_sprite ? 
                                `data:image/jpeg;base64,${member.pc_sprite}`
                                :
                                'images/main/missignoMenu/missignoIcon.png' } 
                            />
                    </li>
                ))
            }
        </ul>
    );
}