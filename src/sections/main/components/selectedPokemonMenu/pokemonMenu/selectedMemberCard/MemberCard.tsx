import { MemberHeader, MemberMoveList, MemberTypeCoverageIvsEvsNatureDiv } from ".";
import { MemberItemAbilityDiv } from "./memberItemAbility/MemberItemAbilityDiv";

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