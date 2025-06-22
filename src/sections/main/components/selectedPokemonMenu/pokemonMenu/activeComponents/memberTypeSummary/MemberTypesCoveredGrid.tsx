import { PokemonType } from '../../../../../../../domain/enums/PokemonType';
import { assignPokemonTypeToPng } from '../../../../../../../globalHelpers';

import styles from '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/typeCoverageGrid.module.css';

export const MemberTypesCoveredGrid = ({ typeList }: { typeList: PokemonType[] }) => {
  
    return (
        <ul className={ styles['member-type-coverage-grid'] }>
            {
                typeList.length === 0 ?
                    <p style={{ gridColumn: '1/6', margin: '0px' }}>No types to display</p>
                    :
                    typeList.map((type) => (
                        <li key={type} >
                            <img src={assignPokemonTypeToPng(type)} />
                        </li>
                    ))
            }
        </ul>
    );
}