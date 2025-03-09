import { SelectedPokemon } from "./SelectedPokemon";

import '../styles/selectedTeamBanner.css'

export const SelectedTeamBanner = () => {
    // TODO: Get current team from context

    return (
        <section className="selected-team-banner">
            <SelectedPokemon/>
            <SelectedPokemon/>
            <SelectedPokemon/>
            <SelectedPokemon/>
            <SelectedPokemon/>
            <SelectedPokemon/>
        </section>
    );
}