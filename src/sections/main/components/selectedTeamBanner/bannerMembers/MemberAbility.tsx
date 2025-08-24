import { toPascalCase } from "../../../../../globalHelpers";

import styles from '../../../styles/selectedTeamBanner/selectedMember/bannerMemberAbility.module.css'

export const MemberAbility = ({ ability } : { ability: string}) => {
    return (
        <p className={ styles['pokemon-ability'] }>{ toPascalCase( ability )  || '-'}</p>
    );
}