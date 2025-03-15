
import { NoPokemonSelected } from './NoPokemonSelected';
import { PokemonTeamMember } from '../../../../domain/teamMemberEntities/PokemonTeamMember';


export const PokemonBannerWrapper = ({member} : {member?: PokemonTeamMember}) => {

    return (
        member ? <p>BIeeen</p> : <NoPokemonSelected/>
    );
    
}