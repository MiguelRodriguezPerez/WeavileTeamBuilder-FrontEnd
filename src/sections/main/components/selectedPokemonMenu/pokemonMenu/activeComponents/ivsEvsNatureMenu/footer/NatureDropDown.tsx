import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { NatureApiFactory } from "../../../../../../../../../api/requests/natureApi";
import { NatureDto, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { useUpdateTeam } from "../../../../../../../../globalHooks/pokemonTeams";
import { getNatureTextDisplay } from "../../../../../../helpers/memberIvsEvsNature";


export const NatureDropDown = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();
    const natureApi = NatureApiFactory();

    const { data, isLoading } = useQuery({
        queryKey: ['natureList'],
        queryFn: () => natureApi.getAllNatures().then(res => res.data)
    })

    const changeNatureEvent = (event: SelectChangeEvent): void => {
        const updatedNatureString: string = event.target.value;
        if (!updatedNatureString) return;

        const updatedNature: NatureDto = data!.filter((nature) => nature.name === updatedNatureString)[0];

        const updatedMember: PokemonTeamMember = {
            ...selectedMember,
            nature: updatedNature,
        }
        updateTeamWrapper(updatedMember);
    }
    // atk bien truncar,  hp también
    return (
        !isLoading && data &&
        <Select
            value={selectedMember.nature!.name}
            onChange={changeNatureEvent}
            sx={{
                color: "white",
                '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(244, 241, 241);',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(244, 241, 241);',
                },
                '&. MuiList-root': {
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
                data !== null &&
                data.map((nature) =>
                (<MenuItem
                    key={nature.name}
                    value={nature.name}
                    sx={{
                        "& .MuiPaper-root": {
                            backgroundColor: "#28282d"
                        }

                    }}>
                    {getNatureTextDisplay(nature)}
                </MenuItem>))
            }
        </Select>
    );
}