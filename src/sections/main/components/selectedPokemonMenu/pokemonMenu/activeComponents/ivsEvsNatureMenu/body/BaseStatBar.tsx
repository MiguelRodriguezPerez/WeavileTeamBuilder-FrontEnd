import { getStatBarWidth } from "../../../../../../helpers/memberIvsEvsNature"


import '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/baseStatBar.css'

export const BaseStatBar = ({ value }: { value: number }) => {

    return (
        <span style={{ width: `${getStatBarWidth(value)}%` }}
            className="base-stat-bar"></span>
    );
}