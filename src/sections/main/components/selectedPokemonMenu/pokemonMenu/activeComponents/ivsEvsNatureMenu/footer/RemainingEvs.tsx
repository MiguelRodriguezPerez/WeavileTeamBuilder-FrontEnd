import { useContext } from "react";
import { AvailableEvsNumberContext } from "../../../../../../context/ivsEvsNatureMenu";

export const RemainingEvs = () => {

    const { remainingEvs } = useContext(AvailableEvsNumberContext)!;
  
    return (
        remainingEvs &&
        <p>Remaining evs: { remainingEvs }</p>
    );
}