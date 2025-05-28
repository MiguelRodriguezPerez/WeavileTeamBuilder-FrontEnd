import { MenuItem, Select } from "@mui/material";
import { NatureData, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { useEffect, useState } from "react";
import { getAllNaturesRequest, getNatureByNameRequest } from "../../../../../../../../api/requestNatures";
import { getNatureTextDisplay } from "../../../../../../helpers/memberIvsEvsNature";

export const NatureDropDown = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const [ natureList, setNatureList ] = useState<NatureData[] | null>(null);
    useEffect(() => {
        const asyncWrapper = async() => {
            const resultado = await getAllNaturesRequest();
            if (resultado.status === 200) setNatureList(resultado.data);
        }

        asyncWrapper();
    }, []);
  
    return (
        <Select
            label='Nature'
            value={getNatureTextDisplay(selectedMember.nature!)}
        >
            {
                natureList !== null &&
                natureList.map((nature) => ( <MenuItem value={ getNatureTextDisplay(nature)}>{ getNatureTextDisplay(nature) }</MenuItem> ))
            }
        </Select>
    );
}