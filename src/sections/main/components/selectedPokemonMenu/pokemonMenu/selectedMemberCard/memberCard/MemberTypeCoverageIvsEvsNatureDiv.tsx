import { MemberIvsEvsNatureButton, MemberTypeCoverageButton } from './';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberTypeCoverageIvsEvsNatureDiv.module.css';

export const MemberTypeCoverageIvsEvsNatureDiv = () => {


    return (
        <div className={ styles['member-ivs-evs-nature-type-coverage-div'] }>
          <MemberTypeCoverageButton/>
          <MemberIvsEvsNatureButton/>
        </div>
    );
}