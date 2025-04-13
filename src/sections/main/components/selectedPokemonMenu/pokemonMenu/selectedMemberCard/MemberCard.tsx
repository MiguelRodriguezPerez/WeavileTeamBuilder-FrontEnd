import { MemberAbility, MemberHeader, MemberItem, MemberIvsEvs, MemberMoveList } from ".";

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberCard.css'


export const MemberCard = () => {

    return (
        <div className="member-card">
            <MemberHeader />
            <div className="member-item-ability">
                <MemberItem />
                <MemberAbility />
            </div>
            <MemberMoveList />
            <MemberIvsEvs />
            <div className="todo-nature"></div>
        </div>
    );
}