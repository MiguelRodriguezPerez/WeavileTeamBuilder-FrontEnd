import { useContext } from "react";
import { AvailableEvsNumberContext } from "../../../../../../context/ivsEvsNatureMenu";

import styles from '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/remainingEvs.module.css'

export const RemainingEvs = () => {

    const { remainingEvs } = useContext(AvailableEvsNumberContext)!;
  
    return (
        <p className={styles['remaining-evs']}>{`Remaining evs: ${remainingEvs}`}</p>
    );
}