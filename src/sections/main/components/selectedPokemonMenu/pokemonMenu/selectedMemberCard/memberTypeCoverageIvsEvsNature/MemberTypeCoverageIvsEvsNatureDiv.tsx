
import { MemberIvsEvsNature } from './MemberIvsEvsNature';
import { MemberTypeCoverage } from './MemberTypeCoverage';

import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberTypeCoverageIvsEvsNature/memberTypeCoverageIvsEvsNatureDiv.css';

export const MemberTypeCoverageIvsEvsNatureDiv = () => {

    return (
        <div className="member-ivs-evs-nature-type-coverage-div">
            <MemberTypeCoverage />
            <MemberIvsEvsNature />
        </div>
    );
}