import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { PokemonTeamApiFactory } from "../../../../../api/requests/teamApi";
import { TeamType } from "../../../../domain/enums/TeamType";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { deletePokemonTeam, storeFirstPokemonTeam } from "../../../../globalHelpers/pokemonTeams/nonLoggedUsers";


export const TeamTypesDropdown = () => {

    const pokemonTeamApi = PokemonTeamApiFactory();

    /* Se pueden declarar en una sola línea pero no conseguí que shallow funcionará */
    const current_team_type = useWeavileStore((state) => state.selectedPokemonTeam);
    const deleteSelectedTeam = useWeavileStore((state) => state.deleteSelectedTeam);
    const updateSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);

    const dropDownEvent = async (event: SelectChangeEvent) => {

        const { target: { value } } = event;
        /* No preguntes porque, pero es la única manera de obtener un enum a través de un string */
        const selectedTeamType = TeamType[value as keyof typeof TeamType];

        if (selectedTeamType != current_team_type?.teamType
            && selectedTeamType === TeamType.ONEVSONE) {
            /* En esta línea se da por hecho que siempre será un PokemonTeam
            y nunca null*/
            deletePokemonTeam(current_team_type!);
            deleteSelectedTeam();

            const newTeam = await pokemonTeamApi.createNewTeam();
            storeFirstPokemonTeam(newTeam.data);
            updateSelectedTeam(newTeam.data);
        }
    }

    return (
        <Select
            label='Team Type'
            value={current_team_type?.teamType.toString()}
            onChange={dropDownEvent}
        >
            {// Filtrar solo las claves que corresponden a los nombres, no los índices numéricos
                Object.keys(TeamType)
                    .filter((key) => isNaN(Number(key)))
                    .map((key) => (
                        <MenuItem value={key} key={key}>
                            {key}
                        </MenuItem>
                    ))
            }

        </Select>
    );
}