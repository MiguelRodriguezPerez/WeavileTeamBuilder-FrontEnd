import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import { toPascalCase } from "../../../../../globalHelpers";

import styles from '../../../styles/teamInfo/teamInfoItemAbility.module.css'

export const TeamInfoItemAbility = ({ member } : { member: PokemonTeamMember }) => {
  
    return (
        <div className={ styles['team-info-item-ability'] }>
            {
                member.item ? 
                <div className={ styles['item-div'] }>
                    <h3>Item</h3>
                    <img 
                        src={`data:image/jpeg;base64,${member.item?.image_sprite}`} 
                        alt={ member.item.name } />
                    <p>{ toPascalCase(member.item.name) }</p>
                </div>
                : 
                <p>No item</p>
            }
            <div>
                <h3>Ability</h3>
                <p>{ member.ability?.name }</p>
            </div>
        </div>
    );
}