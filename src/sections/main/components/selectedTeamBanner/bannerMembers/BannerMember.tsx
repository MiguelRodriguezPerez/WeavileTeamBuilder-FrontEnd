
import { PokemonTeamMember } from '../../../../../domain/teamMemberEntities/PokemonTeamMember';
import { MemberAbility } from './MemberAbility';
import { MemberName } from './MemberName';
import { MemberSprite } from './MemberSprite';
import useWeavileStore from '../../../../../globalContext/WeavileStore';
import { useLocation, useNavigate } from 'react-router';

import styles from '../../../styles/selectedTeamBanner/selectedMember/bannerMember.module.css';


export const BannerMember = ({ member }: { member: PokemonTeamMember }) => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const changeSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon); 

    const onClickWrapper = () => {
        changeSelectedPokemon(member);
        /* Necesitas esta chapuza porque si el usuario está en la lista de equipos y hace click en un pokemón del banner
        quieres que lo redirija a la página principal, la que manipula el equipo ya seleccionado */
        if (pathname === '/teamsList') navigate('/');
        // pokemon-banner-element
    }

    return (
        <div className={ styles['banner-member'] } onClick={ onClickWrapper }>
            <MemberSprite member={ member }/>
            {/* ?? "-" significa que si la prop inicial (member.name) es null enviará "-" */}
            <MemberName name={ member.name ?? "-" } />
            <MemberAbility ability={ member.ability?.name ?? ""} />
        </div>
    )
}