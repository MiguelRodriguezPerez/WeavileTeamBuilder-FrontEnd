import { PokemonType } from '../../../../../../../domain/enums/PokemonType';
import { assignPokemonTypeToPng } from '../../../../../../../globalHelpers';

import '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageGrid.css';

export const TypeCoverageGrid = ({ typeList }: { typeList: PokemonType[] }) => {

    return (
        <ul className='type-coverage-grid'>
            {
                typeList.map((type) => (
                    <li key={ type } >
                        <img src={assignPokemonTypeToPng(type)}/>
                    </li>
                ))
            }
        </ul>
    );
}