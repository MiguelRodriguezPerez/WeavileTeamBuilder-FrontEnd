import { MissignoDTO } from "../MissignoDTO";

export const MissignoSprite = ({ dto } : { dto: MissignoDTO }) => {
  
    return (
        <img 
            src={  dto.pc_sprite ? `data:image/png;base64,${ dto.pc_sprite}` : 'images/ui/missignoIcon.png' } 
            className={  dto.pc_sprite ? 'missigno-icon-defined' : 'missigno-icon'}
            alt={ dto.name + '.png'} 
        />
    );
}