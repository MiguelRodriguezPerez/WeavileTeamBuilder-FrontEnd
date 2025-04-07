import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { MissignoMenu } from "./missignoMenu/MissignoMenu";
import { TeamMemberMenu } from "./pokemonMenu";


export const SelectedTeamMemberMenuWrapper = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;

    console.log(selectedPokemon);
    

    return (
        <>
            {
                selectedPokemon?.name === null ? <MissignoMenu /> : <TeamMemberMenu/>
            }
        </>
    );
}