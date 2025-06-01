import { useEffect, useState } from "react";
import { PokemonTeam } from "../../../domain/teamMemberEntities";
import { getAllTeamsLocalStorage } from "../../main/helpers/nonLoggedUser";
import { TeamListCard } from "./TeamListCard";

import '../styles/teamList.css'

export const TeamList = () => {

    const [teamList, setTeamList] = useState<PokemonTeam[]>([]);

    useEffect(() => {
        setTeamList(getAllTeamsLocalStorage());
    }, [])

    return (
        <ul className="team-list">
            {
                teamList.map((team) => (<TeamListCard team={team} key={team.id} />))
            }
        </ul>
    );
}