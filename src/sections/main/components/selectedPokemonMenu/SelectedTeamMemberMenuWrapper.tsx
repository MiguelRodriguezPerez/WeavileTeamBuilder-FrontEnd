import { useEffect } from "react";
import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { useCreateTeam } from "../../../../globalHooks/pokemonTeams";
import { checkIfUserHasTeams } from "../../../../globalHelpers/pokemonTeams/nonLoggedUsers";
import { MissignoMenu } from "./missignoMenu/MissignoMenu";
import { TeamMemberMenu } from "./pokemonMenu";


export const SelectedTeamMemberMenuWrapper = () => {

    const selectedPokemon : PokemonTeamMember | null = useWeavileStore(state => state.selectedPokemonMember);
    const { createFirstTeam } = useCreateTeam();

    /* Este efecto originalmente estaba en selectedTeamBanner pero lo tuviste que mover aquí para garantizar
    que el equipo por defecto estuviera disponible antes del renderizado del resto de componentes */

    useEffect(() => {     
        if (!checkIfUserHasTeams()) createFirstTeam();
    }, []);
    
    
    return (!selectedPokemon || selectedPokemon.name === null) ? 
        <MissignoMenu />
        : 
        <TeamMemberMenu />
    
}