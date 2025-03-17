import { PokemonBannerWrapper } from "./SelectedPokemon";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { PokemonTeam } from '../../../../domain/teamMemberEntities/PokemonTeam';
import { useEffect } from "react";
import { checkIfUserHasTeams } from "../../helpers";
import { createNewTeam } from "../../api";
import { TeamType } from "../../../../domain/enums/TeamType";
import { storePokemonTeam } from "../../helpers/storePokemonTeam";

import '../../styles/selectedTeamBanner.css'

export const SelectedTeamBanner = () => {
    // TODO: Get current team from context

    // Current TODO: Create first void team by default

    const currentPokemonTeam : PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);
    console.log(currentPokemonTeam);
    
    useEffect(() => {
       const asyncEffectWrapper = async() => {
        if(!checkIfUserHasTeams()) {
            const response = await createNewTeam(TeamType.INDIVIDUAL);
            const firstPokemonTeam: PokemonTeam = response.data;
            storePokemonTeam(firstPokemonTeam);
        }
       }

       asyncEffectWrapper();
    }, [])

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