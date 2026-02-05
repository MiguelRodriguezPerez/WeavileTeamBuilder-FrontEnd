import { PokemonTeam, PokemonTeamMember } from "../../domain/teamMemberEntities";
import useWeavileStore from "../../globalContext/WeavileStore";
import { TeamType } from "../../domain/enums";
import { storeFirstPokemonTeam } from "../../globalHelpers/pokemonTeams/nonLoggedUsers";
import { createNullMember } from "../../globalHelpers/pokemonTeams/nonLoggedUsers/createNullMember";
import { storePokemonTeam } from '../../globalHelpers/pokemonTeams/nonLoggedUsers/storePokemonTeam';


export const useCreateTeam = () => {
 
    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);     
    const changeSelectedMember = useWeavileStore((state) => state.changeSelectedPokemon);

    /* Las dos funciones hacen exactamente lo mismo, la única diferencia es que createFirstTeam usa el método
    storeFirstPokemonTeam que fuerza que el equipo creado se almacene siempre en localStorage con clave 0.
    Recuerda la race condition del modo estricto */

    const createFirstTeam = (): PokemonTeam => {

        const firstTeam: PokemonTeam = storeFirstPokemonTeam(generateNewTeam());
        changeSelectedTeam(firstTeam);
        changeSelectedMember(firstTeam.teamMembers[0]);      
        
        return firstTeam;
    };

    const generateNewTeam = (): PokemonTeam => {
        const resultado: PokemonTeam = {
            /* storePokemonTeam comprueba si existe un registro en el localStorage con ese id
            Si existe, le asignará otro */
            id: 0,
            // storePokemonTeam le asignará un nombre
            name: '',
            teamMembers: [],
            teamType: TeamType.INDIVIDUAL
        }

        for (let index = 0; index <= 5; index++) {
            const newNullMember: PokemonTeamMember = createNullMember(index);
            resultado.teamMembers[index] = newNullMember;
        }

        return resultado;
    };

    const createNewTeam = () => {
        const team: PokemonTeam = storePokemonTeam(generateNewTeam());

        changeSelectedTeam(team);
        changeSelectedMember(team.teamMembers[0]);      
    }
    
    return { createFirstTeam, createNewTeam };
}
 
