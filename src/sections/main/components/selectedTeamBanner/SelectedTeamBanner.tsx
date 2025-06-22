import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { BannerMember, SelectedTeamName } from './';

import styles from '../../styles/selectedTeamBanner/selectedTeamBanner.module.css';


export const SelectedTeamBanner = () => {


    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);

    return (
        <section className={ styles['selected-team-banner'] }>
            {
                selectedTeam 
                && (
                    <>
                        <SelectedTeamName />
                        { 
                            selectedTeam.teamMembers.map((member, index) => (
                                <BannerMember member={member} key={index} />
                            ))
                        }
                        {/* <TeamTypesDropdown /> */}
                    </>
                )}
        </section>

    );
}