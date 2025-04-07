import { useState } from "react";
import { MemberCard } from "./MemberCard";
import { SelectedPokemonDataProvider } from "../../../context/pokemonData/PokemonDataProvider";
import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../globalContext/WeavileStore";

export const TeamMemberMenu = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!)
    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <SelectedPokemonDataProvider pokemonName={selectedPokemon.name}>
            <section>
                <MemberCard />
            </section>
        </SelectedPokemonDataProvider>
    );
}