
import { NoPokemonSelected } from './NoPokemonSelected';
import { PokemonTeamMember } from '../../../../domain/teamMemberEntities/PokemonTeamMember';


export const PokemonBannerWrapper = ({ member } : { member: PokemonTeamMember }) => {

    console.log(member);
    
    return (
        member === undefined ? <p>BIeeen</p> : <NoPokemonSelected/>
    );
    
}