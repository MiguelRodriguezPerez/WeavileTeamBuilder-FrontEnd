import { PokemonType } from "../../../../../../domain/dataEntities/PokemonType";
import { getImgSrcFromBase64 } from "../../../../../../globalHelpers/getImgSrcFromBase64";

import styles from '../../../../styles/missignoMenu/missignoCard.module.css';

export const MissignoTypes = ({ typeList }: { typeList: PokemonType[] }) => {
    return (
        <span className={styles['missigno-types-list']}>
            {
                typeList.map((type, index) => (
                   <img 
                    src={ getImgSrcFromBase64(type.sprite) } 
                    alt={`${type.nombre.toLowerCase()}.png`} 
                    key={index} 
                />
                ))
            }
        </span>
    );
}
