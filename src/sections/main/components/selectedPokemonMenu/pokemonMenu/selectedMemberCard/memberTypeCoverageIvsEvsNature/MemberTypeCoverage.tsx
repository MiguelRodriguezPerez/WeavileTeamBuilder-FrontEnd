import { useContext } from 'react';
import { SelectedComponentContext } from '../../../../../context/selectedMenuComponent/SelectedComponentContext';
import '../../../../../styles/selectedMemberMenu/teamMemberMenu/memberCard/memberTypeCoverageIvsEvsNature/memberTypeCoverageIvsEvsNatureCard.css';

export const MemberTypeCoverage = () => {
  
    const { changeElementType } = useContext(SelectedComponentContext)!

    return (
        <button onClick={ () => changeElementType('memberTypeCoverage') } 
            className='member-type-coverage member-card-button'>Type Coverage</button>
    );
}