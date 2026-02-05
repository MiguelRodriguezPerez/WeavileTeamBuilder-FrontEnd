import { PokemonType } from "../../../../../../domain/dataEntities/PokemonType";
import { assignPokemonTypeToPng } from "../../../../../../globalHelpers";

import styles from '../../../../styles/missignoMenu/missignoCard.module.css';

export const MissignoTypes = ({ typeList }: { typeList: PokemonType[] }) => {
    return (
        <span className={styles['missigno-types-list']}>
            {
                typeList.map((type, index) => (
                    <img
                        src={ assignPokemonTypeToPng(type) }
                        alt={`${type.name.toLowerCase()}.png`}
                        key={index}
                    />
                ))
            }
        </span>
    );
}
