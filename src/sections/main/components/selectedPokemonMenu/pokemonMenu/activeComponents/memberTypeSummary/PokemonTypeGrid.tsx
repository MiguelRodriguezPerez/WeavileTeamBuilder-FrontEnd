import { PokemonTypeEnum } from '../../../../../../../domain/enums/PokemonTypeEnum';
import { assignPokemonTypeEnumToPng } from '../../../../../../../globalHelpers';

import styles from '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/typeCoverageGrid.module.css';

export const PokemonTypeGrid = ({ typeList }: { typeList: PokemonTypeEnum[] }) => {

    return (
        <ul className={styles['type-coverage-grid']}>
            {
                typeList.length === 0 ?
                    <p style={{ gridColumn: '1/6', margin: '0px' }}>No types to display</p>
                    :
                    typeList.map((type) => (
                        <li key={type} >
                            <img src={assignPokemonTypeEnumToPng(type)} />
                        </li>
                    ))
            }
        </ul>
    );
}