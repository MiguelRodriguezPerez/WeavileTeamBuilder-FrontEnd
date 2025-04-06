import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { MissignoMenu } from "./missignoMenu/MissignoMenu";

export const SelectedTeamMemberMenuWrapper = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;

    console.log(selectedPokemon);
    

    return (
        <>
            {
                selectedPokemon?.name === null ? <MissignoMenu /> : <p>aaaaa</p>
            }
        </>
    );
}