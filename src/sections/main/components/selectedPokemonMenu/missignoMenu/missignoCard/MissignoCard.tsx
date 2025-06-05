import { toPascalCase } from '../../../../../../globalHelpers';
import { useSelectedPokemonMember } from '../../../../hooks/missignoGrid';
import { MissignoDTO } from '../MissignoDTO';
import { MissignoAbilities, MissignoSprite, MissignoStats, MissignoTypes } from './';


import '../../../../styles/missignoMenu/missignoCard.css';

export const MissignoCard = ({ dto }: { dto: MissignoDTO }) => {

    const { updateMember } = useSelectedPokemonMember();
    
    return (
        <li className='missigno-card' onClick={() => updateMember(dto.name)}>
            <MissignoSprite dto={ dto }/>
            <span className='missigno-name'>{toPascalCase(dto.name)}</span>
            <MissignoTypes typeList={dto.type_list}/>
            <MissignoAbilities abilityList={dto.ability_list}/>
            <MissignoStats dto={dto} />
        </li>
    );
}