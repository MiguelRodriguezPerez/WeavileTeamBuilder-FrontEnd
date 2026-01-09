import { toPascalCase } from '../../../../../../globalHelpers';
import { useAddNewPokemonMember } from '../../../../hooks/missignoGrid';
import { MissignoDTO } from '../MissignoDTO';
import { MissignoAbilities, MissignoSprite, MissignoStats, MissignoTypes } from './';


import styles from '../../../../styles/missignoMenu/missignoCard.module.css';

export const MissignoCard = ({ dto }: { dto: MissignoDTO }) => {

    const { updateMember } = useAddNewPokemonMember();

    return (
        <li className={styles['missigno-card']} onClick={() => updateMember(dto.name)}>
            <MissignoSprite dto={dto} />
            <span className={styles['missigno-name']}>{toPascalCase(dto.name)}</span>
            <MissignoTypes typeList={dto.type_list} />
            <MissignoAbilities abilityList={dto.ability_list} />
            <MissignoStats dto={dto} />
        </li>
    );
}