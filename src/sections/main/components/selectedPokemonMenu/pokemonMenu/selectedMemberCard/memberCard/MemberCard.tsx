import { MemberItemAbilityDiv } from '../memberItemAbility';
import { MemberMoveList } from '../memberMoves';
import { MemberHeader } from './MemberHeader';
import { MemberTypeCoverageIvsEvsNatureDiv } from './MemberTypeCoverageIvsEvsNatureDiv';
import { DeleteMemberButton } from './DeleteMemberButton';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';


export const MemberCard = () => {

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