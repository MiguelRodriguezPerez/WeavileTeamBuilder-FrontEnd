import { useContext } from 'react';
import { SelectedComponentContext } from '../../../../context/selectedMenuComponent/SelectedComponentContext';

import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberTypeCoverageIvsEvsNature/memberTypeCoverageIvsEvsNatureCard.css';
import '../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberTypeCoverageIvsEvsNature/memberTypeCoverageIvsEvsNatureDiv.css';

export const MemberTypeCoverageIvsEvsNatureDiv = () => {

    const { changeElementType } = useContext(SelectedComponentContext)!

    return (
        <div className="member-ivs-evs-nature-type-coverage-div">
            <button onClick={ () => changeElementType('memberTypeCoverage') } 
                className='member-type-coverage member-card-button'>Type Coverage</button>
            <button onClick={ () => changeElementType('memberIvsEvsNature') }
                className='member-ivs-evs-nature member-card-button'>Ivs/Evs/Nature</button>
        </div>
    );
}