import { useContext } from 'react';
import { MemberCardChildContext } from '../../../../../context/memberCardChild';
import { SelectedComponentContext } from '../../../../../context/selectedMenuComponent/SelectedComponentContext';

import clsx from 'clsx';
import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberTypeCoverageIvsEvsNatureDiv.module.css';


export const MemberTypeCoverageButton = () => {

    const { changeElementType } = useContext(SelectedComponentContext)!;
    const { setSelectedChildEnum } = useContext(MemberCardChildContext)!;

    const onClickWrapper = (): void => {
        changeElementType('memberTypeCoverage');
        setSelectedChildEnum(null);
    }

    return (
        <button
            onClick={ onClickWrapper }
            className={
                clsx (
                    styles['member-type-coverage'],
                    styles['member-card-button']
                )
            }
        >
            Type Coverage
        </button>
    );
};
