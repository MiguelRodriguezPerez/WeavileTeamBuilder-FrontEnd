import { MemberItemAbilityDiv } from '../memberItemAbility';
import { MemberMoveList } from '../memberMoves';
import { MemberHeader } from './MemberHeader';
import { MemberTypeCoverageIvsEvsNatureDiv } from './MemberTypeCoverageIvsEvsNatureDiv';
import { DeleteMemberButton } from './DeleteMemberButton';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';
import { useContext, useRef } from 'react';
import { useDetectClickOutsideEvent } from '../../../../../../../globalHooks/general';
import { SelectedComponentContext } from '../../../../../context/selectedMenuComponent/SelectedComponentContext';


export const MemberCard = () => {

    const wrapperRef = useRef(null);
    const { } = useContext(SelectedComponentContext)!
    useDetectClickOutsideEvent(wrapperRef)

    return (
        <section className={styles['member-card-wrapper']}>
            <div className={styles['member-card']}>
                <MemberHeader />
                <MemberItemAbilityDiv />
                <MemberMoveList />
                <MemberTypeCoverageIvsEvsNatureDiv />
            </div>
            <DeleteMemberButton />
        </section>
    );
}