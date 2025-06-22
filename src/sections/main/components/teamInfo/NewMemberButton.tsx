
import { NavigateFunction, useNavigate } from 'react-router';
import { PokemonTeam, PokemonTeamMember } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';

import styles from '../../styles/teamInfo/newMemberButton.module.css'
import buttonStyles from '../../../../globalStyles/buttons.module.css'

export const NewMemberButton = () => {

    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam!);
    const changeSelectedMember: (member: PokemonTeamMember) => void = useWeavileStore(state => state.changeSelectedPokemon);
    const navigate: NavigateFunction = useNavigate();
    const firstNullMember: PokemonTeamMember | undefined = 
        selectedTeam.teamMembers.find((member) => { return member.name === null } )

    const onClickEvent = (): void => {
        if(firstNullMember) {
            changeSelectedMember(firstNullMember);
            navigate('/');
        }
    }
  
    return (
        firstNullMember &&
        <div className={ styles['new-member-button-div'] }>
            <button className={ buttonStyles['weavile-button'] } onClick={ onClickEvent }>
                <img src="/images/main/teamInfo/plus.png" alt="plus.png"/>
                <span>Add New Member</span>
            </button>
        </div>
    );
}