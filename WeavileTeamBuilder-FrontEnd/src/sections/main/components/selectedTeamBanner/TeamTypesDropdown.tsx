import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { TeamType } from "../../../../domain/enums/TeamType";
import { deletePokemonTeam } from "../../helpers/deletePokemonTeam";
import { createNewTeamRequest } from "../../api";
import { storePokemonTeam } from "../../helpers/storePokemonTeam";

export const TeamTypesDropdown = () => {

    /* Se pueden declarar en una sola línea pero no conseguí que shallow funcionará */
    const current_team_type = useWeavileStore((state) => state.selectedPokemonTeam);
    const deleteSelectedTeam = useWeavileStore((state) => state.deleteSelectedTeam);
    const updateSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);

    const dropDownEvent = async (event: SelectChangeEvent) => {

        const { target: { value } } = event; 
        /* No preguntes porque, pero es la única manera de obtener un enum a través de un string */
        const selectedTeamType = TeamType[value as keyof typeof TeamType];

        if (selectedTeamType != current_team_type?.teamType 
            && selectedTeamType === TeamType.ONEVSONE ) {
                /* En esta línea se da por hecho que siempre será un PokemonTeam
                y nunca null*/
                deletePokemonTeam(current_team_type!);
                deleteSelectedTeam();

                const newTeam = await createNewTeamRequest(selectedTeamType);
                storePokemonTeam(newTeam.data);
                updateSelectedTeam(newTeam.data);
            }
    }

    return (
        <Select
            label='Team Type'
            value={current_team_type?.teamType.toString()}
            onChange={dropDownEvent}
            >
                {
                    // Mapear correctamente los valores del enum
                    Object.values(TeamType).map((type) => (
                    <MenuItem value={type.toString()} key={type.toString()}>
                        {type}
                    </MenuItem>
                    ))
                }
        </Select>
    );
}