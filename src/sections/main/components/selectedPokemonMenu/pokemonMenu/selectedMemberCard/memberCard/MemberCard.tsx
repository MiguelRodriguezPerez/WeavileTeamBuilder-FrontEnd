import { MemberCardChildProvider } from '../../../../../context/memberCardChild';
import { MemberItemAbilityDiv } from '../memberItemAbility';
import { MemberMoveList } from '../memberMoves';
import { DeleteMemberButton } from './DeleteMemberButton';
import { MemberHeader } from './MemberHeader';
import { MemberTypeCoverageIvsEvsNatureDiv } from './MemberTypeCoverageIvsEvsNatureDiv';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';


export const MemberCard = () => {

    return (
        <MemberCardChildProvider>
            <section className={styles['member-card-wrapper']}>
                <div className={styles['member-card']}>
                    <MemberHeader />
                    <MemberItemAbilityDiv />
                    <MemberMoveList />
                    <MemberTypeCoverageIvsEvsNatureDiv />
                </div>
                <DeleteMemberButton />
            </section>
        </MemberCardChildProvider>
    );
}