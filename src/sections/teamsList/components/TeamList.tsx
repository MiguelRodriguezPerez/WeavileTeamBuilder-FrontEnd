import { useEffect, useState } from "react";
import { PokemonTeam } from "../../../domain/teamMemberEntities";
import { getAllTeamsLocalStorage } from "../../../globalHelpers/pokemonTeams/nonLoggedUsers";
import { TeamCard } from "./teamListCard/TeamCard";

import styles from '../styles/teamList.module.css'
import useWeavileStore from "../../../globalContext/WeavileStore";

export const TeamList = () => {

    const selectedTeam = useWeavileStore(state => state.selectedPokemonTeam);
    const [ teamList, setTeamList ] = useState<PokemonTeam[]>([]);

    /* Para garantizar que teamList muestre los equipos actualizados usas como dependencia el equipo seleccionado,
    ya que al crear o borrar un equipo siempre se cambia el equipo seleccionado del contexto */

    useEffect(() => {
        setTeamList(getAllTeamsLocalStorage());
    }, [ selectedTeam ])

    return (
        <ul className={ styles['team-list'] }>
            {
                teamList.map((team) => (<TeamCard team={team} key={team.id} />))
            }
        </ul>
    );
}