import { AbilityDto } from "../../../../../../domain/dataEntities";
import { parseAbility } from "../../../../../../globalHelpers/parseAbility";

import styles from '../../../../styles/missignoMenu/missignoCard.module.css';

export const MissignoAbilities = ({ abilityList }: { abilityList: AbilityDto[] }) => {
    return (
        <span className={styles['missigno-abilities-list']}>
            {
                abilityList.map((ability, index) => (
                    <span key={index}>{ parseAbility(ability.name) }</span>
                ))
            }
        </span>
    );
}