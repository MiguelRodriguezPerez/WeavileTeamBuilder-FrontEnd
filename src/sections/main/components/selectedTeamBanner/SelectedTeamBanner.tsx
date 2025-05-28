import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { BannerMember, SelectedTeamName, TeamTypesDropdown } from './';

import '../../styles/selectedTeamBanner.css';

export const SelectedTeamBanner = () => {


    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);

    return (
        <section className="selected-team-banner">
            {
                selectedTeam && <SelectedTeamName />
            }
            {
                selectedTeam?.teamMembers
                && selectedTeam.teamMembers.map((member, index) => (
                    <BannerMember member={member} key={index} />
                ))
            }
            {/* <TeamTypesDropdown /> */}
        </section>
    );
}