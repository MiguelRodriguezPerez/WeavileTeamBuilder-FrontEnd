import { MemberAbility } from './MemberAbility';
import { MemberItem } from './MemberItem';

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberItemAbility/memberItemAbilityDiv.css';

export const MemberItemAbilityDiv = () => {
  
    return (
        <div className="member-item-ability-div">
            <MemberItem />
            <MemberAbility />
        </div>
    );
}