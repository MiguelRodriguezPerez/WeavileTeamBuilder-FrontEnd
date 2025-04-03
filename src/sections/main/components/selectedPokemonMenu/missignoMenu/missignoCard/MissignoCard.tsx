
import { toPascalCase } from '../../../../../../globalHelpers';
import { MissignoDTO } from '../MissignoDTO';
import { MissignoTypes } from './MissignoTypes';

import '../../../../styles/missignoMenu/missignoCard.css'

export const MissignoCard = ({ dto }: { dto: MissignoDTO }) => {
    
    return (
        <li className='missigno-card'>
            <img 
                src={ dto.pc_sprite ? 
                    `data:image/jpeg;base64,${dto.pc_sprite}` : 'images/main/missignoMenu/missignoIcon.png' } 
                className={ dto.pc_sprite ? '' : 'missigno-icon'}
                alt={dto.name + '.png'} 
            />
            <span className='missigno-name'>{toPascalCase(dto.name)}</span>
            <MissignoTypes typeList={dto.type_list}/>
        </li>
    );
}