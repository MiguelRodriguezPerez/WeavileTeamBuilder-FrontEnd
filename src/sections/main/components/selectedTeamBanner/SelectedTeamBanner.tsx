import { TeamType } from '../../../../domain/enums';
import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { createNewTeamRequest } from '../../api/nonLoggedUsers';
import { checkIfUserHasTeams, storePokemonTeam } from '../../helpers/nonLoggedUser';
import { PokemonBannerWrapper, SelectedTeamName, TeamTypesDropdown } from './';

import '../../styles/selectedTeamBanner.css';
import { useEffect } from 'react';

export const SelectedTeamBanner = () => {
    // TODO: Get current team from context

    // Current TODO: Create first void team by default

    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);
    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);

    /* Si el usuario no tiene equipos, se le creará uno por defecto */
    useEffect(() => {
        // localStorage.clear();

        const asyncEffectWrapper = async () => {
            const result: PokemonTeam | null = checkIfUserHasTeams();

            if (result !== null){
                changeSelectedTeam(result);
            }
            else {
                console.log('bbbbbbb');
                    const response = await createNewTeamRequest(TeamType.INDIVIDUAL);
                    
                    if (response.status === 201) {
                        console.log('aaaaaaaaaaaaaaa');
                        const firstPokemonTeam: PokemonTeam = response.data;
                        storePokemonTeam(firstPokemonTeam);
                        changeSelectedTeam(firstPokemonTeam);
                    }
                    else throw new Error ("Error creating default first pokemon " + response.statusText);
            }
        }

        
        if(selectedTeam === null) asyncEffectWrapper();
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