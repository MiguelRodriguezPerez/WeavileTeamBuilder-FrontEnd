import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import { TeamInfoItemAbility, TeamInfoIvsEvsChanges, TeamInfoMoveList, TeamInfoSprite } from "./";


import styles from '../../../styles/teamInfo/teamInfoCard.module.css'

export const TeamInfoCard = ({ member } : { member: PokemonTeamMember }) => {

    console.log(member);
    
  
    return (
        <li className={ styles['team-info-card'] }>
            <TeamInfoSprite member={ member }/>
            <TeamInfoItemAbility member={ member }/>
            <TeamInfoMoveList member={ member } />
            <TeamInfoIvsEvsChanges member={ member } />
        </li>
    );
}