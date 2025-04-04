import { MissignoDTO } from "../MissignoDTO";

import '../../../../styles/missignoMenu/missignoCard.css';

export const MissignoStats = ({ dto } : { dto : MissignoDTO }) => {
    return (
        <div className="missigno-stats">
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