import { toPascalCase } from "../../../../../globalHelpers";

import styles from '../../../styles/selectedTeamBanner/selectedMember/bannerMemberName.module.css'

export const MemberName = ({ name } : { name: string }) => {
    
    return (
        <p className={styles['banner-member-name']}>{ toPascalCase(name) }</p>
    );
}