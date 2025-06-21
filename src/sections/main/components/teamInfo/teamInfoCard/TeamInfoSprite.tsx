import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import { assignPokemonTypeToPng, toPascalCase } from "../../../../../globalHelpers";

import styles from '../../../styles/teamInfo/teamInfoSprite.module.css'

export const TeamInfoSprite = ({ member } : { member: PokemonTeamMember }) => {
  
    return (
        <div className={ styles['team-info-sprite'] }>
            {
                member.front_default_sprite &&
              <>
                <img 
                    src={`data:image/jpeg;base64,${ member.front_default_sprite }`} 
                    alt={ member.name?.toLowerCase() } 
                />
                <h3>{ toPascalCase(member.name!) }</h3>
                <ul className={ styles['pokemon-type-list'] }>
                    {
                        member.type_list!.map((type) => (
                            <li key={ type } >
                                <img src={ assignPokemonTypeToPng(type) } alt={ type }/>
                            </li>
                        ))
                    }
                </ul>
              </>
            }
        </div>
    );
}