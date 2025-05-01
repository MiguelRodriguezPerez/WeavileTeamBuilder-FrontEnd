import { PokemonType } from '../../../../../../../domain/enums/PokemonType';
import { assignPokemonTypeToPng } from '../../../../../../../globalHelpers';

import '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageGrid.css';

export const MemberTypeGrid = ({ heading, typeList }: { heading: String, typeList: PokemonType[] }) => {

    return (
        <div>
            <h5>{heading}</h5>
            <ul className='type-coverage-grid'>
                {
                    typeList.map((type) => (
                        <li key={type} >
                            <img src={assignPokemonTypeToPng(type)} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}