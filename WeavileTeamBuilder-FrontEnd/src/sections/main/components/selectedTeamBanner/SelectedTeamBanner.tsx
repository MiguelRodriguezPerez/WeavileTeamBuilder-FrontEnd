import { PokemonBannerWrapper } from "./SelectedPokemon";

import '../../styles/selectedTeamBanner.css'
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { PokemonTeam } from "../../../../domain/teamMemberEntities/PokemonTeam";

export const SelectedTeamBanner = () => {
    // TODO: Get current team from context

    const currentPokemonTeam : PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);

    return (
        <section className="selected-team-banner">
            {
                currentPokemonTeam?.members.map((member) => (
                    <PokemonBannerWrapper member={member}/>
                ))
            }
        </section>
    );
}