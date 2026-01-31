import { MissignoDto } from "../MissignoDTO";

import styles from '../../../../styles/missignoMenu/missignoCard.module.css';

export const MissignoStats = ({ dto }: { dto: MissignoDto }) => {
    return (
        <div className={styles['missigno-stats']} >
            <span>HP</span>
            <span>Atk</span>
            <span>Def</span>
            <span>SpA</span>
            <span>SpD</span>
            <span>Spe</span>

            <span className="missigno-num-stat">{dto.base_hp}</span>
            <span className="missigno-num-stat">{dto.base_attack}</span>
            <span className="missigno-num-stat">{dto.base_defense}</span>
            <span className="missigno-num-stat">{dto.base_special_attack}</span>
            <span className="missigno-num-stat">{dto.base_special_defense}</span>
            <span className="missigno-num-stat">{dto.base_speed}</span>
        </div>

    );
}