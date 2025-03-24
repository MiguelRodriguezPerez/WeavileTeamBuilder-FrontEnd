
import { PokemonTeamMember } from '../../../../../domain/teamMemberEntities/PokemonTeamMember';
import { MemberAbility } from './MemberAbility';
import { MemberName } from './MemberName';
import { MemberSprite } from './MemberSprite';

import '../../../styles/selectedPokemon.css';

export const BannerMember = ({ member }: { member: PokemonTeamMember }) => {

    return (
        <div className='pokemon-banner-element'>
            <MemberSprite sprite={ member.front_default_sprite }/>
            {/* ?? "-" significa que si la prop inicial (member.name) es null enviará "-" */}
            <MemberName name={ member.name ?? "-" } />
            <MemberAbility ability={ member.ability?.name ?? ""} />
        </div>
    )
}