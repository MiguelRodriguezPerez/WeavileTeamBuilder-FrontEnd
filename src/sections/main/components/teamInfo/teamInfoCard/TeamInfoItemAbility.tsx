import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";

export const TeamInfoItemAbility = ({ member } : { member: PokemonTeamMember }) => {
  
    return (
        <div>
            {
                member.item ? 
                <div>
                    <img 
                        src={`data:image/jpeg;base64,${member.item?.image_sprite}`} 
                        alt={ member.item?.name } />
                    <p>{ member.item?.name }</p>
                </div>
                : 
                'No item'
            }
            <p>{ member.ability?.name }</p>
        </div>
    );
}