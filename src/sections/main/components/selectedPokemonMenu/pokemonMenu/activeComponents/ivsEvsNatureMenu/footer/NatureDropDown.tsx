import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllNaturesRequest } from "../../../../../../../../api/requestNatures";
import { NatureData, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { getNatureTextDisplay } from "../../../../../../helpers/memberIvsEvsNature";
import { useUpdateTeam } from "../../../../../../../../globalHooks/pokemonTeams";


export const NatureDropDown = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();

    const [ natureList, setNatureList ] = useState<NatureData[]>([]);
    useEffect(() => {
        const asyncWrapper = async() => {
            const resultado = await getAllNaturesRequest();
            if (resultado.status === 200) setNatureList(resultado.data);
        }

        asyncWrapper();
    }, []);

    const changeNatureEvent = (event: SelectChangeEvent): void => {
        const updatedNatureString: string = event.target.value;
        const updatedNature: NatureData = natureList.filter( (nature) => nature.name === updatedNatureString)[0];

        const updatedMember: PokemonTeamMember = {
            ...selectedMember,
            nature : updatedNature,
        }
        updateTeamWrapper(updatedMember);
    }
  // atk bien truncar,  hp también
    return (
        natureList && natureList.length > 0 && 
            <Select
            value={ selectedMember.nature!.name }
            onChange={ changeNatureEvent }
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
                    width: '90%',
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