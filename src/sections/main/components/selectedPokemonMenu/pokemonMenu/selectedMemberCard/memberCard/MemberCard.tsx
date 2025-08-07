import { MemberItemAbilityDiv } from '../memberItemAbility';
import { MemberMoveList } from '../memberMoves';
import { DeleteMemberButton } from './DeleteMemberButton';
import { MemberHeader } from './MemberHeader';
import { MemberTypeCoverageIvsEvsNatureDiv } from './MemberTypeCoverageIvsEvsNatureDiv';
import { useDetectClickOutsideEvent } from '../../../../../hooks/selectedPokemonMenu';
import { useRef } from 'react';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';


export const MemberCard = () => {

    const wrapperRef = useRef(null);
    useDetectClickOutsideEvent(wrapperRef);

    return (
            <section ref={ wrapperRef } className={styles['member-card-wrapper']}>
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