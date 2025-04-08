import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../globalContext/WeavileStore";
import { SelectedPokemonDataProvider } from "../../../context/pokemonData/SelectedPokemonDataProvider";
import { MemberCard } from "./selectedMemberCard";

export const TeamMemberMenu = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!)

    return (
        <SelectedPokemonDataProvider pokemonName={selectedPokemon.name}>
            <section>
                <MemberCard />

            </section>
        </SelectedPokemonDataProvider>
    );
}