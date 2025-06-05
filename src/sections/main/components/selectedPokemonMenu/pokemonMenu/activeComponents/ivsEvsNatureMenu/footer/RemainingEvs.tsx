import { useContext } from "react";
import { AvailableEvsNumberContext } from "../../../../../../context/ivsEvsNatureMenu";

import '../../../../../../styles/selectedMemberMenu/memberIvsEvsNature/remainingEvs.css'

export const RemainingEvs = () => {

    const { remainingEvs } = useContext(AvailableEvsNumberContext)!;
  
    return (
        <p className="remaining-evs">{`Remaining evs: ${remainingEvs}`}</p>
    );
}