import { useEffect } from "react";
import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { useDefaultTeam } from "../../hooks/useDefaultTeam";
import { MissignoMenu } from "./missignoMenu/MissignoMenu";
import { TeamMemberMenu } from "./pokemonMenu";


export const SelectedTeamMemberMenuWrapper = () => {

    const selectedPokemon : PokemonTeamMember | null = useWeavileStore(state => state.selectedPokemonMember);
    const { getDefaultTeam } = useDefaultTeam();

    /* Este efecto originalmente estaba en selectedTeamBanner pero lo tuviste que mover aquí para garantizar
    que el equipo por defecto estuviera disponible antes del renderizado del resto de componentes */

    useEffect(() => {
        const asyncEffectWrapper = async () => {            
             getDefaultTeam();
        }

        asyncEffectWrapper();
    }, []);
    
    
    if (!selectedPokemon || selectedPokemon.name === null) return <MissignoMenu />;
    return <TeamMemberMenu />;
    
}