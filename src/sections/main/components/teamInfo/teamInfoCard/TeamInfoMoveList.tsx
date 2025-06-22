import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";

import styles from '../../../styles/teamInfo/teamInfoMoveList.module.css'

export const TeamInfoMoveList = ({ member } : { member: PokemonTeamMember }) => {
  
    return (
        <ul className={ styles['team-info-move-list'] }>
            <h3>Moves</h3>
            {
                Array.from({ length: 4 }, (_, i) => (
                    member.move_list[i] &&
                    <li key={i}>
                        <p>{ member.move_list[i].name ?? '' }</p>
                    </li>
                ))
            }
        </ul>
    );
}