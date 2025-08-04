import { useContext } from 'react';
import { SelectedComponentContext } from '.././../../../../context/selectedMenuComponent/SelectedComponentContext';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberTypeCoverageIvsEvsNatureDiv.module.css';
import { MemberTypeCoverageButton, MemberIvsEvsNatureButton } from './';


export const MemberTypeCoverageIvsEvsNatureDiv = () => {

    const { changeElementType } = useContext(SelectedComponentContext)!

    return (
        <div className={ styles['member-ivs-evs-nature-type-coverage-div'] }>
          <MemberTypeCoverageButton/>
          <MemberIvsEvsNatureButton/>
        </div>
    );
}