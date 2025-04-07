import { useEffect } from 'react';
import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { useDefaultTeam } from '../../hooks/useDefaultTeam';
import { BannerMember, SelectedTeamName, TeamTypesDropdown } from './';

import '../../styles/selectedTeamBanner.css';

export const SelectedTeamBanner = () => {

    const { getDefaultTeam } = useDefaultTeam();
    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);

    useEffect(() => {
        const asyncEffectWrapper = async () => {            
            await getDefaultTeam();
        }
        asyncEffectWrapper();
    }, []);

    return (
        <section className="selected-team-banner">
            {/* This component renders before useEffect finishes causing to selectedTeam to be undefined
            That is why all nodes check if selectedTeam is undefined before rendering*/}
            {
                selectedTeam && <SelectedTeamName />
            }
            {
                selectedTeam?.teamMembers
                && selectedTeam.teamMembers.map((member, index) => (
                    <BannerMember member={member} key={index} />
                ))
            }
            <TeamTypesDropdown />
        </section>
    );
}