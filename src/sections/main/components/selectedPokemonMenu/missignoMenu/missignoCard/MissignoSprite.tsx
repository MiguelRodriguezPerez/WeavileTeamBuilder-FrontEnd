import { MissignoDTO } from "../MissignoDTO";

import styles from '../../../../styles/missignoMenu/missignoCard.module.css';

export const MissignoSprite = ({ dto } : { dto: MissignoDTO }) => {
  
    return (
                <img 
                src={  dto.pc_sprite ? `data:image/png;base64,${ dto.pc_sprite}` : 'images/ui/missignoIcon.png' } 
                className={`${styles['missigno-sprite']} 
                    ${dto.pc_sprite ? styles['missigno-icon-defined'] : styles['missigno-icon']}`}

                alt={ dto.name + '.png'} 
            />
    );
}