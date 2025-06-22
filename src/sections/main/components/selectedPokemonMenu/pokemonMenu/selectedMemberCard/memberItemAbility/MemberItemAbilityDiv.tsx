import { MemberAbility } from './MemberAbility';
import { MemberItem } from './MemberItem';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberItemAbility/memberItemAbilityDiv.module.css';

export const MemberItemAbilityDiv = () => {
  
    return (
        <div className={ styles['member-item-ability-div'] }>
            <MemberItem />
            <MemberAbility />
        </div>
    );
}