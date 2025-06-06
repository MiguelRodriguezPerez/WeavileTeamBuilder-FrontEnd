import { PokemonType } from '../../../../../../../domain/enums/PokemonType';
import { assignPokemonTypeToPng } from '../../../../../../../globalHelpers';

import '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/typeCoverageGrid.css';

export const PokemonTypeGrid = ({ typeList }: { typeList: PokemonType[] }) => {

    return (
        <ul className='type-coverage-grid'>
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