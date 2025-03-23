import { PokemonTeam } from '../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../globalContext/WeavileStore';
import { PokemonBannerWrapper, SelectedTeamName, TeamTypesDropdown } from './';
import { useEffect } from 'react';
import { useDefaultTeam } from '../../hooks/useDefaultTeam';

import '../../styles/selectedTeamBanner.css';

export const SelectedTeamBanner = () => {

    const { getDefaultTeam } = useDefaultTeam();
    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);
    console.log(selectedTeam?.members);
    
    const changeSelectedTeam = useWeavileStore((state) => state.changeSelectedTeam);
    // localStorage.clear();

    /* Si el usuario no tiene equipos, se le creará uno de tipo individual por defecto */
    useEffect(() => {
        const asyncEffectWrapper = async() => { 
            /* TODO: Persistir contexto zustand. No puedes mandarselo con useEffect constantemente.
            Evita este log */
            console.log('NO LEAS ESTE MENSAJE');
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
                    && selectedTeam.members.map((member) => (
                        <PokemonBannerWrapper member={member} />
                    ))
            }
            <TeamTypesDropdown />
        </section>
    );
}