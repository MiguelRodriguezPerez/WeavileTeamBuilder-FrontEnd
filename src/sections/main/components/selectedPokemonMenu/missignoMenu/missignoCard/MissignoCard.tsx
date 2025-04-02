
import '../../../../styles/missignoMenu/missignoCard.css'
import { MissignoDTO } from '../MissignoDTO';

export const MissignoCard = ({ dto }: { dto: MissignoDTO }) => {
    return (
        <li className='missigno-card'>
            <img 
                src={ dto.pc_sprite ? `data:image/jpeg;base64,${dto.pc_sprite}` : 'images/main/missignoMenu/missignoIcon.png' } 
                /* Las dimensiones de los iconos de pokemón y missignoIcon no coinciden,
                así que para alinearlos modifique los márgenes en caso de 
                que toque mostrar missignoIcon */ 
                style={{ margin: dto.pc_sprite ? '0px' : '10px 10px -5px' }}  
                alt={dto.name + '.png'} 
            />
            <span className='missigno-name'>{dto.name}</span>

        </li>
    );
}