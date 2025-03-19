import { useEffect } from "react";
import { TeamType } from "../../../../domain/enums/TeamType";
import { PokemonTeam } from '../../../../domain/teamMemberEntities/PokemonTeam';
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { createNewTeamRequest } from "../../api/nonLoggedUsers";
import { checkIfUserHasTeams } from "../../helpers/nonLoggedUser";
import { storePokemonTeam } from "../../helpers/nonLoggedUser/storePokemonTeam";
import { PokemonBannerWrapper } from "./SelectedPokemon";
import { TeamTypesDropdown } from "./TeamTypesDropdown";

import '../../styles/selectedTeamBanner.css';
import { SelectedTeamName } from "./SelectedTeamName";


export const SelectedTeamBanner = () => {
    // TODO: Get current team from context

    // Current TODO: Create first void team by default

    const currentPokemonTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);
    console.log(currentPokemonTeam);

    /* Si el usuario no tiene equipos, se le creará uno por defecto */
    useEffect(() => {
        const asyncEffectWrapper = async () => {
            const response = await createNewTeamRequest(TeamType.INDIVIDUAL);
            if (response.status === 201) {
                const firstPokemonTeam: PokemonTeam = response.data;
                storePokemonTeam(firstPokemonTeam);
            }
        }

        if (!checkIfUserHasTeams()) asyncEffectWrapper();
    }, [])

    return (
        <section className="selected-team-banner">
            {currentPokemonTeam && <SelectedTeamName />}
            {
                currentPokemonTeam?.members.map((member) => (
                    <PokemonBannerWrapper member={member} />
                ))
            }
            <TeamTypesDropdown />
        </section>
    );
}