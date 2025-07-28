import { NatureDropDown } from "./NatureDropDown";
import { RemainingEvs } from "./RemainingEvs";

import styles from '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/ivsNatureFooter.module.css'

export const IvsNatureFooter = () => {
  
    return (
        <footer className={styles['ivs-nature-footer']}>
            <RemainingEvs/>
            <NatureDropDown/>
        </footer>
    );
}