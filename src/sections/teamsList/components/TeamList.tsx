import { useEffect, useState } from "react";
import { PokemonTeam } from "../../../domain/teamMemberEntities";
import { getAllTeamsLocalStorage } from "../../main/helpers/nonLoggedUser";
import { TeamCard } from "./teamListCard/TeamCard";

import '../styles/teamList.css'

export const TeamList = () => {

    const [teamList, setTeamList] = useState<PokemonTeam[]>([]);

    useEffect(() => {
        setTeamList(getAllTeamsLocalStorage());
    }, [])

    return (
        <ul className="team-list">
            {
                teamList.map((team) => (<TeamCard team={team} key={team.id} />))
            }
        </ul>
    );
}