import { MemberAbility, MemberHeader, MemberItem, MemberIvsEvsNature, MemberMoveList } from ".";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberCard.css'


export const MemberCard = () => {

    return (
        <div className="member-card">
            <MemberHeader />
            <div className="member-div">
                <MemberItem />
                <MemberAbility />
            </div>
            <MemberMoveList />
            <MemberIvsEvsNature />
        </div>
    );
}