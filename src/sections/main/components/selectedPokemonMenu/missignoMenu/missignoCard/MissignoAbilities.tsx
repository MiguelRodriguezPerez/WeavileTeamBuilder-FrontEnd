import { AbilityData } from "../../../../../../domain/dataEntities";
import { parseAbility } from "../../../../../../globalHelpers/parseAbility";

import '../../../../styles/missignoMenu/missignoCard.css'

export const MissignoAbilities = ({ abilityList } : { abilityList : AbilityData[] }) => {
    return (
        <span className="missigno-ablities-list">
            {
                abilityList.map((ability, index) => (
                    <span key={index}>{parseAbility(ability.name)}</span>
                )) 
            }
        </span>
    );
}