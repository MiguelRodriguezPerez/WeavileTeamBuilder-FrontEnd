import { NatureDropDown } from "./NatureDropDown";
import { RemainingEvs } from "./RemainingEvs";

import '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/ivsNatureFooter.css'

export const IvsNatureFooter = () => {
  
    return (
        <footer className="ivs-nature-footer">
            <RemainingEvs/>
            <NatureDropDown/>
        </footer>
    );
}