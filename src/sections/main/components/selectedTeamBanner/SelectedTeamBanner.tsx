import { useEffect } from 'react';
import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { useDefaultTeam } from '../../hooks/useDefaultTeam';
import { BannerMember, SelectedTeamName, TeamTypesDropdown } from './';

import '../../styles/selectedTeamBanner.css';

export const SelectedTeamBanner = () => {

    const { getDefaultTeam } = useDefaultTeam();
    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);
    console.log(selectedTeam?.members);

    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);
    // localStorage.clear();

    /* Si el usuario no tiene equipos, se le creará uno de tipo individual por defecto */
    useEffect(() => {
        const asyncEffectWrapper = async () => {
            await getDefaultTeam();
        }
        if (selectedTeam === null || selectedTeam === undefined) asyncEffectWrapper();
        console.log(selectedTeam);
    }, []);

    return (
        <section className="selected-team-banner">
            {/* Por la razón que sea el componente se renderiza antes de que el efecto se dispare,
            provocando que en caso de que no existan equipos el renderizado de los nodos se adelante al efecto,
            impidiendo su correcto funcionamiento */}
            {
                selectedTeam && <SelectedTeamName />
            }
            {
                /* Lo mismo con members */
                selectedTeam?.members
                /* Si no planeas cambiar de manera dinámica el número de pokemón (el dropdown no cuenta)
                ni moverlos de posición key={index} es seguro */
                && selectedTeam.members.map((member, index) => (
                    <BannerMember member={member} key={index} />
                ))
            }
            <TeamTypesDropdown />
        </section>
    );
}