import { MemberAbilitiesDropdown, MemberHeader, MemberItem, MemberIvsEvs, MemberMoveList } from ".";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard.css'


export const MemberCard = () => {

    return (
        <div className="member-card">
            <MemberHeader />
            <MemberItem />
            <MemberAbilitiesDropdown />
            <MemberMoveList />
            <MemberIvsEvs />
        </div>
    );
}