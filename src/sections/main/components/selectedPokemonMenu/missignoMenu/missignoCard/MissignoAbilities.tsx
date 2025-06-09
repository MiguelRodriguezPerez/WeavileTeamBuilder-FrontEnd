import { AbilityData } from "../../../../../../domain/dataEntities";
import { parseAbility } from "../../../../../../globalHelpers/parseAbility";

import styles from '../../../../styles/missignoMenu/missignoCard.module.css';

export const MissignoAbilities = ({ abilityList } : { abilityList : AbilityData[] }) => {
    return (
        <span className={styles['missigno-abilities-list']}>
            {
                abilityList.map((ability, index) => (
                    <span key={index}
                        /* Las habilidades en showdown van de la siguiente manera. 
                        Si hay dos, es un grid normal, pero si hay tres, será un grid de dos columnas
                        y la habilidad que no comparte columna con otra se anexiona el siguiente row vacío */
                        style={
                            (abilityList.length === 3 && index === 1) ? { gridRow: '1/3' } : undefined
                        }>{parseAbility(ability.name)}</span>
                )) 
            }
        </span>
    );
}