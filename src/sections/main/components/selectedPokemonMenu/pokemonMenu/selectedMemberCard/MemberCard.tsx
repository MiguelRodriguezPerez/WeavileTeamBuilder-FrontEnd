import { MemberHeader, MemberMoveList } from ".";
import { MemberItemAbilityDiv } from "./memberItemAbility/MemberItemAbilityDiv";
import { MemberTypeCoverageIvsEvsNatureDiv } from "./memberTypeCoverageIvsEvsNature";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberCard.css';



export const MemberCard = () => {

    return (
        <div className="member-card">
            <MemberHeader />
            <MemberItemAbilityDiv />
            <MemberMoveList />
            <MemberTypeCoverageIvsEvsNatureDiv/>
        </div>
    );
}