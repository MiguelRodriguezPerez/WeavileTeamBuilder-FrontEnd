import { PokemonTeam } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { TeamInfoCard } from "./teamInfoCard";

import styles from '../../styles/teamInfo/teamInfoList.module.css'

export const TeamInfoList = () => {

    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam!);
  
    return (
        <ul className={ styles['team-info-list'] }>
            {
                selectedTeam.teamMembers.map(( member, index ) => (
                    // Evita renderizar miembros nulos
                    member.name &&
                    <TeamInfoCard member={ member } key={ index } />
                ))
            }
        </ul>
    );
}