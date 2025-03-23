import { TeamType } from '../../../../domain/enums';
import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { createNewTeamRequest } from '../../api/nonLoggedUsers';
import { checkIfUserHasTeams, storePokemonTeam } from '../../helpers/nonLoggedUser';
import { PokemonBannerWrapper, SelectedTeamName, TeamTypesDropdown } from './';

import '../../styles/selectedTeamBanner.css';
import { useEffect } from 'react';
import { useDefaultTeam } from '../../hooks/useDefaultTeam';

export const SelectedTeamBanner = () => {

    const { getDefaultTeam } = useDefaultTeam();
    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);
    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);

    /* Si el usuario no tiene equipos, se le creará uno por defecto */
    useEffect(() => {

        const asyncEffectWrapper = async() => { 
            if(selectedTeam === null) await getDefaultTeam();
        }
        asyncEffectWrapper();

    }, [])

    return (
        <section className="selected-team-banner">
            {selectedTeam && <SelectedTeamName />}
            {
                selectedTeam?.members.map((member) => (
                    <PokemonBannerWrapper member={member} />
                ))
            }
            <TeamTypesDropdown />
        </section>
    );
}