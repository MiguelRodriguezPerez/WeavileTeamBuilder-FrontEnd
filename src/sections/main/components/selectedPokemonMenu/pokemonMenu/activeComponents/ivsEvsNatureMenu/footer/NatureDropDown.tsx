import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
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

    const changeNatureEvent = (event: SelectChangeEvent): void => {
        console.log(event.target.value);
        
    }
  
    return (
        <Select
            value={selectedMember.nature?.name || ''}
            sx={{
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgb(244, 241, 241);',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgb(244, 241, 241);',
                    },
                    '&. MuiList-root' : {
                        padding: 0,
                    },
                    width:'50%',
                    justifySelf: 'end'
            }}
            MenuProps={{
                sx: {
                    "&& .Mui-selected": {
                        backgroundColor: "#28282d",
                    },
                    "&& .MuiMenuItem-root": {
                        backgroundColor: "#28282d"
                    },
                    "&& .hover": {
                        backgroundColor: "#28282d"
                    },
                    "&& .MuiMenu-list": {
                        padding: 0
                    }
                },
        }}
        >
            {
                natureList !== null &&
                natureList.map((nature) => 
                    ( <MenuItem 
                        key={nature.name}
                        value={nature.name}
                        sx={{
                            "& .MuiPaper-root": {
                                backgroundColor: "#28282d"
                            }

                        }}>
                        { getNatureTextDisplay(nature) }
                    </MenuItem> ))
            }
        </Select>
    );
}