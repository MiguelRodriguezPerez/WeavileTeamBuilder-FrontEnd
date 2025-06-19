import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import { toPascalCase } from "../../../../../globalHelpers";

export const TeamInfoSprite = ({ member } : { member: PokemonTeamMember }) => {
  
    return (
        <div>
            {
                member.front_default_sprite &&
              <>
                <img 
                    src={`data:image/jpeg;base64,${ member.front_default_sprite }`} 
                    alt={ member.name?.toLowerCase() } 
                />
                <h3>{ toPascalCase(member.name!) }</h3>
              </>
            }
        </div>
    );
}