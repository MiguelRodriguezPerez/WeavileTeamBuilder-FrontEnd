import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import { TeamInfoItemAbility, TeamInfoIvsEvsChanges, TeamInfoMoveList, TeamInfoSprite } from "./";

import styles from '../../../styles/teamInfo/teamInfoCard.module.css'
import useWeavileStore from "../../../../../globalContext/WeavileStore";
import { useNavigate } from 'react-router';

export const TeamInfoCard = ({ member } : { member: PokemonTeamMember }) => {

    const changeSelectedMember = useWeavileStore(state => state.changeSelectedPokemon);
    const navigate =  useNavigate();

    const clickEvent = (): void => {
        changeSelectedMember(member);
        navigate('/');
    }
  
    return (
        <li className={ styles['team-info-card'] } onClick={ clickEvent }>
            <TeamInfoSprite member={ member }/>
            <TeamInfoItemAbility member={ member }/>
            <TeamInfoMoveList member={ member } />
            <TeamInfoIvsEvsChanges member={ member } />
        </li>
    );
}