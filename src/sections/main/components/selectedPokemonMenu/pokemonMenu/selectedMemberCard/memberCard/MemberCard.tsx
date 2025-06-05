import { MemberItemAbilityDiv } from '../memberItemAbility';
import { MemberMoveList } from '../memberMoves';
import { MemberHeader } from './MemberHeader';
import { MemberTypeCoverageIvsEvsNatureDiv } from './MemberTypeCoverageIvsEvsNatureDiv';

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberCard.css';

export const MemberCard = () => {

    return (
        <div className="member-card">
            <MemberHeader />
            <MemberItemAbilityDiv />
            <MemberMoveList />
            <MemberTypeCoverageIvsEvsNatureDiv />
        </div>
    );
}