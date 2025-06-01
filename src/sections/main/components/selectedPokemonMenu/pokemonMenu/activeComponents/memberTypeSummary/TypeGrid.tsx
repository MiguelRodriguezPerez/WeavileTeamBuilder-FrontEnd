import { PokemonType } from '../../../../../../../domain/enums/PokemonType';
import { assignPokemonTypeToPng } from '../../../../../../../globalHelpers';

import '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/typeCoverageGrid.css';

export const TypeGrid = ({ typeList }: { typeList: PokemonType[] }) => {

    return (
        <ul className='type-coverage-grid'>
            {
                typeList.map((type) => (
                    <li key={type} >
                        <img src={assignPokemonTypeToPng(type)} />
                    </li>
                ))
            }
        </ul>
    );
}